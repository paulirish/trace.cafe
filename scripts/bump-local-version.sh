#!/usr/bin/env bash

# Gcloud Troubleshooting for @google.com accounts:
# If this fails with SSL errors or "Max retries exceeded with url: /token":
# 1. Ensure mTLS is on:       gcloud config set context_aware/use_client_certificate true
# 2. Use system CA bundle:    gcloud config set core/custom_ca_certs_file /opt/homebrew/etc/openssl@3/cert.pem
# 3. Disable sliced DLs:      gcloud config set storage/sliced_object_download_threshold 0
# 4. Re-auth if needed:       gcloud auth login

set -euo pipefail

json=$(curl -s 'https://chromiumdash.appspot.com/fetch_releases?platform=Linux&channel=Canary')
version=$(echo "$json" | jq -r '.[0].version')
hash=$(echo "$json" | jq -r '.[0].hashes.chromium')
chromebucket="chrome-unsigned/desktop-5c0tCh"

echo "Latest Version available: $version"
echo "Latest Hash available:    $hash"

# 1. Download and Prepare assets FIRST
echo "Downloading DevTools frontend..."
gcloud storage cp "gs://$chromebucket/$version/linux64/devtools-frontend.zip" .

echo "Extracting and trimming..."
# Wipe any possible residue from previous runs
rm -rf devtools-frontend_tmp devtools_front_end_tmp devtools-frontend
unzip -qo devtools-frontend.zip -d devtools-frontend_tmp
rm devtools-frontend.zip

mkdir -p ./devtools_front_end_tmp
# Find the actual front_end folder (it's often nested deep)
FE_PATH=$(find devtools-frontend_tmp -name "front_end" -type d | head -n 1)
cp -R "$FE_PATH"/* ./devtools_front_end_tmp/
rm -rf devtools-frontend_tmp

# Cleanup
rm -rf ./devtools_front_end_tmp/panels/timeline/fixtures
rm -rf ./devtools_front_end_tmp/third_party/lighthouse
rm -rf ./devtools_front_end_tmp/third_party/puppeteer

find ./devtools_front_end_tmp \( \
    -name "*.hash" -o \
    -name "*.test.js*" -o \
    -name "*.compressed" -o \
    -name "*.d.ts" -o \
    -name "*tsconfig.json" -o \
    -name "*.ts" -o \
    -name "*.prebundle.js" -o \
    -name "*.map" -o \
    -name "*.md" \
\) -delete

# Strip CSP meta tag
perl -i -0777 -pe 's/<meta\s+http-equiv="Content-Security-Policy".*?>//gs' ./devtools_front_end_tmp/trace_app.html

# 2. Update the source code ONLY after assets are ready
echo "Updating app.js..."
declaration="const chromiumHashVer = ['${hash}', '${version}'];"
# Use a more robust sed or perl to avoid path issues
perl -i -pe "s/const chromiumHashVer = \[.*/$declaration/" src/app.js

# 3. Swap the directories into dist
echo "Swapping dist/devtools_front_end..."
rm -rf dist/devtools_front_end
mkdir -p dist
mv devtools_front_end_tmp dist/devtools_front_end

echo "Done! Version $version is now ready in src/app.js and dist/."

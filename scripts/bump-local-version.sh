#!/usr/bin/env bash

set -euo pipefail

json=$(curl 'https://chromiumdash.appspot.com/fetch_releases?platform=Linux&channel=Canary')
version=$(echo "$json" | jq -r '.[0].version')
hash=$(echo "$json" | jq -r '.[0].hashes.chromium')

echo "Version: $version"
echo "Hash: $hash"


declaration="const chromiumHashVer = ['${hash}', '${version}'];"
sed -i "s/const chromiumHashVer.*/$declaration/" /Users/paulirish/code/trace.cafe/src/app.js
echo "app.js updated."


# can get timeCreated timestamp from:
#     gcloud storage ls --json "gs://$chromebucket/$version/linux64/devtools-frontend.zip"
gcloud storage cp  "gs://$chromebucket/$version/linux64/devtools-frontend.zip" .

unzip devtools-frontend.zip
rm -v devtools-frontend.zip

mkdir -p ./devtools_front_end
mv devtools-frontend/gen/third_party/devtools-frontend/src/front_end/* ./devtools_front_end

rm -v -r ./devtools_front_end/panels/timeline/fixtures
rm -v -r ./devtools_front_end/third_party/lighthouse
rm -v -r ./devtools_front_end/third_party/puppeteer

rm -v $(find ./devtools_front_end -iname "*.hash")
rm -v $(find ./devtools_front_end -iname "*.test.js*")
rm -v $(find ./devtools_front_end -iname "*.compressed")
rm -v $(find ./devtools_front_end -iname "*.d.ts")
rm -v $(find ./devtools_front_end -iname "*tsconfig.json")

# prebundle
rm -v $(find ./devtools_front_end -iname "*.ts")
rm -v $(find ./devtools_front_end -iname "*.prebundle.js")

# MAYBE...
# rm -v $(find ./devtools_front_end -iname "*.map")

rm -rf dist/devtools_front_end
mv -v devtools_front_end dist/
trash ./devtools_front_end

echo "dist/devtools_front_end updated."

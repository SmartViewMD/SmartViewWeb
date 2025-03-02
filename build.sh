#!/bin/bash
set -x
rm -r build
npm run build
cd ../smartviewmd.github.io/
git rm -r *
cp -r ../smartview/build/* .
#echo belleit.net > CNAME
#git add . 
#git commit -m "cleanup"
##
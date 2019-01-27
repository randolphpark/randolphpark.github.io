yes | rm -rf prod/*
yarn build
cp -R dist/* prod
cp CNAME prod/
cd prod
git add .
git commit -m "Deploy build"
git push
#!/bin/sh

echo "\nInitializing git repository...\n"
git init

echo "\nInstalling dependencies...\n"
yarn install

mv _env .env
mv _env.production .env.production

#!/usr/bin/env bash

set -e

git remote set-url origin https://git:${GH_TOKEN}@github.com/its-rigs/jukes-kitchen.git

npx gh-pages -d public -u "1016498+its-rigs@users.noreply.github.com"
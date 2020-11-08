#!/usr/bin/env bash

set -e

npx gh-pages-clean
npx gh-pages --dist public --repo "https://$GH_TOKEN@github.com/its-rigs/jukes-kitchen"

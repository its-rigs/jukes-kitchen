#!/usr/bin/env bash

set -e

npx gh-pages --silent --dist public --repo "https://$GH_TOKEN@github.com/its-rigs/jukes-kitchen"

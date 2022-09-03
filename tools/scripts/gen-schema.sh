#!/bin/sh

curl https://raw.githubusercontent.com/gothinkster/realworld/main/api/openapi.yml > src/test/fixtures/schema.yml
npx @rtk-query/codegen-openapi src/test/fixtures/config.js
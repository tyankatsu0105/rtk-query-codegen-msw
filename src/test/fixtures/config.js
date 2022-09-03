/** @type {import("@rtk-query/codegen-openapi").ConfigFile} */
const config = {
  apiFile: "./setup.ts",
  apiImport: "emptySplitApi",
  exportName: "api",
  hooks: true,
  outputFile: "./api.ts",
  schemaFile: "./schema.yml",
};

module.exports = config;

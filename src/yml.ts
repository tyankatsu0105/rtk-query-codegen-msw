import { load } from "js-yaml";
import { readFileSync } from "fs";

type Doc = {
  [key: string]: any;
  paths: {
    [path: string]: {
      [method: string]: {
        operationId: string;
      };
    };
  };
};

const doc = load(readFileSync("src/test/fixtures/schema.yml", "utf8")) as Doc;

const getPathMap = (): Record<string, string> => {
  const paths = doc.paths;

  const pathMap = Object.entries(paths).reduce((acc, [path, value]) => {
    const operationIds = Object.values(value).map((v) => v.operationId);
    operationIds.forEach((operationId) => {
      if (!operationId) return;
      acc[operationId.toLowerCase()] = path;
    });

    return acc;
  }, {});

  return {
    pathMap,
  };
};

console.log(JSON.stringify(getPathMap(), null, 2));

// {
//     'Login': '/users/login'
// }

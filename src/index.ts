import { Project, ts, SourceFile } from "ts-morph";
import path from "path";

const project = new Project({
  tsConfigFilePath: "tsconfig.json",
});

const getPathMap = (sourceFile: SourceFile) => {
  const pathMap = new Map();

  sourceFile
    .getDescendantsOfKind(ts.SyntaxKind.PropertyAssignment)
    .forEach((node) => {
      const hasURL = node
        .getChildrenOfKind(ts.SyntaxKind.Identifier)
        .some((node) => node.getText() === "url");
      if (!hasURL) return;

      const url = node.getChildren()[2]?.getText();
      const operationName = node
        .getParentIfKindOrThrow(ts.SyntaxKind.ObjectLiteralExpression)
        .getParentIfKindOrThrow(ts.SyntaxKind.ParenthesizedExpression)
        .getParentIfKindOrThrow(ts.SyntaxKind.ArrowFunction)
        .getParentIfKindOrThrow(ts.SyntaxKind.PropertyAssignment)
        .getParentIfKindOrThrow(ts.SyntaxKind.ObjectLiteralExpression)
        .getParentIfKindOrThrow(ts.SyntaxKind.CallExpression)
        .getParentIfKindOrThrow(ts.SyntaxKind.PropertyAssignment)
        .getChildrenOfKind(ts.SyntaxKind.Identifier)[0]
        .getText();

      pathMap.set(operationName, url);
    });

  return { pathMap };
};

const main = (options: { source: string }) => {
  const fixturePath = path.join(__dirname, options.source);
  const sourceFile = project.getSourceFileOrThrow(fixturePath);

  const { pathMap } = getPathMap(sourceFile);

  console.log(pathMap.entries());
};

main({
  source: "test/fixtures/api.ts",
});

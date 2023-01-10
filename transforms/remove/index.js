// jscodeshift can take a parser, like "babel", "babylon", "flow", "ts", or "tsx"
// Read more: https://github.com/facebook/jscodeshift#parser

// Press ctrl+space for code completion
module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  let ast = j(file.source);
  let didChange = false;
  let identifier;

  ast.find(j.ImportDeclaration).forEach((path) => {
    if (path.node.source.value === '@ember/error') {
      let importedName = path.node.specifiers[0].local.name;
      if (importedName !== 'Error') {
        identifier = importedName;
      }
      didChange = true;
      path.prune();
    }
  });

  ast.find(j.Identifier).forEach((path) => {
    if (path.node.name === identifier) {
      path.node.name = 'Error';
    }
  });

  return didChange ? ast.toSource() : file.source;
};

module.exports.parser = 'ts';

const { Linter, Configuration } = require('tslint');
const fs = require('fs');

exports.default = function(argOptions) {
  const option = Object.assign(
    {
      test: /\.(ts|tsx)$/
    },
    argOptions
  );

  return function(code, path) {
    const match =
      (option.test.apply && option.test(path)) || path.match(option.test);
    if (!match) return code;

    try {
      const linter = new Linter({
        fix: true
      });

      const conf = Configuration.findConfiguration(undefined, path).results;
      linter.lint(path, code, conf);
      return fs.readFileSync(path, 'utf8');
    } catch (e) {
      console.error('tslint error', e);
    }

    return code;
  };
};

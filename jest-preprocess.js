const babelOptions = {
  presets: ["babel-preset-next"],
};

module.exports = require("babel-jest").createTransformer(babelOptions);

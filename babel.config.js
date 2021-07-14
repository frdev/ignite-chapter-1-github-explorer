// Responsavel por transpilar o codigo para um que o browser entenda (JS)

module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};

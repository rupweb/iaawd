module.exports = {
  presets: [
    ["@babel/preset-env", {
      targets: {
        node: "current",
      },
      modules: "auto",
    }],
    "@babel/preset-react"
  ]
};

console.log('Babel config file executed');
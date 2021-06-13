const presets = [
  [
    "@babel/preset-env",
    {
      targets: "defaults",
    },
  ],
  "@babel/preset-react",
];

const plugins = [
  "react-hot-loader/babel",
  "@babel/plugin-proposal-optional-chaining",
];

module.exports = { presets, plugins };

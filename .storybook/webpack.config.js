module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [require.resolve("babel-preset-react-app")],
          },
        },
      ],
    },
    {
      test: /\.scss?$/,
      use: [
        { loader: require.resolve("style-loader") },
        { loader: require.resolve("css-loader") },
        {
          loader: require.resolve("sass-loader"),
        },
      ],
    }
  );
  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};

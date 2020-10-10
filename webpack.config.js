const { ESBuildPlugin } = require('esbuild-loader');
module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  output: {
    path: require('path').resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx',
            target: 'es2015',
          },
        }
      },
    ],
  },
  plugins: [
    new ESBuildPlugin()
  ],
}

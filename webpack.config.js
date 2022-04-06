const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  const CSSExtract = new MiniCssExtractPlugin({
    filename: 'styles.css',
  });

  return {
    entry: './src/App.jsx',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.jsx?$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(gif|svg|jpg|png)$/,
          use: [{
            loader: 'url-loader',
            options: {
              esModule: false,
            }
          }],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.scss'],
    },
    plugins: [
      CSSExtract
    ],
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/',
    },
  };
};

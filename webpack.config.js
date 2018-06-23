import htmlWebpackPlugin from 'html-webpack-plugin';
import liveReloadPlugin from 'webpack-livereload-plugin';
import path from 'path';

export default{
  entry: './src/client/index.js',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader', options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader', options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.woff$|\.ttf$|\.wav$|\.mp3$\.svg$/,
        loader: 'file-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader?[name].[ext]'
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/client/index.html'
      // favicon: './src/client/favicon.ico'
    }),
    new liveReloadPlugin()
  ]
};

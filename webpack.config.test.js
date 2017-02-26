const path = require('path')
const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const APP_DIR = path.resolve(__dirname, '')
const BUILD_DIR = path.resolve(__dirname, 'build-test')

const config = {

  entry: {
    app: ['mocha-loader!./test/index.js']
  },

  output: {
    path: BUILD_DIR,
    publicPath: "/",
    filename: 'tests.js'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },

  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: APP_DIR,
        exclude: /node_modules/
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                outputStyle: 'expanded',
                sourceMap: true,
                sourceMapContents: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('autoprefixer')({ browsers: ['> 5%'] })
                  ]
                }
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}

module.exports = config

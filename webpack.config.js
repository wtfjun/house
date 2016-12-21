var webpack = require('webpack');
//用于创建html文件
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var copy = require('quickly-copy-file');
var del = require('del');

// 开发环境
var isDev = function() {
  return process.env.NODE_ENV.trim() === 'development';
};

// 生产环境
var isProd = function() {
  return process.env.NODE_ENV.trim() === 'production';
};

copyAndDelFiles();

module.exports = {
  devtool: isProd() ? false : 'inline-source-map',
  entry: {
    index: [
      './src/js/index.js'
    ],
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'react-redux',
      'redux',
      'redux-thunk',
      'nprogress'
    ]
  },
  output: {
    path: isProd() ? './houseClient/public/dist': './dist',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: isProd() ? './dist/' : '/dist/'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader', {
        publicPath: '.'
      })
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      loaders: ["style-loader", "css-loader", "sass-loader"]
    }, { 
      test: /\.less$/, loader: ExtractTextPlugin.extract('css!less') 
    }, {
      test: /\.(png|jpg|svg)$/,
      loader: 'file-loader?name=/[name].[hash:8].[ext]'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
    }]
  },
  plugins: getPlugins()
};

// 复制和删除文件
function copyAndDelFiles() {
  // var copyFile = '';

  // // 复制文件
  // if (isDev()) {
  //   copyFile = 'src/html/index_dev.html';
  // } 

  // if (isProd()) {
  //   copyFile = 'src/html/index.html';
  // }

  // copy(copyFile, 'houseClient/views/index.html', function(error) {
  //   if (error) {
  //     return console.error(error);
  //   }
  // });

  if (isProd()) {
    del(['houseClient/public/dist']);
  }
}

// 获取配置
function getPlugins() {
  var plugins = [
    new webpack.DefinePlugin({
      __DEV__ : isDev(),
      __PROD__: isProd(),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV.trim())
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', isProd() ? 'vendor.js' : 'vendor.js'),
    new ExtractTextPlugin(isProd() ? '[name].css' : '[name].css'),
  ];

  if (isDev()) {
    plugins.push(
      new OpenBrowserPlugin({ url: 'http://127.0.0.1:8080/' })
    );
  }

  // if (isProd()) {
  //   plugins.push(
  //     new webpack.optimize.UglifyJsPlugin({
  //       minimize: true,
  //       output: {
  //         comments: false,
  //       },
  //       compress: {
  //         warnings: false
  //       }
  //     }),
  //     new HtmlWebpackPlugin({
  //       title: 'cobish - 写给未来的自己',
  //       filename: '../../views/index.html',
  //       template: './src/html/index_dev.html'
  //     new WebpackMd5Hash()
  //   );
  // }

  return plugins
}
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry:{
    'app':[
      'babel-polyfill',
      './index.js'
    ]
  },
  output:{
    path:path.join(process.cwd(),'dist'),
    filename:'[name]-[hash].js'
  },
  plugins:[
    new ExtractTextPlugin("[name]-[hash].css"),
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:'index.html',
      chunks:['app']
    })
  ],
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude:[/node_modules/],
        loader:'babel-loader'
      },
      {
        test:/\.css$/,
        loader:ExtractTextPlugin.extract("style-loader","css-loader")
      }
    ]
  },
  devServer:{
    noInfo:false,//Display no info to console (only warnings and errors)
    port:3000,
    stats:{
      chunks:false,//add chunk information (setting this to false allows for a less verbose output)
      assets:true, //add assets information
      source:false, //add the source code of modules
      reasons:false, //add information about the reasons why modules are included
      modules:false //add built modules information
    }
  }
}

//参考 http://webpack.github.io/docs/webpack-dev-middleware.html

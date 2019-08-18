const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {

  entry: path.join(__dirname, './src/main.js'),// 入口，表示，要使用 webpack 打包哪个文件
  output: { // 输出文件相关的配置
    path: path.join(__dirname, './dist'), // 指定 打包好的文件，输出到哪个目录中去
    filename: 'bundle.js' // 这是指定 输出的文件的名称
  },
  plugins:[
    new htmlWebpackPlugin({
      template:path.join(__dirname,'./src/index.html'),
      filename:'index.html'
    }),
    new VueLoaderPlugin()
  ],
  module:{
    rules:[
      {test:/\.css$/, use:['style-loader' ,'css-loader']},
      {test:/\.less$/, use:['style-loader' ,'css-loader','less-loader']},
      {test:/\.sass$/, use:['style-loader' ,'css-loader','sass-loader']},
      {test:/\.(jpg|png|gif|bmp|jpeg)$/, use:'url-loader'},
      {test:/\.(ttf|eot|svg|woff|woff2|ioc)$/, use:'url-loader'},
      {test:/\.js$/, use:'babel-loader',exclude:/node_modules/},
      {test:/\.vue$/, use:'vue-loader'}
  ]
  },
  resolve:{
    alias:{
      "vue$":"vue/dist/vue.js"
    }
  }
}
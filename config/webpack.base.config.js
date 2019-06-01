const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        app: "./main.js"            //入口文件
    },
    output: {
        path: path.join(__dirname, '../dist'),       //打包输出路径
        filename: '[name].js'           //打包输出文件名字  name对应的是 entry 里面的app
    },
    plugins: [
        new HtmlWebpackPlugin ({
            filename: 'index.html',         //html文件名
            template: 'index.html',          //制定的文件模板
            inject: true                     //是否引用已经打包好的js
        })
    ]
}
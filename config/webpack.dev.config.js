const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueloaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: 'development',
    entry: {
        app: "./main.js"            //入口文件
    },
    output: {
        path: path.join(__dirname, '../dist'),       //打包输出路径
        filename: '[name].js'           //打包输出文件名字  name对应的是 entry 里面的app
    },
    resolve:{
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',  //设置别名，不然使用 import  识别不了 vue
            '@': path.join(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,      //排除node_modules文件
                options: {
                    extractCSS: true        //提取.vue文件中的style作为单个的css文件
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                exclude: /node_modules/      //排除node_modules文件
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,      //排除node_modules文件
                options: {
                    presets: ['env']        //作为参数传入babel-loader,babel-loader会根据浏览器的不同自动编译成es5 或者es6的语法
                }
            }
        ]
    },
    plugins: [
        new VueloaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',         //html文件名
            template: 'index.html',          //制定的文件模板
            inject: true                     //是否引用已经打包好的js
        })
    ],
    devServer: {
        // contentBase: path.join(__dirname, '/dist'),
        // allowedHost: [
        //     "localhost"
        // ],
        // color: true,         //终端输出的文字为彩色
        inline: true, //自动刷新
        hot: true,          //热更新
        // lazy: true,         //webpack加载的时候再进行编译
        open: true,         //是否自动打开浏览器
        port: 3008          //端口号
    },
}
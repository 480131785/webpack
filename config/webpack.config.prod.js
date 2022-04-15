const CssMinizerPlugin = require('css-minimizer-webpack-plugin'); // 引入 css-minimizer-webpack-plugin 插件
const TerserPlugin = require('terser-webpack-plugin') // 引入 terser-webpack-plugin 插件

module.exports = {
    output: { // 出口文件
        filename: './script/[name].[contenthash].js', // 出口文件名
        publicPath: 'http://localhost:8080/'
    },
    mode: 'production', // 设置模式 'none' | 'development' | 'production'
    optimization: {
        minimizer: [
            new CssMinizerPlugin(),
            new TerserPlugin()
        ],
    },
    performance: {
        hints: false
    }
}
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入 html-webpack-plugin 插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 引入 mini-css-extract-plugin 插件

module.exports = {
    entry: {
        index: './src/index.js', // 配置 index.js 打包入口
        another: './src/another.js', // 配置 another.js 打包入口
    }, // 入口文件路径
    output: { // 出口文件
        path: path.resolve(__dirname, '../dist'), // 出口文件路径
        clean: true, // 生成新文件的同时是否删除旧文件
    },
    plugins: [
        new HtmlWebpackPlugin({ // 实例化 HtmlWebpackPlugin,它将帮我们生成一个 dist/index.html 文件
            template: './index.html', // 指定模板
            filename: 'app.html', // 生成的文件名
            inject: 'body' // script标签的生成位置
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[contenthash].css'
        })
    ],
    module: {
        rules: [ // 配置资源模块
            {
                test: /\.css$/, // 利用正则匹配以 .css 结尾的文件
                use: [MiniCssExtractPlugin.loader, 'css-loader'] // 使用的 loader
            },
            {
                test: /\.js$/, // 匹配 js 文件
                exclude: /node_modules/, // 去除编译 node_modules 包
                use: {
                    loader: 'babel-loader', // 使用 loader
                    options: {
                        presets: ['@babel/preset-env'], // 添加预设
                        plugins: [
                            [
                                '@babel/plugin-transform-runtime'
                            ]
                        ]
                    }
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                },
            },
        }
    }
}
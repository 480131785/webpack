// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入 html-webpack-plugin 插件

module.exports = {
    entry: './src/index.js', // 入口文件路径
    output: { // 出口文件
        filename: 'bundle.js', // 出口文件名
        path: path.resolve(__dirname, './dist'), // 出口文件路径
        clean: true // 生成新文件的同时是否删除旧文件
    },
    mode: 'development', // 设置模式 'none' | 'development' | 'production'
    devtool: 'inline-source-map', // 帮助定位错误源文件位置
    plugins: [
        new HtmlWebpackPlugin({ // 实例化 HtmlWebpackPlugin,它将帮我们生成一个 dist/index.html 文件
            template: './index.html', // 指定模板
            filename: 'index.html', // 生成的文件名
            inject: 'body' // script标签的生成位置
        })
    ],
    devServer: {
        static: './dist' // 路径
    },
    module: {
        rules: [ // 配置资源模块
            {
                test: /\.png$/, // 利用正则匹配以 .png 结尾的文件
                type: 'asset/resource', // 设置资源模块类型
                generator: {
                    filename: 'images/[contenthash][ext]' // contenthash 表示随机生成hash字符串作为文件名，ext表示生成文件的后缀和源文件保持一致
                }
            },
            {
                test: /\.svg$/, // 利用正则匹配以 .svg 结尾的文件
                type: 'asset/inline', // 设置资源模块类型
            },
            {
                test: /\.txt$/, // 利用正则匹配以 .txt 结尾的文件
                type: 'asset/source', // 设置资源模块类型
            },
            {
                test: /\.jpg$/, // 利用正则匹配以 .jpg 结尾的文件
                type: 'asset', // 设置资源模块类型
                parser: { // 修改边界值
                    dataUrlCondition: {
                        maxSize: 4 * 1024 * 1024 // 改为 4MB
                    }
                }
            }
        ]
    }
}
module.exports = {
    output: { // 出口文件
        filename: './script/[name].js', // 出口文件名
    },
    mode: 'development', // 设置模式 'none' | 'development' | 'production'
    devtool: 'inline-source-map',
    devServer: {
        static: './dist' // 路径
    },
}
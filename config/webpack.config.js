const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.config.common')
const prodConfig = require('./webpack.config.prod')
const devConfig = require('./webpack.config.dev')

module.exports = (env) => {
    console.log(env)
    if (env.production) {
        return merge(commonConfig, prodConfig)
    } else if (env.development) {
        return merge(commonConfig, devConfig)
    }
    return new Error('No matching configuration was found')
}
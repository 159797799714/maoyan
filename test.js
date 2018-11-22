// vue.config.js
module.exports = {
// vue脚手架工具的配置选项...
    devServer: {
        proxy: {
            '/ajax': {
                target: 'http://m.maoyan.com',
                changeOrigin: true
            }
        }
    }
}
const date = new Date();
const outputDir = `v2ex_dist_h5_${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()}_${date.getHours() + 1}_${date.getMinutes() + 1}`;

module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
    BASE_API_URL: '',
  },
  outputRoot: process.env.TARO_BUILD_TYPE === 'h5' ? outputDir : `v2ex_dist_${process.env.TARO_BUILD_TYPE}`,
  weapp: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
}

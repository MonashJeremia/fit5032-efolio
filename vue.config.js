/* eslint-env node */
const isProd =
  typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'production'
const config = {
  publicPath: isProd ? '/fit5032-efolio/' : '/'
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = config
}

export default config

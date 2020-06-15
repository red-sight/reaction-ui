const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/sass/_variables.sass";`
      }
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        icons: path.resolve(__dirname, 'node_modules/vue-material-design-icons')
      },
      extensions: ['.vue']
    }
  }
}

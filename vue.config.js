module.exports = {
  publicPath: './',
  outputDir: './dist',
  productionSourceMap: false,

  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    disableHostCheck: true,
  },
};

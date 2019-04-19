module.exports = {
  baseUrl: "./",
  // For issues with ESLint whining about not being able to find ESLint conf file inside the dist folder.
  // THe issue is caused by ESLint resolver in combination with sym linked directories.
  // This can be used a desperate solution. A simpler one can be found inside the .eslintignore file in this same directory.
  // https://github.com/vuejs/vue-cli/issues/2948
  // Other useful issues
  // https://github.com/webpack/webpack/issues/943
  // https://stackoverflow.com/questions/48410203/webpack-gives-eslint-errors-while-using-npm-link/48507721#48507721
  // chainWebpack: config => config.resolve.symlinks(false),
  devServer: {
    port: 4000
  }
};

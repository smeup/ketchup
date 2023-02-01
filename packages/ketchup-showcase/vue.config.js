module.exports = {
  // webpackBundleAnalyzer: used to analyze bundle sizes.
  // set openAnalyzer: true to launch the tool
  // https://www.npmjs.com/package/vue-cli-plugin-webpack-bundle-analyzer
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false,
    },
  },
  // If uncommented, this will disable all linting on all the showcase project. Use it carefully
  // lintOnSave: false,
  // To correctly use History mode with Vue router, this property must be set to '/'
  // in order to allow webpack to produce correct chunks address when generating the output for the application.
  // However we must check if by setting this prop to '/' il compatible with CI service.
  publicPath: './',
  // For issues with ESLint whining about not being able to find ESLint conf file inside the dist folder.
  // THe issue is caused by ESLint resolver in combination with sym linked directories.
  // This can be used a desperate solution. A simpler one can be found inside the .eslintignore file in this same directory.
  // https://github.com/vuejs/vue-cli/issues/2948
  // Other useful issues
  // https://github.com/webpack/webpack/issues/943
  // https://stackoverflow.com/questions/48410203/webpack-gives-eslint-errors-while-using-npm-link/48507721#48507721
  // chainWebpack: config => config.resolve.symlinks(false),
  devServer: {
    port: 4000,
  },
  // Used to configure Vue to enable transpiling node_modules
  // https://cli.vuejs.org/config/#transpiledependencies
  transpileDependencies: [],
};

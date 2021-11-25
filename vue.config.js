const appConfig = require('./app.config');
const fs = require('fs');
const path = require('path');
const flexibleScript = fs.readFileSync(path.resolve('src/lib/flexible.min.js'));

module.exports = {
  // 部署应用包时的基本 URL,用法和 webpack 本身的 output.publicPath 一致
  publicPath: process.env.BASE_URL,
  // lintOnSave: true,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      const appTel = args[0];
      appTel.templateParameters = {
        env: process.env,
        flexibleScript: appConfig.flexible ? flexibleScript : '',
        title: appConfig.title,
      };
      return [appTel];
    });
    config.resolve.alias // 添加别名
      .set('@', path.resolve(__dirname, './src'))
      .set('api', path.resolve(__dirname, './src/api'))
      .set('components', path.resolve(__dirname, './src/components'))
      .set('helper', path.resolve(__dirname, './src/helper'))
      .set('hooks', path.resolve(__dirname, './src/hooks'))
      .set('locale', path.resolve(__dirname, './src/locale'))
      .set('stylus', path.resolve(__dirname, './src/stylus'))
      .set('utils', path.resolve(__dirname, './src/utils'))
      .set('views', path.resolve(__dirname, './src/views'));
  },
  devServer: {
    host: 'b.zmlearn.com',
    https: {
      key: path.resolve(__dirname, './ssl/server.key'),
      cert: path.resolve(__dirname, './ssl/server.pem'),
    },
    open: true,
    port: appConfig.port || '',
  },
};

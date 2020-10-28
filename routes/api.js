/* eslint-disable global-require, func-names */

module.exports = function (app) {
  // home
  app.use('/api', require('../app/controllers/Api/home'));
};

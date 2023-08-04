const replace = require("gulp-replace");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const browsersync = require("browser-sync").create();
const newer = require("gulp-newer");
const ifPlugin = require("gulp-if");

const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin,
};

module.exports = { plugins };

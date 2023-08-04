const gulp = require('gulp');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();

const { path, plugins } = require('./gulp/config');

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

const { copy, reset, html, server, scss, js, images } = require('./gulp/tasks');

function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

const mainTasks = gulp.parallel(copy, html, scss, js, images);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

exports.dev = dev;
exports.build = build;
exports.default = dev;

// Далее добавьте код для сборки React
const reactPaths = {
  reactSrc: 'react-app/src/**/*.js',
  reactDist: 'dist/react',
};

function react() {
  return gulp.src(reactPaths.reactSrc)
    .pipe(babel())
    .pipe(gulp.dest(reactPaths.reactDist));
}

exports.react = react;

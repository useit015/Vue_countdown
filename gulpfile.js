const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile Sass and inject into browser
gulp.task('sass', function() {
  return gulp
    .src(['src/css/base.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css/'))
    .pipe(browserSync.stream());
});

// Move JS files to src/js
gulp.task('js', function() {
  return gulp
    .src(['node_modules/vue/dist/vue.min.js'])
    .pipe(gulp.dest('src/js/'))
    .pipe(browserSync.stream());
});

// Watch Files
gulp.task('default', ['sass', 'js'], function() {
  browserSync.init({
    server: '.'
  });
  gulp.watch(['src/css/base.scss'], ['sass']);
  gulp.watch('index.html').on('change', browserSync.reload);
});

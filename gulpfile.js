const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile Sass and inject into browser
gulp.task('sass', function() {
  return gulp
    .src(['src/base.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/'))
    .pipe(browserSync.stream());
});

// Watch Files
gulp.task('default', ['sass'], function() {
  browserSync.init({
    server: './src'
  });
  gulp.watch(['src/base.scss'], ['sass']);
  gulp.watch('src/index.html').on('change', browserSync.reload);
});

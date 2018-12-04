var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var pug = require('gulp-pug');

gulp.task('browser-sync', function() {
  browserSync.init({
    browser: 'FirefoxDeveloperEdition',
    server: {
      baseDir: './',
      index: 'index.html'
    }
  });
});

gulp.task('bs-reload', function() {
  browserSync.reload();
});

gulp.task('pug', () => {
  return gulp.src(['pug/*.pug'])
  .pipe(pug({pretty: true}))
  .pipe(gulp.dest('./'));
});

gulp.task('sass', function() {
  gulp.src('stylesheet/*.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(gulp.dest('./stylesheet'));
  // .pipe(browser.reload({stream: true}));

});

gulp.task('default', ['browser-sync'], function() {
  gulp.watch('script/*.js', ['bs-reload']);
  gulp.watch('stylesheet/*.scss', ['sass']);
  gulp.watch('stylesheet/*.css', ['bs-reload']);
  gulp.watch('pug/*.pug', ['pug']);
  gulp.watch('pug/includes/*.pug', ['pug']);
  gulp.watch('index.html', ['bs-reload']);
});

const gulp = require('gulp');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const stylus = require('gulp-stylus');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');

const plumberOpt = {
  errorHandler: function(err) {
    console.error(err.stack);
    this.emit('end');
  },
}

gulp.task('concat', () =>
  gulp.src(['src/**.md'])
    .pipe(plumber(plumberOpt))
    .pipe(concat('index.md'))
    .pipe(replace(/、 */g, "，"))
    .pipe(replace(/。 */g, "．"))
    .pipe(gulp.dest('.'))
);

gulp.task('stylus', () =>
  gulp.src(['stylus/main.styl'])
    .pipe(plumber(plumberOpt))
    .pipe(sourcemaps.init())
    .pipe(stylus({
      'include css': true,
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.'))
);

gulp.task('watch', () =>
  gulp.watch(['src/*.md', 'stylus/*.styl'], gulp.series(['concat', 'stylus']))
);

gulp.task('default', gulp.series(['watch']));

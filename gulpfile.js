'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var del = require('del');

gulp.task('javascript', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
      entries: './client/entry.js',
      debug: true
    });

    return b.bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
            // Add transformation tasks to the pipeline here.
            .pipe(uglify())
            .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('html', function() {
    return gulp.src('./client/**/*.html')
            .pipe(gulp.dest('./public/'));
});

gulp.task('watch', function() {
    gulp.watch('./client/**/*.js', ['javascript']);
    gulp.watch('./client/**/*.html', ['html']);
});

gulp.task('clean', function(cb) {
    del([
        'public/**/*',
    ], cb);
});

gulp.task('default', ['clean', 'javascript', 'html', 'watch']);

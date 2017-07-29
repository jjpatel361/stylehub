'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');

// SCSS paths
var base_folder = './src/';
var scss_files = base_folder + '*.scss'
var build_folder = './build/'


gulp.task('build-scss', function () {
  return gulp.src(scss_files)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(build_folder));
});
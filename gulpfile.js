/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass');
var del = require('del');
var autoprefixer = require('gulp-autoprefixer');
var debug = require('gulp-debug');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var cssmin = require('gulp-minify-css');
var config = {
  sassOptions: {
    outputStyle: 'expanded' /* nested | expanded | compact | compressed */
  },
  src: './src',
  dist: './dist/css'
};

var scripts = [
  './src/angular/main.js',
  './src/angular/directive/ionic-slide-top-nav.js'
];


gulp.task('clean', function () {
  return del('dist');
});

gulp.task('sass', function () {
  return gulp.src(config.src + '/sass/ionic-slide-top-nav.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(config.sassOptions).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest(config.dist))
    .pipe(cssmin())
    .pipe(rename({
      suffix: ".min",
      extname: ".css"
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dist));
});


gulp.task('scripts', function () {
  return gulp.src(scripts)
    .pipe(concat('ionic-slide-top-nav.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify())
    .pipe(rename({
      suffix: ".min",
      extname: ".js"
    }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['clean'], function () {
  gulp.start(['sass', 'scripts']);
});

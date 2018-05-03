'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var ar = require('./locales/ar');
var fr = require('./locales/fr');

gulp.task('sass', function () {
  return gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./pages/assets/css'));
});

gulp.task('pug', function buildHTML() {
  return gulp.src('pug/pages/*.pug')
    .pipe(pug({ data: ar }))
    .pipe(gulp.dest('./pages/ar'));
});

gulp.task('pug-fr', function buildHTML() {
  return gulp.src('pug/pages/*.pug')
    .pipe(pug({ data: fr }))
    .pipe(gulp.dest('./pages/fr'));
});

gulp.task('watch', function () {
  gulp.watch('./scss/*.scss', ['sass']);
  gulp.watch('./pug/**/*.*', ['pug']);
  gulp.watch('./pug/**/*.*', ['pug-fr']);
});
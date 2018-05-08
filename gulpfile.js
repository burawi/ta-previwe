'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var ar = require('./locales/ar');
var fr = require('./locales/fr');
var en = require('./locales/en');

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

gulp.task('pug-en', function buildHTML() {
  return gulp.src('pug/pages/*.pug')
    .pipe(pug({ data: en }))
    .pipe(gulp.dest('./pages/en'));
});

gulp.task('watch', function () {
  gulp.watch('./scss/*.scss', ['sass']);
  gulp.watch('./pug/**/*.*', ['pug']);
  gulp.watch('./pug/**/*.*', ['pug-fr']);
  gulp.watch('./pug/**/*.*', ['pug-en']);
});
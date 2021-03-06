﻿/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/


/// <binding AfterBuild='default' />
var gulp = require('gulp');

gulp.task('default', function (done) {
    gulp.src([
      'node_modules/angular2/bundles/js',
      'node_modules/angular2/bundles/angular2.*.js*',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/angular2/bundles/http.*.js*',
      'node_modules/angular2/bundles/router.*.js*',
      'node_modules/es6-shim/es6-shim.min.js*',
      'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
      'node_modules/systemjs/dist/*.*',
      'node_modules/jquery/dist/jquery.*js',
      'node_modules/bootstrap/dist/js/bootstrap*.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/jquery-ui/jquery-ui.js',
      'node_modules/primeui/primeui.js'

    ]).pipe(gulp.dest('./wwwroot/libs/'));

    gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.css',
      'node_modules/primeui/primeui.css'     
    ]).pipe(gulp.dest('./wwwroot/libs/css'));
});
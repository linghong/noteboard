//require files
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat'),
	browserify = require('gulp-browserify')
	react = require('gulp-react');

//variables
var htmlSources = ['builds/development/*.html'];
var jsSources = ['components/scripts/*.js'];
var jsxSources = ['components/jsx/*.jsx'];

//reload file
gulp.task('connect', function(){
	connect.server({
		root: 'builds/development',
		livereload: true
	});
}); 

//convert jsx files to js files
gulp.task('jsx', function(){
	gulp.src(jsxSources)
        .pipe(react())
        .pipe(gulp.dest('components/scripts'));
});
 
 //combine js files to one js file       
gulp.task('js', function(){
	gulp.src(jsSources)
	.pipe(concat('script.js'))
	.pipe(browserify())
	.pipe(gulp.dest('builds/development/js'))
	.pipe(connect.reload());
});

//reload html files when any html files has any changes
gulp.task('html', function(){
	gulp.src(htmlSources)
	.pipe(connect.reload());
});

//watch files
gulp.task('watch', function(){
	gulp.watch(jsxSources, ['jsx']);
	gulp.watch(htmlSources, ['html']);
	gulp.watch(jsSources, ['js']);
});

//gulp default task
gulp.task('default', ['html','js', 'jsx', 'connect','watch']);
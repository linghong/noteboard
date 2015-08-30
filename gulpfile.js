var gulp = require('gulp'),
	gutil = require('gulp-util'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat');

var htmlSources = ['builds/development/*.html'];
var jsSources = ['components/scripts/*.js'];

gulp.task('connect', function(){
	connect.server({
		root: 'builds/development',
		livereload: true
	});
}); 

gulp.task('js', function(){
	gulp.src(jsSources)
	.pipe(concat('script.js')
		.on('error', gutil.log))
	.pipe(gulp.dest('builds/development/js'))
	.pipe(connect.reload());
});

gulp.task('html', function(){
	gulp.src(htmlSources)
	.pipe(connect.reload());
});

gulp.task('watch', function(){
	gulp.watch(htmlSources, ['html']);
	gulp.watch(jsSources, ['js']);
});

gulp.task('default', ['html','js', 'connect','watch']);
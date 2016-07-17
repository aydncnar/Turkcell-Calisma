var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat');
	minifyCSS=require('gulp-minify-css');
	autoprefixer = require('gulp-autoprefixer');
 
 
gulp.task('scripts',function(){
	gulp.src('app/js/*.js')
		.pipe(uglify({mangle: false}))
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('dist/js'))
});


gulp.task('styles',function(){

	gulp.src('app/css/*.css')
		.pipe(autoprefixer({
			browsers: ['last 4 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('app/css/'));

	gulp.src('app/css/*.css')
		.pipe(minifyCSS({keepBreaks : true}))
		.pipe(gulp.dest('dist/css'))
});



gulp.task('watch',function(){
	gulp.watch('app/js/*.js',['scripts']);
	gulp.watch('app/css/*.css',['styles']);

});



gulp.task('default', ['scripts','styles','watch']);




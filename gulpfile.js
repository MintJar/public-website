const gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	cleanCss = require('gulp-clean-css'),
	notify = require('gulp-notify'),
	w3cjs = require('gulp-w3cjs'),
	htmlmin = require('gulp-htmlmin'),
	webp = require('gulp-webp');

gulp.task('css', function() {
	gulp.src('./src/style/screen.scss')
		.pipe(sass())
		.on('error', onError)
		.pipe(cleanCss())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./dist/style/'));
	livereload.reload();
});

gulp.task('script', function() {
	gulp.src('./src/script/**/*.js')
	  .pipe(concat('app.js'))
	  .pipe(rename({suffix: '.min'}))
	  .pipe(uglify())
	  .on('error', onError)
	  .pipe(gulp.dest('./dist/script'));
	livereload.reload();
});
	
gulp.task('html', function() {
	gulp.src('./src/*.html')
        .pipe(w3cjs())
        .pipe(w3cjs.reporter())
        .pipe(htmlmin({
        	collapseWhitespace: true
        }))
    	.pipe(gulp.dest('./dist'));;
	livereload.reload();
});

gulp.task('webp', function() {
	return gulp.src('src/media/*')
        .pipe(webp())
        .pipe(gulp.dest('dist/media'));
});

function onError(err) {
	console.log(err);
	this.emit('end');
}


gulp.task( 'default', function() {
	gulp.watch( './src/**/*.scss', ['css']);
	gulp.watch( './src/script/*.js', ['script']);
	gulp.watch( './src/*.html', ['html']);
	livereload.listen();
});
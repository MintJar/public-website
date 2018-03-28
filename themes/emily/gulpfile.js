let gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	cleanCss = require('gulp-clean-css'),
	notify = require('gulp-notify');

gulp.task('css', function() {
	gulp.src('./dev/style/screen.scss')
		.pipe(sass())
		.on('error', onError)
		.pipe(cleanCss())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('../../static/style/'));
});

gulp.task('script', function() {
	gulp.src('./src/script/**/*.js')
	  .pipe(concat('app.js'))
	  .pipe(rename({suffix: '.min'}))
	  .pipe(uglify())
	  .on('error', onError)
	  .pipe(gulp.dest('./dist/script'));
});
	
gulp.task('html', function() {
	gulp.src('./src/*.html')
        .pipe(w3cjs())
        .pipe(w3cjs.reporter())
        .pipe(htmlmin({
        	collapseWhitespace: true
        }))
    	.pipe(gulp.dest('./dist'));;
});

function onError(err) {
	console.log(err);
	this.emit('end');
}


gulp.task( 'default', function() {
	gulp.watch( './dev/style/**/*.scss', ['css']);
	// gulp.watch( './src/script/*.js', ['script']);
});
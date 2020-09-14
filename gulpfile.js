var gulp     = require('gulp');
var plumber  = require('gulp-plumber');
var uglify   = require('gulp-uglify');
var concat   = require('gulp-concat');
var rename   = require('gulp-rename');
var terser = require('gulp-terser')
 
// Source Path
var js_src   = "./src/js/*.js";
 
// Dist Path
var js_dist  = "./js/";
var js_dist_name = "scripts.js";
 
// Minify e Concat Scripts
gulp.task('scripts', function() {
	return gulp.src(js_src)
        .pipe(plumber())
	    .pipe(terser())
		.pipe(concat(js_dist_name))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(js_dist));
});

gulp.task('watch', function() {
	gulp.watch('src/js/*.js', gulp.series('scripts'));
});
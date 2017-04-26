var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var sassPaths = [
	'bower_components/normalize.scss/sass',
	'bower_components/foundation-sites/scss',
	'bower_components/motion-ui/src',
	'bower_components/font-awesome/scss',
];

var fontAwesome = [
	'bower_components/font-awesome/fonts'
]

gulp.task('sass', function () {
	return gulp.src('scss/app.scss')
		.pipe($.sass({
				includePaths: sassPaths,
				outputStyle: 'nested' // if css compressed **file size**
			})
			.on('error', $.sass.logError))
		.pipe($.autoprefixer({
			browsers: ['last 2 versions', 'ie >= 9']
		}))
		.pipe(gulp.dest('css'));
});

gulp.task('default', ['sass'], function () {
	gulp.watch(['scss/**/*.scss'], ['sass']);
});

// Font Awesome -- not needed
gulp.task('fonts', function () {
	return gulp.src(['bower_components/font-awesome/fonts/fontawesome-webfont.*'])
		.pipe(gulp.dest('etc/fonts/font-awesome'));
});
gulp.task('fontStyle', function () {
	return gulp.src(['bower_components/font-awesome/scss/font-awesome.scss'])
		.pipe(gulp.dest('css'));
});

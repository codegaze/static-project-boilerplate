// Get all the required packages
const   gulp = require('gulp'),
        concat = require('gulp-concat'),
        uglify = require('gulp-uglify'),
        sass = require('gulp-sass'),
        rename = require('gulp-rename'),
        plumber = require('gulp-plumber'),
        gutil = require('gulp-util'),
        minifyCss = require('gulp-minify-css'),
        eslint = require('gulp-eslint');

// Set the path variables
const   base_path = './',
        src = base_path + 'src',
        dist = base_path + 'assets',
        paths = {  
            js: src + '/js/*.js',
            scss: [ src +'/sass/*.scss', src +'/sass/**/*.scss', src +'/sass/**/**/*.scss']
        };

// Combine & Compress JS into one script.js
gulp.task('combine-js', () => {  
  return gulp.src(paths.js)
    .pipe(concat('scripts.js'))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(uglify())
    .pipe(gulp.dest(dist + '/js'));
});

// Compile sass to css
gulp.task('compile-sass', () => {  
  return gulp.src(paths.scss)
    .pipe(plumber((error) => {
        gutil.log(gutil.colors.red(error.message));
        gulp.task('compile-sass').emit('end');
    }))
    .pipe(sass())
    .pipe(rename({dirname: dist + '/css'}))
    .pipe(minifyCss())
    .pipe(gulp.dest('./'));
});

// Watch files
gulp.task('watch', () => {  
  gulp.watch(paths.js, ['combine-js']);
  gulp.watch(paths.scss, ['compile-sass']);
});

// Start Everything with the default task
gulp.task('default', [ 'combine-js', 'compile-sass', 'watch' ]);
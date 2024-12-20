// "devDependencies": {
//     "@babel/core": "^7.23.7",
//     "@babel/preset-env": "^7.23.7",
//     "gulp": "^4.0.2",
//     "gulp-autoprefixer": "^8.0.0",
//     "gulp-babel": "^8.0.0",
//     "gulp-clean-css": "^4.3.0",
//     "gulp-concat-util": "^0.5.5",
//     "gulp-minify": "^3.1.0",
//     "gulp-rename": "^2.0.0",
//     "gulp-sass": "^5.1.0",
//     "gulp-sourcemaps": "^3.0.0",
//     "sass": "^1.69.7"
//   }

// *************√
// => BABEL FOR JS
// *************
const gulp = require('gulp')
const babel = require('gulp-babel')
const minify = require('gulp-minify')

gulp.task('babel', () => {
  return gulp
    .src(['./dev/js/main.js'])
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(minify())
    .pipe(gulp.dest('./dist/js'))
})

// *************
// => SASS FOR SCSS
// *************
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', () => {
  return gulp
    .src([`./dev/scss/style.scss`])
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest('./dist'))
})

// Then execute task with bracket '()' instead of '[]'
gulp.task('watch', function () {
  gulp.watch([`./dev/scss/style.scss`], gulp.parallel('sass'))

  gulp.watch(['./dev/js/*.js'], gulp.parallel('babel'))
})

//** for package.json */
// "devDependencies": {
//     "@babel/core": "^7.23.7",
//     "@babel/preset-env": "^7.23.7",
//     "gulp": "^4.0.2",
//     "gulp-autoprefixer": "^8.0.0",
//     "gulp-babel": "^8.0.0",
//     "gulp-clean-css": "^4.3.0",
//     "gulp-concat-util": "^0.5.5",
//     "gulp-minify": "^3.1.0",
//     "gulp-rename": "^2.0.0",
//     "gulp-sass": "^5.1.0",
//     "gulp-sourcemaps": "^3.0.0",
//     "sass": "^1.69.7"
//   }

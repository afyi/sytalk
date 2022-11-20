const gulp = require("gulp")
const uglify = require('gulp-uglify-es').default
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin') 

gulp.task('minifyCss', (done) => {
  gulp.src('src/css/*.css')
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(cssmin())
      .pipe(rename('sytalk.min.css'))
      .pipe(gulp.dest('dist/css'))
  done();
});

// 把JS文件全部打包到sytalk
gulp.task('minifyJs', (done) => {
  gulp.src(['src/plugins/*.js', 'src/main.js'])
    .pipe(concat('sytalk.js'))
    .pipe(uglify())
    .pipe(rename('sytalk.min.js'))
    .pipe(gulp.dest('dist/'))
  done();
});

// 把JS文件全部打包到sytalk
gulp.task('concatJs', (done) => {
  gulp.src(['src/plugins/*.js', 'src/main.js'])
    .pipe(concat('sytalk.js'))
    .pipe(gulp.dest('dist/'))
  done();
});

// 合并上述方法，监控并执行
gulp.task('default', gulp.series('minifyCss', 'concatJs', "minifyJs", (done) => {
  console.log("打完收工");
  done();
}));
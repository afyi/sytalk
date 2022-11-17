const gulp = require("gulp")
const uglify = require('gulp-uglify-es').default
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const concat = require('gulp-concat')
const base64 = require('gulp-base64') 

// 压缩CSS文件
gulp.task('minifyCss', (done) => {
  gulp.src('src/css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename('artitalk.min.css'))
    .pipe(base64())
    .pipe(gulp.dest('dist/css'));
    done();
});

// 压缩一下img文件
gulp.task('minifyImg', (done) => {
  gulp.src('src/images/*.{png,jpg,gif,ico,svg}')
    .pipe(imagemin({optimizationLevel: 5,  progressive: true, interlaced: true,  multipass: true}))
    .pipe(gulp.dest('dist/images/'));
  done();
});

// 把JS文件全部打包到sytalk
gulp.task('concatJs', (done) => {
  gulp.src(['src/plugins/*.js', 'src/main.js'])
    .pipe(concat('sytalk.js'))
    .pipe(gulp.dest('dist/js'))
  done();
});

// 压缩打包后的sytalk.js
gulp.task('minifyJs', (done) => {
  gulp.src('dist/js/sytalk.js')
    .pipe(uglify())
    .pipe(rename('sytalk.min.js'))
    .pipe(gulp.dest('dist/js'))
  done();
});

// 合并上述方法，监控并执行
gulp.task('default', gulp.series('minifyCss', 'concatJs', 'minifyJs', (done) => {
  console.log("打完收工");
  done();
}));
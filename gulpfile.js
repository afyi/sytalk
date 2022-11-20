const gulp = require("gulp")
const uglify = require('gulp-uglify-es').default
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const imagemin = require('gulp-imagemin')

gulp.task('minifyCss', () => {
  return gulp.src('src/css/*.css').pipe(cleanCSS({ compatibility: 'ie8' })).pipe(cssmin()).pipe(rename('sytalk.min.css')).pipe(gulp.dest('dist/css'))
});

// 把JS文件全部打包到sytalk
gulp.task('minifyJs', () => {
  return gulp.src(['src/plugins/*.js', 'src/main.js']).pipe(concat('sytalk.js')).pipe(uglify()).pipe(rename('sytalk.min.js')).pipe(gulp.dest('dist/'));
});

// 把JS文件全部打包到sytalk
gulp.task('concatJs', () => {
  return gulp.src(['src/plugins/*.js', 'src/main.js']).pipe(concat('sytalk.js')).pipe(gulp.dest('dist/'));
});

// 压图片并转移到指定目录
gulp.task('minifyImg', () => {
  return gulp.src('src/img/*.{png,jpg,gif,webp}').pipe(imagemin()).pipe(gulp.dest('dist/img'));
});

// 压表情并转移到指定目录
gulp.task('minifyEmoji', () => {
  return gulp.src('src/emoji/*.{png,jpg,gif,webp}').pipe(imagemin()).pipe(gulp.dest('dist/emoji'));
});

// SVG不压缩只转移
gulp.task('moveSvg', () => {
  return gulp.src('src/svg/*.*').pipe(gulp.dest('dist/svg'))
})



// 合并上述方法，监控并执行
gulp.task('default', gulp.series('minifyCss', 'concatJs', "minifyJs", "minifyImg", "minifyEmoji", "moveSvg", (done) => {
  console.log("打完收工");
  done();
}));
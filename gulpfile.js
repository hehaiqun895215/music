const gulp =require('gulp'); //引入gulp模块
const html = require('gulp-minify-html'); //引入html压缩模块。
const css = require('gulp-minify-css'); //引入css压缩模块。
const sass = require('gulp-sass'); //引入sass编译模块
const uglifyjs = require('gulp-uglify'); //引入js压缩模块
const watch = require('gulp-watch'); //引入监听模块
const babel = require('gulp-babel'); //es6转es5主要模块
const bablecore = require('babel-core'); //es6转es5主要模块
const es2015 = require('babel-preset-es2015'); //es6转es5主要模块
const imagemin = require('gulp-imagemin'); //引入图片压缩模块
const sourcemaps = require('gulp-sourcemaps'); //引入生成.map文件模块
const plugins = require('gulp-load-plugins')(); //生成.map文件





//1.压缩html文件
gulp.task('uglifyhtml', function () {
    return gulp.src('src/html/*.html')
        .pipe(html()) //引入压缩模块
        .pipe(gulp.dest('dist/html/'));
});
// //2.压缩css。
gulp.task('uglifycss', function () {
    return gulp.src('src/sass/css/*.css')
        .pipe(css()) //应用html包
        .pipe(gulp.dest('dist/css/'));
});
//3.利用sass，生成压缩css。
gulp.task('compilesass', function () {
    return gulp.src('src/sass/style/*.scss')
        .pipe(plugins.sourcemaps.init()) // 初始化 gulp-sourcemaps 插件  生成.map文件初始化  
        .pipe(plugins.sass({ // 调用 sass 插件，编译 sass 文件
            outputStyle: 'compressed' //压缩一行
        }))
        .pipe(plugins.sourcemaps.write('.')) // 生成 sourcemap 生成.map文件 
        .pipe(gulp.dest('dist/style/'));
});
//4.压缩js
gulp.task('uglifyjs', function () {
    return gulp.src('src/script/*.js')
        .pipe(babel({ //es6转es5
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});
// 5.png图片的压缩
// 图片压缩的插件：gulp-imagemin
gulp.task('runimg', function () {
    return gulp.src('src/imges/*.{png,gif,jpg,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imges/'));
});

6.//最终监听
//每一个任务先跑一次，再进行监听
gulp.task('default',function(){
    //文件路径
    watch(['src/*.html','src/sass/*.scss','src/script/*.js','src/imges/*.{png,jpg,gif,ico}'],gulp.parallel('uglifyhtml','compilesass','uglifyjs','runimg'));//任务名
});


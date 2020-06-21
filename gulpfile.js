let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify-es').default,
    cssmin = require('gulp-cssmin'),
    del = require('del');

gulp.task('clean', async () => {
    del.sync('dist')
});

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions']
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('style', function(){
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/animate.css/animate.css',
        'node_modules/sweetalert2/dist/sweetalert2.css'
    ])
    .pipe(concat('libs.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('app/css'))
});

gulp.task('script', function(){
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/typed.js/lib/typed.js',
        'node_modules/jquery-parallax.js/parallax.js',
        'node_modules/wow.js/dist/wow.js',
        'node_modules/sweetalert2/dist/sweetalert2.all.js',
        'node_modules/jquery.maskedinput/src/jquery.maskedinput.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
});

gulp.task('html', function(){
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function(){
    return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('main-min', function(){
    return gulp.src('app/js/main.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/js'))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('export', async () => {
    gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist'))

    gulp.src('app/css/**/*.css')
    .pipe(gulp.dest('dist/css'))

    gulp.src(['app/js/**/*.js', '!app/js/**/main.js'])
    .pipe(gulp.dest('dist/js'))

    gulp.src('app/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'))

    gulp.src('app/images/**/*.*')
    .pipe(gulp.dest('dist/images'))

    gulp.src('app/**/*.php')
    .pipe(gulp.dest('dist'))
}) 

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'))
    gulp.watch('app/*.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('js'))
    gulp.watch('app/js/main.js', gulp.parallel('main-min'))
});

gulp.task('build', gulp.series('clean', 'export'));

gulp.task('default', gulp.parallel('style', 'script', 'sass', 'watch', 'browser-sync', 'main-min'));
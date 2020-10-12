var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require ('gulp-uglifyjs'),
    cssnano = require ('gulp-cssnano'),
    rename = require ('gulp-rename'),
    del = require ('del'),
    imagemin = require ('gulp-imagemin'),
    pngquant = require ('imagemin-pngquant'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    spritesmith = require('gulp.spritesmith'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob');




gulp.task('browser-sync',  (done) => {
    browserSync ({
        server: {
            baseDir: 'app'
        },
        notify: false
    });

    done()
});

gulp.task('clear', ()  => {
     return cache.clearAll();
});


gulp.task('clean', () => {
     return del('dist')
});

gulp.task('sprite',  () => {
    var spriteData = gulp.src('app/img/sprite/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css'
        }));
    return spriteData.pipe(gulp.dest('app/img/sprite'));
});

gulp.task('img', () => {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});

// стискання JS файлів

gulp.task('scripts', () => {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
        'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});



gulp.task('sass', () => {
    return gulp.src('app/sass/**.+(scss|sass|less)')
        .pipe(sass())
        .pipe(sassGlob())
        .pipe(autoprefixer(['last 15 versions'], {cascade: true }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

// мініфікація css файлів
// gulp.task('css-libs', gulp.series('sass', ()  => {
//     return gulp.src('app/css/app.css')
//         .pipe(cssnano())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest('app/css'));
// }));



gulp.task('watch', gulp.parallel('browser-sync', 'sass', 'sprite', (done)  => {
    gulp.watch('app/sass/*.+(sass|scss|less)', gulp.series('sass'));
    gulp.watch('app/sass/**/*.+(sass|scss|less)', gulp.series('sass'));
    gulp.watch('app/*.html').on('change', () => {
        browserSync.reload();
    });
    gulp.watch('app/js/*.js').on('change', () => {
        browserSync.reload();
    });

    done();

}));

gulp.task('build', gulp.parallel('clean', 'img', 'sass', (done) => {
    var buildCss = gulp.src(['app/css/*.css', 'app/css/*.min.css'])
    .pipe(gulp.dest('dist/css'));
    var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
    var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'));
    var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));

    done()
}));


gulp.task('default', gulp.series('watch'));

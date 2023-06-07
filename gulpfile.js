import gulp         from 'gulp';
import browserSync  from 'browser-sync';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
const sass = gulpSass(dartSass);
import autoprefixer  from 'gulp-autoprefixer';
import imageminSvgo from 'imagemin-svgo';
import imagemin, { mozjpeg, optipng } from 'gulp-imagemin';

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "src"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('imagemin', function() {
    return gulp.src('src/images/**/*.{jpg,png,svg,gif,ico,webp,JPG,PNG,SVG,GIF,ICO,WEBP}')
        .pipe(imagemin([
            imageminSvgo({ plugins: [{ name: "removeViewBox", active: false }] }),
            mozjpeg({quality: 75, progressive: true}),
            optipng({optimizationLevel: 5})
        ],
        {verbose: true}))
        .pipe(gulp.dest('src/images'))
})

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
})

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));
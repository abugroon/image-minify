const gulp = require('gulp');

const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');

 function images() {
    return  gulp.src('src/images/*')
        .pipe(imagemin([
            imageminPngquant({
                speed: 1,
                quality: [0.2, 0.5] //lossy settings
            }),
        ],{
            verbose:true
        }))
         .pipe(gulp.dest('dist/images'))
 }

 gulp.task('default',images)

 // gulp.task('default',gulp.series('images'))


// exports.default = defaultTask
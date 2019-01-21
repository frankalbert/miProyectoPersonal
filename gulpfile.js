const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');
    //concat = require('gulp-concat'),
    //uglify = require('gulp-uglify');

    const rutaCss = './src/sass/*.scss',
        rutaJs = './src/js/*.js';

gulp.task('compilarSass', function() {
    return gulp.src(rutaCss)
        .pipe(sass({
            outputStyle: 'expanded',
            sourceComments: true
        }))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./src/estilos'));
   
});
/*
gulp.task('js', function() {
    return gulp.src(rutaJs)    
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./src/min-js'))
});
*/

//gulp.series('compilarSass', 'js', function(completado) {

gulp.task('default', gulp.series('compilarSass', function(completado) {
    gulp.watch(rutaCss, gulp.series('compilarSass'));
    //gulp.watch(rutaJs, gulp.series('js'));
    completado();
}));
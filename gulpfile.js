var gulp = require('gulp'),
    print = require('gulp-print')
    babel = require('gulp-babel')
    webserver = require('gulp-webserver');

gulp.task('puny-human', function() {
    console.log('Puny humaaaan');
});

gulp.task('js', function() {
    return gulp.src('app/**/*.js')
        .pipe(print())
        .pipe(babel({
        presets: ['es2015'],
        plugins: ['transform-es2015-modules-systemjs'] 
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('libs', function(){
    return gulp.src([
        'node_modules/systemjs/dist/system.js',
        'node_modules/babel-polyfill/dist/polyfill.js'])
        .pipe(print())
        .pipe(gulp.dest('build/libs'));
});

gulp.task('build', ['js', 'libs'], function(){
    return gulp.src(['app/**/*.html', 'app/**/*.css'])
            .pipe(print())
            .pipe(gulp.dest('build'));
});

gulp.task('serve', ['build'], function() {
    gulp.src('build')
        .pipe(webserver({open: true}));
});


gulp.task('watch', function(){
    gulp.watch('app/**/*.*', ['build']);
});

gulp.task('default', ['build']);

var gulp = require('gulp'),
    print = require('gulp-print');


gulp.task('puny-human', function(){
    console.log('Puny humaaaan');
});

gulp.task('build', function(){
    return gulp.src('app/**/*.*')
            .pipe(print())
            .pipe(gulp.dest('build'));
});

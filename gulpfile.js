var gulp = require('gulp');


gulp.task('puny-human', function(){
    console.log('Puny humaaaan');
});

gulp.task('build', function(){
    return gulp.src('app/js/**/*.js')
            .pipe(gulp.dest('build'));
});

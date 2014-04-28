
var gulp = require('gulp'),
        less = require('gulp-less'),
        path = require('path'),
        watch = require('gulp-watch');

gulp.task('less', function() {
    gulp.src('./source/less/sanny.less')
            .pipe(less({
                paths: [path.join(__dirname, 'less', 'includes')]
            }))
            .pipe(gulp.dest('./assets/css'));
});




gulp.task('watch', function() {
    
    gulp.run('less');

    gulp.src('source/less/**/*.less')
            .pipe(watch(function(files) {
                gulp.run('less');
            }));
});


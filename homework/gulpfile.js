const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('default', () => {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true,
        }));
});

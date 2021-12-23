const gulp = require('gulp')
const server = require('gulp-webserver')
const { parallel, series } = require('gulp')

function startServer () {
    return gulp.src('./')
        .pipe(server({
            port: 8080,
            livereload: true,
            open: true
        }))
}

gulp.task('startServer', startServer)

module.exports.default = series(
    startServer
)
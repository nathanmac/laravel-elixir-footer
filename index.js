var elixir = require('laravel-elixir');
var gulp = require('gulp');
var footer = require('gulp-footer');
var notify = require('gulp-notify');
var _ = require('underscore');

/*
 |----------------------------------------------------------------
 | Footer/Banner
 |----------------------------------------------------------------
 |
 | Add a footer message/banner to css/js files, in your public
 | directory.
 |
 */

elixir.extend('footer', function(banner, data) {

    var config = this;

    var files = [
        config.jsOutput + "/*.js",
        config.cssOutput + "/*.css"
    ];

    gulp.task('footer', function() {
        return gulp.src(files, {base: './'})
            .pipe(footer(banner, data))
            .pipe(gulp.dest('./'))
            .pipe(notify({
                title: 'File Footers Added!',
                message: 'All resource files have been footed with footer messages/banner.',
                icon: __dirname + '/../laravel-elixir/icons/pass.png'
            }));
    });

    return this.queueTask('footer');

});
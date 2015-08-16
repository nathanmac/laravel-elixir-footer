var gulp   = require('gulp');
var footer = require('gulp-footer');
var elixir = require('laravel-elixir');
var config = elixir.config;

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

    new elixir.Task('footer', function () {

        var files = [
            config.get('public.js.outputFolder') + "/*.js",
            config.get('public.css.outputFolder') + "/*.css"
        ];

        return gulp.src(files, {base: './'})
            .pipe(footer(banner, data))
            .pipe(gulp.dest('./'))
            .pipe(new elixir.Notification('Footer Banner Added!'));
    });

});

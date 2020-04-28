var gulp = require('gulp');
var connect = require('gulp-connect');


gulp.task('default', ['build','connect','watch'] );

//creat local server 
gulp.task('connect',function()
{
    connect.server ({
        root : 'build', // main file 
        livereload : true, // that mean re-load the page we give ut ture so it can  re-load
        port :8080, 
    })
});



//this function watch any changes in these files , if something happend it automatic do the build function 
gulp.task('watch',function()
{
    return gulp.watch('sources/**/*',['build']);
});

//copy  from sources file to build file juts html files
gulp.task('html',function()
{
    return gulp.src('sources/*.html')
    .pipe(gulp.dest('build')).pipe(connect.reload());
});

//copy  from sources file to build file juts css files
gulp.task('css',function()
{
    return gulp.src('sources/css/*.css')
    .pipe(gulp.dest('build/css')).pipe(connect.reload());
});


//copy  from sources file to build file juts js files
gulp.task('js',function()
{
    return gulp.src('sources/js/*.js')
    .pipe(gulp.dest('build/js')).pipe(connect.reload());
});


gulp.task('fonts',function()
{
    return gulp.src('sources/fonts/*')
    .pipe(gulp.dest('build/fonts')).pipe(connect.reload());
});

gulp.task('images',function()
{
    return gulp.src('sources/images/*')
    .pipe(gulp.dest('build/images')).pipe(connect.reload());
});
//function that make all above in one click 
gulp.task( 'build', ['html','css','js','fonts','images'] );


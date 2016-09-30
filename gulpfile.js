var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-ruby-sass'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    DEST = 'build/',
    war = require('gulp-war'),
    zip = require('gulp-zip'),
    exports = require('exports-loader');

var productionJSPath = path.resolve('./production/assets/js');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var fs = require('fs');
var package = JSON.parse(fs.readFileSync('package.json'));



gulp.task('scripts', function () {
    return gulp.src([
            'src/js/helpers/*.js',
            'src/js/*.js',
        ])
        .pipe(concat('custom.js'))
        .pipe(gulp.dest(DEST + '/js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest(DEST + '/js'))
        .pipe(browserSync.stream());
});

// TODO: Maybe we can simplify how sass compile the minify and unminify version

var compileSASS = function (filename, options) {

    return sass('src/scss/*.scss', options)
        .pipe(autoprefixer('last 2 versions', '> 5%'))
        .pipe(concat(filename))
        .pipe(gulp.dest(DEST + '/css'))
        .pipe(browserSync.stream());
};

gulp.task('sass', function () {
    return compileSASS('custom.css', {});
});


gulp.task('sass-minify', function () {
    return compileSASS('custom.min.css', {
        style: 'compressed'
    });

});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
        startPath: './production/demo/index.html'
    });
});


gulp.task('watch', function () {
    // Watch .html files
    gulp.watch('production/demo/*.html', browserSync.reload);
    // Watch .js files
    //gulp.watch('src/js/*.js', ['scripts']);
    // Watch .scss files
    gulp.watch('src/scss/*.scss', ['sass', 'sass-minify']);
});


// Default Task
gulp.task('default', ['browser-sync', 'watch']);

var webpackStream = require('webpack-stream');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var webpack = require("webpack");
var named = require('vinyl-named');

var plugins = [];


// plugins.push(new BowerWebpackPlugin({
//     modulesDirectories: ["vendors"],
//     manifestFiles: "bower.json",
//     excludes: [/.*\.less/]
// }));

plugins.push(new webpack.ProvidePlugin({
    'window.jQuery': 'jquery',
    'window.$': 'jquery',
    jQuery: 'jquery',
    $: 'jquery',
}));


var getStyleConfig = function () {
    plugins = [];
    return {
        devtool: 'eval',
        module: {
            loaders: [{
                test: /\.png$/,
                loader: 'url-loader?limit=100000'
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css?minimize!sass")
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css?minimize!sass")
            }, {
                test: /\.(jpg|woff|svg|ttf|eot)([\?]?.*)$/,
                loader: "file-loader?name=img/[name].[ext]"
            }]
        },
        plugins: plugins
    };
};
//bulid css 

gulp.task('build-style', function () {
    var config = getStyleConfig();
    config.plugins.push(new ExtractTextPlugin("style.css"));
    return gulp.src('src/config/style.js')
        .pipe(named())
        .pipe(webpackStream(config))
        .pipe(gulp.dest('production/assets/css/'));
});
gulp.task('watch-css', function () {
    // Watch .html files
    // Watch .scss files
    gulp.watch('src/scss/**.scss', ['build-custom-style']);
});
//end css build
var jsDist = 'production/assets/js/';
gulp.task('build-vendors', function () {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        exclude: /css|png|jpg|gif｜\.min\.js$/,
        minimize: true
    }));
    plugins.push(new webpack.optimize.DedupePlugin());
    return gulp.src('src/config/vendors.js')
        .pipe(named())
        .pipe(webpackStream({
            devtool: 'eval',
            output: {
                path: path.join(__dirname, "production/assets/js"),
                filename: "app.js",
                chunkFilename: "assets/js/[id].chunk.js"
            },
            module: {
                loaders: [

                ]
            },
            plugins: plugins
        }))
        .pipe(gulp.dest(jsDist));
});

gulp.task('build-app', function () {

    plugins.push(new webpack.optimize.DedupePlugin());
    return gulp.src('src/config/app.js')
        // .pipe(named())
        .pipe(webpackStream({
            cache: true,
            devtool: 'eval',
            output: {
                libraryTarget: 'umd',
                umdNamedDefine: true,
                publicPath: "assets/js/",
                filename: "app.js",
                chunkFilename: "chunk.[id].js",
                library: 'pokemon',
            },
            resolve: {
                modulesDirectories: ['vendors'],
                alias: {
                    jquery: 'jquery/dist/jquery.min',
                    bootstrap: 'bootstrap/dist/js/bootstrap.min',
                    'bootstrap-progressbar': 'bootstrap-progressbar/bootstrap-progressbar',
                    angular: 'angular/angular',
                    'angular-route': 'angular-route/angular-route.min',
                    moment: 'moment/moment',
                    echarts: 'echarts/dist/echarts.min',
                    PNotify: 'pnotify/dist/pnotify',
                    "datatables.net": 'datatables.net-bs/js/dataTables.bootstrap',
                    daterangepicker: "bootstrap-daterangepicker/daterangepicker",
                    nprogress: 'nprogress/nprogress',
                    'iCheck': 'iCheck/icheck.min',
                    skycons: 'skycons/skycons',
                    'jquery.blockUI': 'blockUI/jquery.blockUI',
                    select2: 'select2/dist/js/select2.full.min',
                    'jquery.tagsinput': 'jquery.tagsinput/src/jquery.tagsinput',
                    parsleyjs: 'parsleyjs/dist/parsley.min',
                    'ion.rangeSlider': 'ion.rangeSlider/js/ion.rangeSlider.min',
                    'jquery-slimscroll': 'jquery-slimscroll/jquery.slimscroll.min',
                    pnotify: 'pnotify/dist/pnotify',
                    sweetalert2: 'sweetalert2/dist/sweetalert2',
                    'bootstrap-switch': 'bootstrap-switch/dist/js/bootstrap-switch.min',
                    'mjolnic-bootstrap-colorpicker': 'mjolnic-bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min',
                    'jquery.inputmask': 'jquery.inputmask/dist/min/jquery.inputmask.bundle.min',
                    'jquery-knob': 'jquery-knob/dist/jquery.knob.min',
                    cropper: 'cropper/dist/cropper.min'
                },
                extensions: ['', '.js']
            },
            module: {
                loaders: [{
                    test: /[\/\\]angular\.js$/,
                    loader: "exports?window.angular"
                }, {
                    test: /pnotify.*\.js$/,
                    loader: "imports?define=>false,global=>window"
                }]

            },
            plugins: plugins
        })).pipe(gulp.dest(jsDist));

});
// war
gulp.task('build-war', function () {
    gulp.src(["./production/**"])
        .pipe(war({
            welcome: 'index.html',
            displayName: package.version, //form package.json.version
            version: package.version //form package.json.version
        }))
        .pipe(zip(package.name + '.war'))
        .pipe(gulp.dest("./dist"));
});

gulp.task('build-all', ['build-app', 'build-style']);
gulp.task('joe', function () {
    return gulp.src('src/config/joe.js')
        .pipe(named())
        .pipe(webpackStream({
            devtool: 'eval-source-map',
            module: {
                loaders: [

                    {
                        test: /\.css$/,
                        loader: "style!css"
                    }, {
                        test: /\.scss$/,
                        loaders: ["style", "css", "sass"]
                    }
                ]
            },
            plugins: plugins
        }))
        .pipe(gulp.dest(jsDist));

});
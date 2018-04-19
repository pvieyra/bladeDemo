let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
  'resources/assets/plantilla/css/hover.css',
  'resources/assets/plantilla/css/font-awesome.css',
  'resources/assets/plantilla/css/weather-icons.css',
  'resources/assets/plantilla/css/ionicons.css',
  'resources/assets/plantilla/css/toggles-full.css',
  'resources/assets/plantilla/css/morris.css',
  'resources/assets/plantilla/css/quirk.css'
],'public/css/plantilla.css')
.scripts([
  'resources/assets/plantilla/js/modernizr.js',
  'resources/assets/plantilla/js/jquery.js',
  'resources/assets/plantilla/js/jquery-ui.js',
  'resources/assets/plantilla/js/bootstrap.js',
  'resources/assets/plantilla/js/toggles.js',
  'resources/assets/plantilla/js/morris.js',
  'resources/assets/plantilla/js/raphael.js',
  'resources/assets/plantilla/js/jquery.flot.js',
  'resources/assets/plantilla/js/jquery.flot.resize.js',
  'resources/assets/plantilla/js/jquery.flot.spline.js',
  'resources/assets/plantilla/js/jquery.knob.js',
  'resources/assets/plantilla/js/quirk.js',
  'resources/assets/plantilla/js/dashboard.js'
],'public/js/plantilla.js')
.js('resources/assets/js/app.js', 'public/js/app.js');

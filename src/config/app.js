// var $ = require('../../vendors/jquery/dist/jquery.min.js');
define(['jquery', 'angular', 'PNotify'], function (jquery, angular, PNotify) {
	console.log(angular);

	var $ = jquery;
	global.jQuery = $;
	global.$ = $;
	require('../../production/js/datepicker/daterangepicker.js');
	moment = require('../../production/js/moment/moment.min.js');
	global.moment = moment;
	global.PNotify = PNotify;



	require('bootstrap')

	require('nprogress');

	require('bootstrap-progressbar');


	require('iCheck');
	require('skycons');
	// require('../../vendors/fastclick/lib/fastclick.js');
	// require('../../vendors/bootstrap-daterangepicker/daterangepicker.js');
	// require('bootstrap-daterangepicker');
	// require('../../vendors/Chart.js/dist/Chart.min.js');
	//require('../../vendors/gauge.js/dist/gauge.min.js');
	// require('../../vendors/Flot/jquery.flot.js');
	// require('../../vendors/Flot/jquery.flot.pie.js');
	// require('../../vendors/Flot/jquery.flot.time.js');
	// require('../../vendors/Flot/jquery.flot.stack.js');
	// require('../../vendors/Flot/jquery.flot.resize.js');

	// require('../../vendors/flot.orderbars/js/jquery.flot.orderBars.js');
	// require('../../vendors/flot-spline/js/jquery.flot.spline.min.js');
	// require('../../vendors/flot.curvedlines/curvedLines.js');

	// require('../../vendors/DateJS/build/date.js');

	// require('../../vendors/jqvmap/dist/jquery.vmap.js');
	// require('../../vendors/jqvmap/dist/maps/jquery.vmap.world.js');
	// require('../../vendors/jqvmap/examples/js/jquery.vmap.sampledata.js');

	// require('../../vendors/angular/angular.min.js');
	//require("expose?angular!../../vendors/angular/angular.min.js");
	// require('../js/custom.js');



	require('../js/helpers/smartresize.js');

	global.echarts = require('echarts');
	require('../../src/config/joe.js');


	require('angular-route');
	require('../../vendors/angular-datatables/dist/angular-datatables.js');
	require('../../vendors/angular-resource/angular-resource.min.js');

	angular.module('pokemon', ['ngRoute', 'datatables', 'ngResource']);

	return angular;
});


// require(['../../vendors/jquery/dist/jquery.min.js'], function(jquery) {
//    require('../../vendors/bootstrap/dist/js/bootstrap.min.js')
//         // require('../../vendors/fastclick/lib/fastclick.js');
//     require('../../vendors/nprogress/nprogress.js');
//     // require('../../vendors/bootstrap-daterangepicker/daterangepicker.js');
//     require('../../vendors/bootstrap-progressbar/bootstrap-progressbar.js');
//     // require('../../vendors/Chart.js/dist/Chart.min.js');
//     //require('../../vendors/gauge.js/dist/gauge.min.js');

//     require('../../vendors/iCheck/icheck.min.js');
//     require('../../vendors/skycons/skycons.js');

//     // require('../../vendors/Flot/jquery.flot.js');
//     // require('../../vendors/Flot/jquery.flot.pie.js');
//     // require('../../vendors/Flot/jquery.flot.time.js');
//     // require('../../vendors/Flot/jquery.flot.stack.js');
//     // require('../../vendors/Flot/jquery.flot.resize.js');

//     // require('../../vendors/flot.orderbars/js/jquery.flot.orderBars.js');
//     // require('../../vendors/flot-spline/js/jquery.flot.spline.min.js');
//     // require('../../vendors/flot.curvedlines/curvedLines.js');

//     // require('../../vendors/DateJS/build/date.js');

//     // require('../../vendors/jqvmap/dist/jquery.vmap.js');
//     // require('../../vendors/jqvmap/dist/maps/jquery.vmap.world.js');
//     // require('../../vendors/jqvmap/examples/js/jquery.vmap.sampledata.js');


//     require('../../vendors/bootstrap-daterangepicker/daterangepicker.js');

//     require('../js/helpers/smartresize.js');
//     require('../js/custom.js');
//         require('../../vendors/echarts/dist/echarts.min.js');
//             require('../../src/config/joe.js');
//             require('../../vendors/angular/angular.min.js');
//              require('../../vendors/angular-route/angular-route.min.js');

// });

// require(['../../vendors/angular/angular.min.js', '../../vendors/bootstrap/dist/js/bootstrap.min.js'], function(angular) {

// });

// require(['../../vendors/jquery/dist/jquery.min.js'], function(jquery) {

// });

// require(['../../vendors/jquery/dist/jquery.min.js'], function (jquery) {

// });


// require('../../vendors/blockUI/jquery.blockUI.js');
// require('../../vendors/echarts/dist/echarts.min.js');
//remove [name].js
// require('../../build/js/custom.min.js');

// require('angular-resource');


// require('../js/page/blockUI.js'); 
// require('../js/page/echarts.js');

// require(['../../vendors/jquery/dist/jquery.min.js'], function(jquery) {
//     require('../config/louis.js');
// });
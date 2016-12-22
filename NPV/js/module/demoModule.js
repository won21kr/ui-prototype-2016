define(['pokemon'], function (pokemon) {
	'use strict';
	var app = angular.module('btModule', ['pokemon']);
	// 導頁路徑
	app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('');
		$routeProvider
			.when('/', {
				templateUrl: "../NPV/views/demo_1.html"
			})
			.when('/try', {
				templateUrl: "../NPV/views/try.html"
			})
			.when('/roleSet:id', {
				templateUrl: "../NPV/views/roleSet.html"
			})
			.when('/useSet:id', {
				templateUrl: "../NPV/views/useSet.html"
			})
			.when('/ITParameterSet:id', {
				templateUrl: "../NPV/views/ITParameterSet.html"
			})

		.otherwise({
			redirectTo: '/'
		});
	}]);

	return app;
});
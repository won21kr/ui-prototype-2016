define(['pokemon'], function (pokemon) {
	'use strict';
	var app = angular.module('btModule', ['pokemon']);
	// 導頁路徑

	// hide Possibly unhandled rejection in Angular 1.6
	app.config(['$qProvider', function ($qProvider) {
		$qProvider.errorOnUnhandledRejections(false);
	}]);
	app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('');
		$routeProvider
			.when('/', {
				templateUrl: "../NPV/views/demo_1.html"
			})
			.when('/try', {
				templateUrl: "../NPV/views/try.html"
			})
			.when('/roleSet', {
				templateUrl: "../NPV/views/roleSet.html"
			})
			.when('/userSet', {
				templateUrl: "../NPV/views/userSet.html"
			})
			.when('/groupsSet', {
				templateUrl: "../NPV/views/groupsSet.html"
			})
			.when('/ITParameterSet', {
				templateUrl: "../NPV/views/ITParameterSet.html"
			})
			.when('/marginSet', {
				templateUrl: "../NPV/views/marginSet.html"
			})
			.when('/downtimeProbabilitySet', {
				templateUrl: "../NPV/views/downtimeProbabilitySet.html"
			})
			.when('/ARPBSet', {
				templateUrl: "../NPV/views/ARPBSet.html"
			})
			.when('/renewalDate', {
				templateUrl: "../NPV/views/renewalDate.html"
			})
			.when('/changeLimit', {
				templateUrl: "../NPV/views/changeLimit.html"
			})
			.when('/salesSet', {
				templateUrl: "../NPV/views/salesSet.html"
			})
			.when('/systemSet', {
				templateUrl: "../NPV/views/systemSet.html"
			})
			.when('/classificationSet', {
				templateUrl: "../NPV/views/classificationSet.html"
			})
			.when('/activityClassification', {
				templateUrl: "../NPV/views/activityClassification.html"
			})
			.when('/activityType', {
				templateUrl: "../NPV/views/activityType.html"
			})
			.when('/functionPermissionsSet', {
				templateUrl: "../NPV/views/functionPermissionsSet.html"
			})
			.when('/activityGroup', {
				templateUrl: "../NPV/views/activityGroup.html"
			})
			.when('/numberType', {
				templateUrl: "../NPV/views/numberType.html"
			})
			.when('/promotingGenerationType', {
				templateUrl: "../NPV/views/promotingGenerationType.html"
			})
			.when('/classificationOfferSet', {
				templateUrl: "../NPV/views/classificationOfferSet.html"
			})
			.when('/agreementAdd', {
				templateUrl: "../NPV/views/agreementAdd.html"
			})
			.when('/suitableTarget', {
				templateUrl: "../NPV/views/suitableTarget.html"
			})

			.when('/giftActivityType', {
				templateUrl: "../NPV/views/giftActivityType.html"
			})
			.when('/offerMutexSet', {
				templateUrl: "../NPV/views/offerMutexSet.html"
			})
			.when('/discountConditions', {
				templateUrl: "../NPV/views/discountConditions.html"
			})
			.when('/giftActivityItem', {
				templateUrl: "../NPV/views/giftActivityItem.html"
			})
			.when('/activemenuService', {
				templateUrl: "../NPV/views/activemenuService.html"
			})
			.when('/tableQuery', {
				templateUrl: "../NPV/views/tableQuery.html"
			})
			.when('/importDevice', {
				templateUrl: "../NPV/views/importDevice.html"
			})
			.when('/exportTableXML', {
				templateUrl: "../NPV/views/exportTableXML.html"
			})
			.when('/aPasteBackup', {
				templateUrl: "../NPV/views/aPasteBackup.html"
			})
			.when('/excelGlutChange', {
				templateUrl: "../NPV/views/excelGlutChange.html"
			})
			.when('/conversionList', {
				templateUrl: "../NPV/views/conversionList.html"
			})
			.when('/multiEditService', {
				templateUrl: "../NPV/views/multiEditService.html"
			})
			.when('/alreadyDeal', {
				templateUrl: "../NPV/views/alreadyDeal.html"
			})
			.when('/npvStatusQuery', {
				templateUrl: "../NPV/views/npvStatusQuery.html"
			})
			.when('/confirmBill', {
				templateUrl: "../NPV/views/confirmBill.html"
			})
			.when('/rejectBill', {
				templateUrl: "../NPV/views/rejectBill.html"
			})
			.when('/activityClassSet', {
				templateUrl: "../NPV/views/activityClassSet.html"
			})
			.when('/newSet', {
				templateUrl: "../NPV/views/newSet.html"
			})
			.when('/pageGearingSet', {
				templateUrl: "../NPV/views/pageGearingSet.html"
			})
			.when('/prepaidSet', {
				templateUrl: "../NPV/views/prepaidSet.html"
			})
			.when('/specialSet', {
				templateUrl: "../NPV/views/specialSet.html"
			})
			.when('/waitTreatmentList', {
				templateUrl: "../NPV/views/waitTreatmentList.html"
			})
			.when('/forciblyCancellation', {
				templateUrl: "../NPV/views/forciblyCancellation.html"
			})
			.when('/enforceTurnSingle', {
				templateUrl: "../NPV/views/enforceTurnSingle.html"
			})
			.when('/bouncedRecord', {
				templateUrl: "../NPV/views/bouncedRecord.html"
			})
			.when('/LOASet', {
				templateUrl: "../NPV/views/LOASet.html"
			})
			.when('/draft', {
				templateUrl: "../NPV/views/draft.html"
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);

	return app;
});
(function () {
	'use strict';
	//setting baseUrl, flip path, urlArgs to requirejs
	require.config({
		baseUrl: '../NPV/',
		paths: {
			pokemon: 'assets/js/app',
			btModule: 'js/module/demoModule',
			btController: 'js/controller/demoBT',
			demoCtrl: 'js/controller/demo',
			footer: 'js/component/footer',
			header: 'js/component/header',
			shoppingCartEntity: 'js/entity/ShoppingCart',
			ITParameterSetCtrl: 'js/controller/ITParameterSet',
			roleSetCtrl: 'js/controller/roleSet',
			userSetCtrl: 'js/controller/userSet',
			groupsSetCtrl: 'js/controller/groupsSet',
			marginSetCtrl: 'js/controller/marginSet',
			downtimeProbabilitySetCtrl: 'js/controller/downtimeProbabilitySet',
			ARPBSetCtrl: 'js/controller/ARPBSet',
			renewalDateCtrl: 'js/controller/renewalDate',
			changeLimitCtrl: 'js/controller/changeLimit',
			salesSetCtrl: 'js/controller/salesSet',
			systemSetCtrl: 'js/controller/systemSet',
			classificationSetCtrl: 'js/controller/classificationSet'

		}
	});
	require(['pokemon', 'btModule', 'btController', 'demoCtrl', 'footer', 'header', 'shoppingCartEntity', 'ITParameterSetCtrl', 'roleSetCtrl', 'userSetCtrl', 'groupsSetCtrl', 'downtimeProbabilitySetCtrl', 'ARPBSetCtrl', 'renewalDateCtrl', 'changeLimitCtrl', 'salesSetCtrl', 'systemSetCtrl', 'classificationSetCtrl'], function (pokemon, btModule, btController, demoCtrl, footer, header, shoppingCartEntity, ITParameterSetCtrl, roleSetCtrl, userSetCtrl, groupsSetCtrl, downtimeProbabilitySetCtrl, ARPBSetCtrl, renewalDateCtrl, changeLimitCtrl, salesSetCtrl, systemSetCtrl, classificationCtrl) {
		angular.bootstrap(document, ['btModule']);
	});
})();
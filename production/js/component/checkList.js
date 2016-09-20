define([
    'btModule',
], function(btModule) {
    'use strict';
    var app = angular.module('btModule');
    var body =
        '<div class="">' +
        '<ul class="to_do" ng-repeat="item in vm.items">' +
        '<li><p><input type="checkbox" class="flat" ng-click="listName()" value="{{item.value}}">{{item.value}}</p></li>' +
        '</ul>' +
        '</div>';

    var btCheckList = {
        bindings: {
            item: '<'
        },
        template: body,
        controller: checkList,
        controllerAs: 'vm',
        require: {
            // 'parent': '^component1',
            // controller: headCtrl
        }
    }
    app.component('btCheckList', btCheckList);

    function checkList() {
        var vm = this;
        vm.items = [{
            value: '與新客戶的進度會議'
        }, {

            value: '創建新人的email信箱'
        }, {

            value: '購買新影印機X台'
        }, {

            value: '備份專案資料'
        }, {

            value: '準備新人教育訓練'
        }, {

            value: '新專案進度諮詢'
        }];
        vm.listName = function() {


        }

    }

    return app;
});
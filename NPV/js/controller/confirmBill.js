define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });

    app.controller('confirmBillCtrl', ['$scope', '$timeout', '$log', '$element',
        'ShoppingCartEntity', 'pnotifyService',
        function ($scope, $timeout, $log, $element, shoppingCartEntity, pnotifyService) {
            var vm = this;

            /*begin 版面縮合*/
            $element.on('click', '.collapse-link', function () {
                var $BOX_PANEL = $(this).closest('.x_panel'),
                    $ICON = $(this).find('i'),
                    $BOX_CONTENT = $BOX_PANEL.find('.x_content');

                if ($BOX_PANEL.attr('style')) {
                    $BOX_CONTENT.slideToggle(200, function () {
                        $BOX_PANEL.removeAttr('style');
                    });
                } else {
                    $BOX_CONTENT.slideToggle(200);
                    $BOX_PANEL.css('height', 'auto');
                }
                $ICON.toggleClass('fa-minus  fa-plus');
            });
            /*end 版面縮合*/

            /* 傳送時間 begin */
            $('#confirmBillTime-1').daterangepicker({
                singleDatePicker: true,
                // calender_style: "picker_4"
            }, function (start, end, label) {
                console.log(start.toISOString(), end.toISOString(), label);
            });

            $('#confirmBillTime-2').daterangepicker({
                singleDatePicker: true,
                // calender_style: "picker_4"
            }, function (start, end, label) {
                console.log(start.toISOString(), end.toISOString(), label);
            });
            /* 傳送時間 end */

            /* 展開表格 begin */
            $scope.isTable = false;
            $scope.showTable = function () {
                $scope.isTable = true;
            }
            /* 展開表格 end */

            /* 表格 begin */
            var opt = {
                "oLanguage": {
                    "sProcessing": "處理中...",
                    "sLengthMenu": "顯示 _MENU_ 項結果",
                    "sZeroRecords": "沒有匹配結果",
                    "sInfo": "顯示第 _START_ 至 _END_ 項結果，共 _TOTAL_ 項",
                    "sInfoEmpty": "顯示第 0 至 0 項結果，共 0 項",
                    "sInfoFiltered": "(從 _MAX_ 項結果過濾)",
                    "sSearch": "搜索:",
                    "oPaginate": {
                        "sFirst": "首頁",
                        "sPrevious": "上一頁",
                        "sNext": "下一頁",
                        "sLast": "尾頁"
                    },
                },
                "searching": false,
                "bInfo": false,
                "bPaginate": true,
                "bLengthChange": false
            };
            $timeout(function () {
                $('#datatable_confirmBill').DataTable(opt);
            }, 100)

            // 表格內容資料
            // $scope.confirmBillTableData = [{
            //     "confirmBillNpvID": "20161129004",
            //     "confirmBillType": "促代-4G",
            //     "confirmBillSecondType": "Bundle(1)",
            //     "confirmBillTime": "2016/11/29 11:55",
            //     "confirmBillPM": "yiyang",
            //     "confirmBillStatus": "待派單"
            // }, {
            //     "confirmBillNpvID": "20161129005",
            //     "confirmBillType": "折扣 (2)",
            //     "confirmBillSecondType": "N/A",
            //     "confirmBillTime": "2016/11/29 14:21",
            //     "confirmBillPM": "tatakao",
            //     "confirmBillStatus": "待派單"
            // }, {
            //     "confirmBillNpvID": "20161129006",
            //     "confirmBillType": "促代-4G／3G",
            //     "confirmBillSecondType": "Single(3)",
            //     "confirmBillTime": "2016/11/29 14:32",
            //     "confirmBillPM": "tatakao",
            //     "confirmBillStatus": "待派單"
            // }, {
            //     "confirmBillNpvID": "20161129007",
            //     "confirmBillType": "促代-3G",
            //     "confirmBillSecondType": "Single(1)",
            //     "confirmBillTime": "2016/11/29 11:45",
            //     "confirmBillPM": "yiyang",
            //     "confirmBillStatus": "待派單"
            // }, {
            //     "confirmBillNpvID": "20161129017",
            //     "confirmBillType": "促代-4G",
            //     "confirmBillSecondType": "Single(1)",
            //     "confirmBillTime": "2016/11/29 15:25",
            //     "confirmBillPM": "yiyang",
            //     "confirmBillStatus": "待派單"
            // }, {
            //     "confirmBillNpvID": "20161129018",
            //     "confirmBillType": "促代-4G",
            //     "confirmBillSecondType": "Single(1)",
            //     "confirmBillTime": "2016/11/29 16:55",
            //     "confirmBillPM": "yiyang",
            //     "confirmBillStatus": "待派單"
            // }, {
            //     "confirmBillNpvID": "20161129019",
            //     "confirmBillType": "促代-4G",
            //     "confirmBillSecondType": "Single(1)",
            //     "confirmBillTime": "2016/11/29 17:55",
            //     "confirmBillPM": "yiyang",
            //     "confirmBillStatus": "待派單"
            // }, {
            //     "confirmBillNpvID": "20161129020",
            //     "confirmBillType": "促代-4G",
            //     "confirmBillSecondType": "Single(1)",
            //     "confirmBillTime": "2016/11/29 17:55",
            //     "confirmBillPM": "yiyang",
            //     "confirmBillStatus": "待派單"
            // }, ];
            // $('#datatable_confirmBill').DataTable().destroy();
            /* 表格 end */

            /* 手風琴 begin*/
            $('#myCollapsible').collapse({
                toggle: false
            })
            /* 手風琴 end*/
        }
    ]);
    return app;
});
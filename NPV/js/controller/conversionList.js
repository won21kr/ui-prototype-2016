define(['btModule'], function (btModule) {
    'use strict';
    var app = angular.module("btModule");

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });
    app.controller('conversionListCtrl', ['$scope', '$timeout', '$log', '$element', 'ShoppingCartEntity', function ($scope, $timeout, $log, $element, ShoppingCartEntity) {
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
        /* begin */
        $scope.btnShow1 = true;
        $scope.btnShow2 = false;
        $scope.advancedSearch = function () {
            if ($scope.advancedControl) {
                $scope.advancedControl = false;
                $scope.btnShow1 = true;
                $scope.btnShow2 = false;
            } else {
                $scope.advancedControl = true;
                $scope.btnShow1 = false;
                $scope.btnShow2 = true;
            }
        }
        /* end */
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
            "bInfo": true,
            "bPaginate": true,
            "bLengthChange": false
            // "scrollX": true,

        };

        $scope.conversionListData = [{
            'conversionListSpvNo': '21231231',
            'conversionListMaster': 1,
            'conversionListSup': 0,
            'conversionListKg': 0,
            'conversionListDiscount': 0,
            'conversionListBroad': 0,
            'conversionListType': 0,
            'conversionListPremiums': 0
        }, {
            'conversionListSpvNo': '21231231',
            'conversionListMaster': 1,
            'conversionListSup': 0,
            'conversionListKg': 0,
            'conversionListDiscount': 0,
            'conversionListBroad': 0,
            'conversionListType': 0,
            'conversionListPremiums': 0
        }, {
            'conversionListSpvNo': '123123123',
            'conversionListMaster': 1,
            'conversionListSup': 0,
            'conversionListKg': 0,
            'conversionListDiscount': 0,
            'conversionListBroad': 0,
            'conversionListType': 0,
            'conversionListPremiums': 0
        }, {
            'conversionListSpvNo': '678678678',
            'conversionListMaster': 1,
            'conversionListSup': 0,
            'conversionListKg': 0,
            'conversionListDiscount': 0,
            'conversionListBroad': 0,
            'conversionListType': 0,
            'conversionListPremiums': 0
        }, {
            'conversionListSpvNo': '345345',
            'conversionListMaster': 1,
            'conversionListSup': 0,
            'conversionListKg': 0,
            'conversionListDiscount': 0,
            'conversionListBroad': 0,
            'conversionListType': 0,
            'conversionListPremiums': 0
        }, {
            'conversionListSpvNo': '21231231',
            'conversionListMaster': 1,
            'conversionListSup': 0,
            'conversionListKg': 0,
            'conversionListDiscount': 0,
            'conversionListBroad': 0,
            'conversionListType': 0,
            'conversionListPremiums': 0
        }, {
            'conversionListSpvNo': '200000876',
            'conversionListMaster': 1,
            'conversionListSup': 0,
            'conversionListKg': 0,
            'conversionListDiscount': 0,
            'conversionListBroad': 0,
            'conversionListType': 0,
            'conversionListPremiums': 0
        }, {
            'conversionListSpvNo': '23334411',
            'conversionListMaster': 1,
            'conversionListSup': 0,
            'conversionListKg': 0,
            'conversionListDiscount': 0,
            'conversionListBroad': 0,
            'conversionListType': 0,
            'conversionListPremiums': 0
        }, {
            'conversionListSpvNo': '100006554',
            'conversionListMaster': 1,
            'conversionListSup': 0,
            'conversionListKg': 0,
            'conversionListDiscount': 0,
            'conversionListBroad': 0,
            'conversionListType': 0,
            'conversionListPremiums': 0
        }, {
            'conversionListSpvNo': '2342342',
            'conversionListMaster': 1,
            'conversionListSup': 0,
            'conversionListKg': 0,
            'conversionListDiscount': 0,
            'conversionListBroad': 0,
            'conversionListType': 0,
            'conversionListPremiums': 0
        }, {
            'conversionListSpvNo': '567567',
            'conversionListMaster': 1,
            'conversionListSup': 0,
            'conversionListKg': 0,
            'conversionListDiscount': 0,
            'conversionListBroad': 0,
            'conversionListType': 0,
            'conversionListPremiums': 0
        }, {
            'conversionListSpvNo': '7897897',
            'conversionListMaster': 1,
            'conversionListSup': 0,
            'conversionListKg': 0,
            'conversionListDiscount': 0,
            'conversionListBroad': 0,
            'conversionListType': 0,
            'conversionListPremiums': 0
        }, {
            'conversionListSpvNo': '23452521',
            'conversionListMaster': 1,
            'conversionListSup': 0,
            'conversionListKg': 0,
            'conversionListDiscount': 0,
            'conversionListBroad': 0,
            'conversionListType': 0,
            'conversionListPremiums': 0
        }, {
            'conversionListSpvNo': '1000333',
            'conversionListMaster': 1,
            'conversionListSup': 0,
            'conversionListKg': 0,
            'conversionListDiscount': 0,
            'conversionListBroad': 0,
            'conversionListType': 0,
            'conversionListPremiums': 0
        }, {
            'conversionListSpvNo': '10004565',
            'conversionListMaster': 1,
            'conversionListSup': 0,
            'conversionListKg': 0,
            'conversionListDiscount': 0,
            'conversionListBroad': 0,
            'conversionListType': 0,
            'conversionListPremiums': 0
        }, {
            'conversionListSpvNo': '100019865',
            'conversionListMaster': 1,
            'conversionListSup': 0,
            'conversionListKg': 0,
            'conversionListDiscount': 0,
            'conversionListBroad': 0,
            'conversionListType': 0,
            'conversionListPremiums': 0
        }, {
            'conversionListSpvNo': '100013853',
            'conversionListMaster': 1,
            'conversionListSup': 0,
            'conversionListKg': 0,
            'conversionListDiscount': 0,
            'conversionListBroad': 0,
            'conversionListType': 0,
            'conversionListPremiums': 0
        }, {
            'conversionListSpvNo': '10001233',
            'conversionListMaster': 1,
            'conversionListSup': 0,
            'conversionListKg': 0,
            'conversionListDiscount': 0,
            'conversionListBroad': 0,
            'conversionListType': 0,
            'conversionListPremiums': 0
        }];
        $scope.conversionListStatusData = [{
            'conversionListStatusSpvNo': '21231231',
            'conversionListStatusMaster': 1,
            'conversionListStatusSup': 0,
            'conversionListStatusKg': 0,
            'conversionListStatusDiscount': '2017/01/10',
            'conversionListStatusBroad': 0,
            'conversionListStatusType': 0,
            'conversionListStatusPremiums': 0
        }, {
            'conversionListStatusSpvNo': '21231231',
            'conversionListStatusMaster': 1,
            'conversionListStatusSup': 0,
            'conversionListStatusKg': 0,
            'conversionListStatusDiscount': '2017/01/10',
            'conversionListStatusBroad': 0,
            'conversionListStatusType': 0,
            'conversionListStatusPremiums': 0
        }, {
            'conversionListStatusSpvNo': '123123123',
            'conversionListStatusMaster': 1,
            'conversionListStatusSup': 0,
            'conversionListStatusKg': 0,
            'conversionListStatusDiscount': '2017/01/10',
            'conversionListStatusBroad': 0,
            'conversionListStatusType': 0,
            'conversionListStatusPremiums': 0
        }, {
            'conversionListStatusSpvNo': '678678678',
            'conversionListStatusMaster': 1,
            'conversionListStatusSup': 0,
            'conversionListStatusKg': 0,
            'conversionListStatusDiscount': '2017/01/10',
            'conversionListStatusBroad': 0,
            'conversionListStatusType': 0,
            'conversionListStatusPremiums': 0
        }, {
            'conversionListStatusSpvNo': '345345',
            'conversionListStatusMaster': 1,
            'conversionListStatusSup': 0,
            'conversionListStatusKg': 0,
            'conversionListStatusDiscount': '2017/01/10',
            'conversionListStatusBroad': 0,
            'conversionListStatusType': 0,
            'conversionListStatusPremiums': 0
        }, {
            'conversionListStatusSpvNo': '21231231',
            'conversionListStatusMaster': 1,
            'conversionListStatusSup': 0,
            'conversionListStatusKg': 0,
            'conversionListStatusDiscount': '2017/01/10',
            'conversionListStatusBroad': 0,
            'conversionListStatusType': 0,
            'conversionListStatusPremiums': 0
        }];
        //SPV NO詳細
        $scope.conversionListStatusSpvDetailData = [{
            'conversionListStatusSpvDetailType': '主約促帶',
            'conversionListStatusSpvDetailCode': 'UQQ20EP-NEN4',
            'conversionListStatusSpvDetailName': '4G啟用_預繳2400_保證金2000'
        }, {
            'conversionListStatusSpvDetailType': '主約促帶',
            'conversionListStatusSpvDetailCode': 'AACDEEP-NEN4',
            'conversionListStatusSpvDetailName': '4G啟用_預繳2400_保證金2000'
        }, {
            'conversionListStatusSpvDetailType': '主約促帶',
            'conversionListStatusSpvDetailCode': 'WDR233EP-NEN4',
            'conversionListStatusSpvDetailName': '4G啟用_預繳2400_保證金2000'
        }];
        // 違約金
        $scope.conversionPunitiveTableData = [{
            'conversionPunitiveNo': 1,
            'conversionPunitiveType': '電信折扣(月租型)',
            'conversionPunitiveStartDate': '0.0',
            'conversionPunitiveEndDate': '0.0',
            'conversionPunitiveGold': '0'
        }, {
            'conversionPunitiveNo': 2,
            'conversionPunitiveType': '電信折扣(月租型)',
            'conversionPunitiveStartDate': '0.0',
            'conversionPunitiveEndDate': '0.0',
            'conversionPunitiveGold': '0'
        }]
        //  折扣
        $scope.conversionDiscountTableData = [{
            'conversionDiscountItem': '166402-月租費優惠165元*30個月'
        }];
        //拆單項目明細
        $scope.disassembleListTableData = [{
            'disassembleListItemCode': 'WIM00EN-YEN4',
            'disassembleListIemName': '匯入-3轉4續約-VIP1_iPhone 二年_新絕配2699限24',
            'disassembleListType': '主約',
            'disassembleListBool': 'N'
        }, {
            'disassembleListItemCode': 'WIM00EN-6FD4',
            'disassembleListIemName': '匯入-3轉4續約-VIP1_iPhone 二年_新絕配2699限24',
            'disassembleListType': '主約',
            'disassembleListBool': 'N'
        }, {
            'disassembleListItemCode': 'WIM00EN-6FD4',
            'disassembleListIemName': '匯入-3轉4續約-VIP1_iPhone 二年_新絕配2699限24',
            'disassembleListType': '主約',
            'disassembleListBool': 'N'
        }, {
            'disassembleListItemCode': 'WIM00EN-6FD4',
            'disassembleListIemName': '匯入-3轉4續約-VIP1_iPhone 二年_新絕配2699限24',
            'disassembleListType': '主約',
            'disassembleListBool': 'N'
        }, {
            'disassembleListItemCode': 'WIM00EN-6FD4',
            'disassembleListIemName': '匯入-3轉4續約-VIP1_iPhone 二年_新絕配2699限24',
            'disassembleListType': '主約',
            'disassembleListBool': 'N'
        }, {
            'disassembleListItemCode': 'WIM00EN-6FD4',
            'disassembleListIemName': '匯入-3轉4續約-VIP1_iPhone 二年_新絕配2699限24',
            'disassembleListType': '主約',
            'disassembleListBool': 'N'
        }, {
            'disassembleListItemCode': 'WIM00EN-6FD4',
            'disassembleListIemName': '匯入-3轉4續約-VIP1_iPhone 二年_新絕配2699限24',
            'disassembleListType': '主約',
            'disassembleListBool': 'N'
        }, {
            'disassembleListItemCode': 'WIM00EN-6FD4',
            'disassembleListIemName': '匯入-3轉4續約-VIP1_iPhone 二年_新絕配2699限24',
            'disassembleListType': '主約',
            'disassembleListBool': 'N'
        }, {
            'disassembleListItemCode': 'WIM00EN-6FD4',
            'disassembleListIemName': '匯入-3轉4續約-VIP1_iPhone 二年_新絕配2699限24',
            'disassembleListType': '主約',
            'disassembleListBool': 'N'
        }, {
            'disassembleListItemCode': 'WIM00EN-6FD4',
            'disassembleListIemName': '匯入-3轉4續約-VIP1_iPhone 二年_新絕配2699限24',
            'disassembleListType': '主約',
            'disassembleListBool': 'N'
        }, {
            'disassembleListItemCode': 'WIM00EN-6FD4',
            'disassembleListIemName': '匯入-3轉4續約-VIP1_iPhone 二年_新絕配2699限24',
            'disassembleListType': '主約',
            'disassembleListBool': 'N'
        }, {
            'disassembleListItemCode': 'WIM00EN-6FD4',
            'disassembleListIemName': '匯入-3轉4續約-VIP1_iPhone 二年_新絕配2699限24',
            'disassembleListType': '主約',
            'disassembleListBool': 'N'
        }];
        //轉出人員
        $scope.turnOutTableData = [{
            'turnOutPeople': 'people1',
            'turnOutSpvNo': '100530023'
        }];



        /* lightbox open */
        $(document).on('hidden.bs.modal', '.modal', function () {
            $('.modal:visible').length && $(document.body).addClass('modal-open');
        });
        /* lightbox end */

        $scope.changeListFunction = 'conversionList';
        //排序
        $('#datatable_conversionListData').DataTable().destroy();

        $timeout(function () {
            $('#datatable_conversionListData').DataTable(opt);
        }, 100)
        //排序2
        $('#datatable_conversionListStatusData').DataTable().destroy();

        $timeout(function () {
            $('#datatable_conversionListStatusData').DataTable(opt);
        }, 100)
        // SPVNO詳細排序
        $('#datatable_conversionListStatusSpvDetailData').DataTable().destroy();

        $timeout(function () {
            $('#datatable_conversionListStatusSpvDetailData').DataTable(opt);
        }, 100)
        // 轉出人員排序
        $('#datatable_turnOutTableData').DataTable().destroy();

        $timeout(function () {
            $('#datatable_turnOutTableData').DataTable(opt);
        }, 100)
    }]);
    return app;
});
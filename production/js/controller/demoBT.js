define(['btModule'], function(btModule) {
    'use strict';
    var app = angular.module("btModule");
    
    var indexComponent = {
        template: require('../../template/index.html'),
        controller: indexCrel,
        controllerAs: 'vm',
        bindings: {
            con: '='
        }
    };
    app.component('indexComponent', indexComponent);
    indexCrel.$inject = ['$http'];
    function indexCrel($http){
        this.con = '給我angular $http';
    }

    // app.controller('indexCrel', function($scope) {
    //     this.con = '給我angular';
    // });
    
    app.controller("tableCtrl", function($scope) {
        $scope.con = "angular";
    });
    app.controller('sliderMenu', ['$scope', '$timeout', function($scope, $timeout) {
        var CURRENT_URL = window.location.href.split('?')[0],
            $BODY = $('body'),
            $MENU_TOGGLE = $('#menu_toggle'),
            $SIDEBAR_MENU = $('#sidebar-menu'),
            $SIDEBAR_FOOTER = $('.sidebar-footer'),
            $LEFT_COL = $('.left_col'),
            $RIGHT_COL = $('.right_col'),
            $NAV_MENU = $('.nav_menu'),
            $FOOTER = $('footer');
        $timeout(function() {
            // Sidebar
            $(document).ready(function() {
                // TODO: This is some kind of easy fix, maybe we can improve this
                var setContentHeight = function() {
                    // reset height
                    $RIGHT_COL.css('min-height', $(window).height());

                    var bodyHeight = $BODY.outerHeight(),
                        footerHeight = $BODY.hasClass('footer_fixed') ? -10 : $FOOTER.height(),
                        leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
                        // contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;
                        contentHeight = leftColHeight;

                    // normalize content
                    // contentHeight -= $NAV_MENU.height() + footerHeight;

                    $RIGHT_COL.css('min-height', contentHeight);
                };

                $SIDEBAR_MENU.find('a').on('click', function(ev) {
                    var $li = $(this).parent();
                    var $slideUpTime = 150;
                    if ($BODY.hasClass('nav-md')) {
                        $slideUpTime = 150;
                    } else {
                        $slideUpTime = 0;
                    }

                    if ($li.is('.active')) {
                        $li.removeClass('active active-sm');
                        $('ul:first', $li).slideUp($slideUpTime, function() {
                            setContentHeight();
                        });
                    } else {
                        // prevent closing menu if we are on child menu
                        if (!$li.parent().is('.child_menu')) {
                            $SIDEBAR_MENU.find('li').removeClass('active active-sm');
                            $SIDEBAR_MENU.find('li ul').slideUp($slideUpTime);
                        }

                        $('.nav .child_menu li').removeClass('active');

                        $li.addClass('active');

                        $('ul:first', $li).slideDown($slideUpTime, function() {
                            // setContentHeight();
                        });
                    }
                });

                // toggle small or large menu
                $MENU_TOGGLE.on('click', function() {
                    if ($BODY.hasClass('nav-md')) {
                        $SIDEBAR_MENU.find('li.active ul').hide();
                        $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
                    } else {
                        $SIDEBAR_MENU.find('li.active-sm ul').show();
                        $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
                    }

                    $BODY.toggleClass('nav-md nav-sm');

                    setContentHeight();
                });

                // check active menu
                $SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent('li').addClass('current-page');

                $SIDEBAR_MENU.find('a').filter(function() {
                    return this.href == CURRENT_URL;
                }).parent('li').addClass('current-page').parents('ul').slideDown(function() {
                    setContentHeight();
                }).parent().addClass('active');

                // recompute content when resizing
                $(window).smartresize(function() {
                    setContentHeight();
                });

                setContentHeight();

                // fixed sidebar
                if ($.fn.mCustomScrollbar) {
                    $('.menu_fixed').mCustomScrollbar({
                        autoHideScrollbar: true,
                        theme: 'minimal',
                        mouseWheel: {
                            preventDefault: true
                        }
                    });
                }
            });



        });
        // /Sidebar				
    }]);
    return app;
});
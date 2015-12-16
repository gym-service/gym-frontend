(function(){
"use strict";

angular.module("app")
.directive('appMenu', ['$window', function ($window) {
    return {
        restrict: 'A',
        templateUrl : 'templates/menu.html',
        replace : true,
        link: function (scope, iElement, iAttrs) {

            var docElem = document.documentElement,
                navbar = $(iElement[0]),
                didScroll = false,
                changeHeaderOn = 160,
                scrollListener = null;

            function init() {
                scrollListener = window.addEventListener( 'scroll', function() {
                    if( !didScroll ) {
                        didScroll = true;
                        setTimeout( scrollPage, 250 );
                    }
                }, false );
                if($(window).scrollTop() >= changeHeaderOn){
                    scrollPage();
                }
            }

            function scrollPage() {
                var sy = scrollY();
                if ( sy >= changeHeaderOn ) {
                    navbar.removeClass('navbar-shrink');
                }
                else {
                    navbar.addClass('navbar-shrink');
                }
                didScroll = false;
            }

            function scrollY() {
                return window.pageYOffset || docElem.scrollTop;
            }

            init();

            
            scope.$on('$destroy', function(){
                window.removeEventListener('scroll', scrollListener);
            });




        }
    };
}]);


})();

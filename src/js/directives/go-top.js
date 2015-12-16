(function(){
"use strict";

angular.module("app")
.directive('goTop', ['$document', '$timeout' ,function ($document, $timeout) {
    return {
        restrict: 'A',
        templateUrl : 'templates/go_top.html',
        //replace : true,
        link: function (scope, iElement, iAttrs) {

            var handler;

            scope.gotoTop = function() {
                $document.scrollTo(0, 0 ,500)      
            };

            scope.gotoBottom = function() {
                $document.scrollTo(0, 700 ,500)      
            };    

            


            $timeout(function(){
                if($document.scrollTop() >= 600){
                    scope.bottoneToTop = true;    
                    $('.scrollToTop_d').fadeIn();
                    $('.scrollToBottom_d').fadeOut();
                } else {
                    scope.bottoneToTop = false;    
                    $('.scrollToTop_d').fadeOut();
                    $('.scrollToBottom_d').fadeIn();
                }
            })
            

            handler = $document.on('scroll', function() {
                if ($document.scrollTop() >= 600 && (scope.bottoneToTop==false)) {
                    scope.bottoneToTop = !scope.bottoneToTop;
                    $('.scrollToTop_d').fadeIn();
                    //test per scendere
                    $('.scrollToBottom_d').fadeOut();
                    //$('.navbar').addClass('navbar-shrink');
                }
                if ($document.scrollTop() < 600 && (scope.bottoneToTop==true)) {
                    $('.scrollToTop_d').fadeOut();
                    //test per scendere
                    $('.scrollToBottom_d').fadeIn();
                    //$('.navbar').removeClass('navbar-shrink');
                    scope.bottoneToTop = !scope.bottoneToTop
                }

            });

            scope.$on('$destroy', function(){
                $document.off('scroll', handler);
            });
        }
   }
}]);


})();

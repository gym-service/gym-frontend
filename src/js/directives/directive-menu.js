(function(){
"use strict";

angular.module("app")
.directive('appMenu', [function () {
    return {
        restrict: 'A',
        templateUrl : 'templates/menu.html',
        replace : true,
        link: function (scope, iElement, iAttrs) {

        }
    };
}]);
   
    
})();
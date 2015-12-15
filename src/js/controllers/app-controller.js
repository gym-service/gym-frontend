(function(){
"use strict";

angular.module('app')
.controller('AppCtrl', AppCtrl);

function AppCtrl($scope, $rootScope, $document){

    // An example implementation of login/logout helpers
    // To use them, $auth must be injected into controller

    /*
    $scope.logged = $auth.isAuthenticated();
    $scope.$on("app:loginSuccess", function(){
        $scope.logged = true;
    });
    $scope.logout = function(){
        $auth.logout()
        $rootScope.$broadcast("app:logoutSuccess");
        $scope.logged = false;
    };
    */
    $scope.gotoTop = function() {
      $document.scrollTo(0, 0 ,500)      
    };

    $scope.gotoBottom = function() {
      $document.scrollTo(0, 700 ,500)      
    };    
/////////////////////////////////////////////////////////////////////////////

    $rootScope.bottoneToTop = false;

$document.on('scroll', function() {
      if ($document.scrollTop() >= 600 && ($rootScope.bottoneToTop==false)) {
        $rootScope.bottoneToTop = !$rootScope.bottoneToTop
       $('.scrollToTop_d').fadeIn();
       //test per scendere
       $('.scrollToBottom_d').fadeOut();
       //$('.navbar').addClass('navbar-shrink');
 }
      if ($document.scrollTop() < 600 && ($rootScope.bottoneToTop==true)) {
          $('.scrollToTop_d').fadeOut();
          //test per scendere
          $('.scrollToBottom_d').fadeIn();
          //$('.navbar').removeClass('navbar-shrink');
          $rootScope.bottoneToTop = !$rootScope.bottoneToTop
          }
    
  });




};


})();
(function(){

"use strict";

angular.module('app.statesconfig', ['ui.router'])

.run(function($rootScope){

    //perform redirects based on login/logout here
    /*
    $rootScope.$on("app:logoutSuccess", function(){
        $state.go("app.login");
    })

    $rootScope.$on("app:loginSuccess", function(){
        $state.go("app.home");
    })
    */

})

.config(function($stateProvider, $urlRouterProvider){

    /* States config */

    $stateProvider
    .state('app', {
        url: '/app',
        abstract: true,
        template : '<ui-view></ui-view>',
        //controller : 'RootCtrl'
    })
    .state('app.login', {
        url: '/login',
        //templateUrl: 'templates/login.html',
        //controller: 'LoginCtrl',
        resolve: {
          
        }
    })
    .state('app.account', {
        url: '/account',
        templateUrl: 'templates/account.html',
        //controller: 'AccountCtrl',
        resolve: {
          
        },
        data: {
            permissions: {
                except: ['anonymous'],
                redirectTo: 'app.login'
            },

        },
    })
    
    .state('app.home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: function($scope){
            
        },
        resolve: {
          
        },
        /*
        data: {
            permissions: {
                only: ['admin']
            }
        },
        */
    })

    .state('app.clublist', {
    url: "/club",
    url: "/club/:clubId",  
    cache : true,
    templateUrl: "templates/club.html",
    controller : "ClubCtrl"  
    })

    .state('app.clubdetail', {
    url: "/club/:clubId",  
    cache : true,
    templateUrl: "templates/clubdetail.html",
    controller : "ClubDetailCtrl"
    })

    .state('app.servizilist', {
    url: "/servizi",
    cache : true,
    templateUrl: "templates/service.html",
    controller : "ServiziCtrl"  
    })

    .state('app.servizidetail', {
    url: "/servizi",
    cache : true,
    templateUrl: "templates/servicedetail.html",
    controller : "ServiziCtrl"  
    })

    .state('app.trainerslist', {
    url: "/servizi/trainers",
    cache : true,
    templateUrl: "templates/trainer.html",
    controller : "TrainersCtrl"
    })

    .state('app.trainerdetail', {
    url: "/servizi/trainer/:trainerId",
    cache : true,
    templateUrl: "templates/servizidetail.html",
    controller : "TrainerDetailCtrl"
    })


    .state('app.newslist', {
    url: "/news",
    cache : true,
    templateUrl: "templates/trainer.html",
    controller : "NewsCtrl"
    })

    .state('app.newsdetail', {
    url: "/news/:trainerId",
    cache : true,
    templateUrl: "templates/newsdetail.html",
    controller : "NewsDetailCtrl"
    })

    .state('app.presslist', {
    url: "/press",
    cache : true,
    templateUrl: "templates/press.html",
    controller : "PressCtrl"
    })

    .state('app.pressdetail', {
    url: "/press/:pressId",
    cache : true,
    templateUrl: "templates/pressdetail.html",
    controller : "PressDetailCtrl"
    })

    .state('app.eventilist', {
    url: "/event",
    cache : true,
    templateUrl: "templates/eventi.html",
    controller : "EventCtrl"
    })

    .state('app.eventidetail', {
    url: "/eventi/:eventiId",
    cache : true,
    templateUrl: "templates/eventidetail.html",
    controller : "EventiDetailCtrl"
    })

    .state('app.promozionilist', {
    url: "/promozioni",
    cache : true,
    templateUrl: "templates/promozioni.html",
    controller : "PromozioniCtrl"
    })

    .state('app.promozionidetail', {
    url: "/promozioni/:promozioniId",
    cache : true,
    templateUrl: "templates/promozionidetail.html",
    controller : "PromozioniDetailCtrl"
    })

    .state('app.contatti', {
    url: "/contatti",
    cache : false,
    templateUrl: "templates/contatti.html",
    controller : "ContattiCtrl"
    })

    .state('app.guestpass', {
    url: "/guestpass",
    cache : false,
    templateUrl: "templates/guestpass.html",
    controller : "GuestpassCtrl"
    })

    .state('app.orarilezioni', {
    url: "/orarilezioni",
    cache : false,
    templateUrl: "templates/orarilezioni.html",
    controller : "OrarilezioniCtrl"
    })


    $urlRouterProvider.otherwise(function ($injector) {
        var $state = $injector.get('$state');
        $state.go('app.home');
    });

})

})();
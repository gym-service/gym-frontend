(function(){
"use strict";

angular.module('app')
.controller('EventiCtrl', EventiCtrl);

function EventiCtrl($scope, DataService){

    DataService.eventi.getList()
    .then(function(data){
        $scope.eventi = data;
    })

};


})();
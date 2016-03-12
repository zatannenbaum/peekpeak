'use strict';

var playnow = angular.module('playnow', ['ngRoute', 'ui.bootstrap']);
playnow.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/playnow', {
      controller: 'playnowCtrl'
    }).otherwise({
      redirectTo: '/playnow',
      caseInsensitiveMatch: true
    })
  }]);

playnow.controller('dictionaryCtrl', ['$scope', '$rootScope', 'PlaynowService', function($scope, $rootScope, PlaynowService) {




  // DictionaryService.getSynonyms().then(function(response) {
  //   $scope.syns = response;
  // });
  //
  // $scope.updateprev = function() {
  //   $scope.idef = $scope.idef - 1;
  //   if ($scope.idef < 0) {
  //     $scope.idef = $scope.currentDefs.length - 1;
  //   }
  //   $scope.image = true;
  // }



}]);

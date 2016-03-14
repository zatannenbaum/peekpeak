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

playnow.controller('playnowCtrl', ['$scope', '$rootScope', 'PlaynowService', function($scope, $rootScope, PlaynowService) {
  $scope.units = [];
  $scope.questions = [];
  $scope.currentUnit = '';
  $scope.currentQs = [];


  PlaynowService.getUnits().then(function(response) {
    $scope.units = response;
  });

  PlaynowService.getQuestions().then(function(response) {
    $scope.questions = response;
  });

  $scope.selectUnit = function(unit) {
    $scope.currentQs = [];
    $scope.currentUnit = unit;
    for (var i = 0; i < $scope.questions.length; i++) {
      if ($scope.questions[i].unit === $scope.currentUnit.id) {
        $scope.currentQs.push($scope.questions[i]);
      }
    }
  }





}]);

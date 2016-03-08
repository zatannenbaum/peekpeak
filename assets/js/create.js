'use strict';

var create = angular.module('create', ['ngRoute', 'ui.bootstrap']);
create.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/create', {
      controller: 'createCtrl'
    }).otherwise({
      redirectTo: '/create',
      caseInsensitiveMatch: true
    })
  }]);

create.controller('createCtrl', ['$scope', '$rootScope', 'CreateService', function($scope, $rootScope, CreateService) {
  $scope.wordformData = {};
  $scope.currentWord = '';
  $scope.defformData = {};
  $scope.currentDef = '';
  $scope.synformData = {};

  $scope.addWord = function() {
    CreateService.addWord($scope.wordformData).then(function(response) {
      $scope.wordformData = {};
      $scope.currentWord = response;
    })
  }

  $scope.addDef = function() {
    CreateService.addDef($scope.defformData).then(function(response) {
      $scope.defformData = {};
      $scope.currentDef = response;
    })
  }

  $scope.addSyn = function() {
    CreateService.addSyn($scope.synformData).then(function(response) {
      $scope.synformData = {};
    })
  }





}]);

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

create.controller('createCtrl', ['$scope', '$rootScope', '$window', 'CreateService', function($scope, $rootScope, $window, CreateService) {
  $scope.unitformData = {};
  $scope.currentUnit = '';
  $scope.mcformData = {};
  $scope.fitbformData = {};
  $scope.matchformData = {};
  $scope.pmformData = {};
  $scope.wordformData = {};
  $scope.currentWord = '';
  $scope.defformData = {};
  $scope.currentDef = '';
  $scope.synformData = {};

  $scope.addUnit = function() {
    CreateService.addUnit($scope.unitformData).then(function(response) {
      $scope.unitformData = {};
      $scope.currentUnit = response;
    })
  }

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

  $scope.addMC = function() {
    CreateService.addMC($scope.mcformData).then(function() {
      $scope.mcformData = {};
    })
  }

  $scope.addFITB = function() {
    CreateService.addFITB($scope.fitbformData).then(function() {
      $scope.fitbformData = {};
    })
  }

  $scope.addMatch = function() {
    CreateService.addMatch($scope.matchformData).then(function() {
      $scope.matchformData = {};
    })
  }

  $scope.addPM = function() {
    CreateService.addPM($scope.pmformData).then(function() {
      $scope.pmformData = {};
    })
  }

  $scope.userLogout = function () {
    CreateService.userLogout().then(function(response) {
      $window.location.href = '/login';
    })
  }



}]);

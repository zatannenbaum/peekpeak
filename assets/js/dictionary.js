'use strict';

var dictionary = angular.module('dictionary', ['ngRoute', 'ui.bootstrap']);
dictionary.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/dictionary', {
      controller: 'dictionaryCtrl'
    }).otherwise({
      redirectTo: '/dictionary',
      caseInsensitiveMatch: true
    })
  }]);

dictionary.controller('dictionaryCtrl', ['$scope', '$rootScope', 'DictionaryService', function($scope, $rootScope, DictionaryService) {
  $scope.words = [];
  $scope.currentWord = '';
  $scope.defs = [];
  $scope.currentDefs = [];
  $scope.syns = [];
  $scope.idef = 0;
  $scope.image = true;


  DictionaryService.getWords().then(function(response) {
    $scope.words = response;
    $scope.currentWord = $scope.words[1];
  });

  $scope.selectWord = function(word) {
    $scope.currentDefs = [];
    $scope.idef = 0;
    $scope.image = true;
    $scope.currentWord = word;
    for (var i = 0; i < $scope.defs.length; i++) {
      if ($scope.defs[i].word === $scope.currentWord.id) {
        $scope.currentDefs.push($scope.defs[i]);
      }
    }
  }

  DictionaryService.getDefinitions().then(function(response) {
    $scope.defs = response;
    for (var i = 0; i < $scope.defs.length; i++) {
      if ($scope.defs[i].word === $scope.currentWord.id) {
        $scope.currentDefs.push($scope.defs[i]);
      }
    }
  });

  DictionaryService.getSynonyms().then(function(response) {
    $scope.syns = response;
  });

  $scope.updateprev = function() {
    $scope.idef = $scope.idef - 1;
    if ($scope.idef < 0) {
      $scope.idef = $scope.currentDefs.length - 1;
    }
    $scope.image = true;
  }

  $scope.updatenext = function() {
    $scope.idef = $scope.idef + 1;
    if ($scope.idef === $scope.currentDefs.length) {
      $scope.idef = 0;
    }
    $scope.image = true;
  }

  $scope.showdef = function() {
    $scope.image = false;
  }

  $scope.showimg = function() {
    $scope.image = true;
  }




}]);

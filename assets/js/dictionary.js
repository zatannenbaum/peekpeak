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

  DictionaryService.getWords().then(function(response) {
    $scope.words = response;
    $scope.currentWord = $scope.words[0];
  });

  $scope.selectWord = function(word) {
    DictionaryService.selectWord(word).then(function(response) {
      $scope.currentWord = $scope.words($scope.words.indexOf(word));
    });
  }
}]);
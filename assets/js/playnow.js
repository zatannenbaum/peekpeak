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
  $scope.currentQ = '';
  $scope.currentanswers = [];
  $scope.answer = { response: '' };
  $scope.matchanswer = { a: null, b: null, c: null, d: null, e: null, f: null, g: null};
  $scope.answered = false;
  $scope.correct = false;
  $scope.done = false;


  PlaynowService.getUnits().then(function(response) {
    $scope.units = response;
  });

  PlaynowService.getQuestions().then(function(response) {
    $scope.questions = response;
  });

  $scope.selectUnit = function() {
    $scope.currentQs = [];
    $scope.i = 0;
    $scope.answer.response = '';
    $scope.matchanswer = { a: null, b: null, c: null, d: null, e: null, f: null, g: null};
    $scope.answered = false;
    $scope.done = false;

    for (var i = 0; i < $scope.questions.length; i++) {
      if ($scope.questions[i].unit === $scope.currentUnit.id) {
        $scope.currentQs.push($scope.questions[i]);
      }
    }

    /*
     * Randomize array element order in-place.
     * Using Durstenfeld shuffle algorithm.
     */
    for (var i = $scope.currentQs.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = $scope.currentQs[i];
      $scope.currentQs[i] = $scope.currentQs[j];
      $scope.currentQs[j] = temp;
    }

    $scope.currentQ = $scope.currentQs[$scope.i];


  }

  $scope.checkMCFITB = function() {
    $scope.answered = true;
    $scope.correct = ($scope.currentQ.answer_a === $scope.answer.response);
  }

  $scope.checkMatch = function() {
    $scope.answered = true;
    $scope.correct = ($scope.currentQ.answer_a === $scope.matchanswer.a) && ($scope.currentQ.answer_b === $scope.matchanswer.b) && ($scope.currentQ.answer_c === $scope.matchanswer.c) && ($scope.currentQ.answer_d === $scope.matchanswer.d) && ($scope.currentQ.answer_e === $scope.matchanswer.e) && ($scope.currentQ.answer_f === $scope.matchanswer.f) && ($scope.currentQ.answer_g === $scope.matchanswer.g);
  }

  $scope.next = function() {
    $scope.answer.response = '';
    $scope.matchanswer = { a: null, b: null, c: null, d: null, e: null, f: null, g: null};
    $scope.answered = false;
    
    $scope.i++;
    if ($scope.i === $scope.currentQs.length) {
      $scope.done = true;
    } else {
      $scope.currentQ = $scope.currentQs[$scope.i];
    }
  }



}]);

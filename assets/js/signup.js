'use strict';

var signup = angular.module('signup', ['ngRoute', 'ui.bootstrap']);
signup.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/signup', {
      controller: 'signupCtrl'
    }).otherwise({
      redirectTo: '/signup',
      caseInsensitiveMatch: true
    })
  }]);

signup.controller('signupCtrl', ['$scope', '$rootScope', '$window', 'SignupService', function($scope, $rootScope, $window, SignupService) {
  $scope.signupform = { first: null, last: null, email: null, username: null, password: null, password2: null };
  $scope.incomplete = false;
  $scope.passwordissue = false;
  $scope.emailexists = false;
  $scope.userexists = false;

  $scope.createUser = function () {
    if ($scope.signupform.first && $scope.signupform.last && $scope.signupform.email && $scope.signupform.username && $scope.signupform.password && $scope.signupform.password2) {
      $scope.incomplete = false;
    } else {
      $scope.incomplete = true;
      return;
    }

    if ($scope.signupform.password.length < 7 || ($scope.signupform.password !== $scope.signupform.password2)) {
      $scope.passwordissue = true;
      return;
    } else {
      $scope.passwordissue = false;
    }

    SignupService.userSearch($scope.signupform).then(function(response) {
      var user = response;
      if (user.length > 0) {
        $scope.userexists = true;
      } else {
        $scope.userexists = false;
      }
    }).then(function() {
      if ($scope.userexists) {
        return;
      } else {
        SignupService.createUser($scope.signupform).then(function() {
          $window.location.href = '/';
        })
      }
    })

  }


}]);

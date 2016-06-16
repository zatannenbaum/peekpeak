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
  $scope.schools = [];
  $scope.currentSchool = '';
  $scope.users = [];
  $scope.schoolTeachers = [];
  $scope.teacher = '';
  $scope.signupform = { school_id: null, teacher_id: null, first: null, last: null, email: null, username: null, password: null, password2: null };
  $scope.incomplete = false;
  $scope.passwordissue = false;
  $scope.emailexists = false;
  $scope.userexists = false;

  SignupService.getSchools().then(function(response) {
    $scope.schools = response;
  });

  SignupService.getUsers().then(function(response) {
    $scope.users = response;
  });

  $scope.selectSchool = function () {
    $scope.schoolTeachers = [];
    for (var i = 0; i < $scope.users.length; i++) {
      var user = $scope.users[i];
      if (user.usertype == "teacher" && user.school == $scope.currentSchool.id) {
        $scope.schoolTeachers.push(user);
      }
    }
  }

  $scope.createUser = function () {
    if ($scope.signupform.first && $scope.signupform.last && $scope.signupform.email &&
        $scope.currentSchool != '' && $scope.teacher != '' && $scope.signupform.username &&
        $scope.signupform.password && $scope.signupform.password2) {
      $scope.incomplete = false;
      $scope.signupform.school_id = $scope.currentSchool.id;
      $scope.signupform.teacher_id = $scope.teacher.id;
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

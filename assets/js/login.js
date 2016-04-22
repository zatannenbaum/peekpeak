'use strict';

var login = angular.module('login', ['ngRoute', 'ui.bootstrap']);
login.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/login', {
      controller: 'loginCtrl'
    }).otherwise({
      redirectTo: '/login',
      caseInsensitiveMatch: true
    })
  }]);

login.controller('loginCtrl', ['$scope', '$rootScope', '$window', 'LoginService', function($scope, $rootScope, $window, LoginService) {
  $scope.loginform = {};
  $scope.loginfailed = false;



  $scope.userLogin = function () {
    LoginService.userLogin($scope.loginform).then(function(response) {
      if (response.username !== null) {
        $window.location.href = '/';
      } else {
        $scope.loginfailed = true;
      }
    })
  }


}]);

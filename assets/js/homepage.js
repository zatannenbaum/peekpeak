'use strict';

var homepage = angular.module('homepage', ['ngRoute', 'ui.bootstrap']);
homepage.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      controller: 'homepageCtrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }]);

homepage.controller('homepageCtrl', ['$scope', '$rootScope', '$window', 'HomepageService', function($scope, $rootScope, $window, HomepageService) {

  $scope.userLogout = function () {
    HomepageService.userLogout().then(function(response) {
      $window.location.href = '/login';
    })
  }


}]);

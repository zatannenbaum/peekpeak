homepage.service('HomepageService', function($http, $q) {
  return {
    'userLogout': function() {
      var defer = $q.defer();
      $http.get('/user/logout').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  }
});

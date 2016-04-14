login.service('LoginService', function($http, $q) {
  return {
    'userLogin': function(form) {
      var defer = $q.defer();
      $http.post('/user/login', form).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  }
});

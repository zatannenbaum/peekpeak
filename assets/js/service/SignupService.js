signup.service('SignupService', function($http, $q) {
  return {
    // 'search': function(form) {
    //   var defer = $q.defer();
    //   $http.post('/user/search', form).success(function(resp){
    //     defer.resolve(resp);
    //   }).error( function(err) {
    //     defer.reject(err);
    //   });
    //   return defer.promise;
    // },
    'userSearch': function(form) {
      var defer = $q.defer();
      $http.post('/user/userSearch', form).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'createUser': function(form) {
      var defer = $q.defer();
      $http.post('/user/createUser', form).success(function(resp) {
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  }
});

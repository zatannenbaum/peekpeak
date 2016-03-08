create.service('CreateService', function($http, $q) {
  return {
    'addWord': function(word) {
      var defer = $q.defer();
      $http.post('/word/addWord', word).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addDef': function(def) {
      var defer = $q.defer();
      $http.post('/definition/addDef', def).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addSyn': function(syn) {
      var defer = $q.defer();
      $http.post('/synonym/addSyn', syn).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }

  }
});

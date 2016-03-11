dictionary.service('DictionaryService', function($http, $q) {
  return {
    'getWords': function() {
      var defer = $q.defer();
      $http.get('/word/getWords').success(function(resp) {
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'getDefinitions': function() {
      var defer = $q.defer();
      $http.get('/definition/getDefinitions').success(function(resp) {
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'getSynonyms': function() {
      var defer = $q.defer();
      $http.get('/synonym/getSynonyms').success(function(resp) {
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  }
});

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
    'selectWord': function(word) {
      var defer = $q.defer();
      $http.get('word/selectWord', word).success(function(resp) {
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  }
});
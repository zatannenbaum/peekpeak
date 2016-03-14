playnow.service('PlaynowService', function($http, $q) {
  return {
    'getUnits': function() {
      var defer = $q.defer();
      $http.get('/unit/getUnits').success(function(resp) {
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'getQuestions': function() {
      var defer = $q.defer();
      $http.get('/question/getQuestions').success(function(resp) {
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }

  }
});

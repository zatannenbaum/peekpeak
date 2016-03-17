create.service('CreateService', function($http, $q) {
  return {
    'addUnit': function(unit) {
      var defer = $q.defer();
      $http.post('/unit/addUnit', unit).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
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
    },
    'addMC': function(mc) {
      var defer = $q.defer();
      $http.post('/question/addMC', mc).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addFITB': function(fitb) {
      var defer = $q.defer();
      $http.post('/question/addFITB', fitb).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addMatch': function(match) {
      var defer = $q.defer();
      $http.post('/question/addMatch', match).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addPM': function(pm) {
      var defer = $q.defer();
      $http.post('/question/addPM', pm).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  }
});

app.controller('databaseCtrl', function($scope, $location, $route, identityService){

  $scope.identity = identityService;
  $scope.database = $route.current.locals.database;
  $scope.db = $route.current.locals.database.db;
});

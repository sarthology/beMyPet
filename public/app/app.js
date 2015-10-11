//adding a node module
angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider,$interpolateProvider) {
  $locationProvider.html5Mode({enabled: true,
    requireBase: false});
  $routeProvider
    .when('/', { templateUrl: '/partials/main.hbs', controller: 'mainCtrl'});
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.myVar = "Be my Pet";
});

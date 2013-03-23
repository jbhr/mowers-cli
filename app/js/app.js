'use strict';

/* App Module */

var app = angular.module('mowerscli', ['mowerscliFilters', 'mowerscliServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/surfaces', {templateUrl: 'partials/surface-list.html',   controller: SurfaceListCtrl}).
      when('/surfaces/:surfaceId', {templateUrl: 'partials/surface-detail.html', controller: SurfaceDetailCtrl}).
      otherwise({redirectTo: '/surfaces'});
}]);

//configure html5 to get links working
// If you don't do this, you URLs will be base.com/#/home rather than base.com/home
//$locationProvider.html5Mode(true);
//app.constant("restBaseUrl","http://localhost:8080\:8080");

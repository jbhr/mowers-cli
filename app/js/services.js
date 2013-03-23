'use strict';

/* Services */

/* Ca fonctionne */
angular.module('mowerscliServices2', ['ngResource']).
factory('SurfaceService', function($resource){
return $resource('surfaces/test.json', {}, {
query: {method:'GET', params:{surfaceId:'surfaces'}, isArray:true}
});
});

/* Ca fonctionne pas ... grrrr */
angular.module('mowerscliServices', ['ngResource']).
    factory('SurfaceService', function($resource){
    	return $resource('http://localhost:port/mowers/rest/surface/:surfaceId', {port:':8080'}, {
    		query: {method:'GET', params:{surfaceId:'surfaces'}, isArray:true}
  });
});

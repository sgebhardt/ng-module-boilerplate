'use strict';

/* Blog Module */

angular.module('MyApp.blog', [])
	.config(['$routeProvider', function config( $routeProvider ) {
	  $routeProvider.when('/blog', {
		controller: 'BlogController',
		templateUrl: 'partial/blog.html'
	  });
	}]);
	
	
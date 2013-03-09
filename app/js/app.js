'use strict';

/* App Module */
		
angular.module('MyApp', ['MyApp.home', 'MyApp.blog'])
	.config( function myAppConfig ( $routeProvider ) {
		$routeProvider.otherwise({ redirectTo: '/home' });
	})
		
	.controller('AppController', [ '$scope', function AppController( $scope ) {
		$scope.Hello = "Hello, World!";
	}]);
	
	
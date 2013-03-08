'use strict';

/* App Module */
		
angular.module('MyApp', ['MyApp.home', 'MyApp.blog'])
	.config( function myAppConfig ( $routeProvider ) {
		$routeProvider.otherwise({ redirectTo: '/home' });
	})
		
	.controller('AppController', [ '$scope', '$location', function AppCtrl ( $scope, $location ) {
		$scope.Hello = "Hello, World!";
	}]);
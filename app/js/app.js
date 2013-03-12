
/* App Module */
		
angular.module('MyApp', ['MyApp.home', 'MyApp.blog'])
	.config( function myAppConfig ( $routeProvider ) {
		'use strict';
		$routeProvider.otherwise({ redirectTo: '/home' });
	});
	
	
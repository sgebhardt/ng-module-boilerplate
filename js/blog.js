'use strict';

/* Blog Module */

angular.module('MyApp.blog', [])
.config(['$routeProvider', function config( $routeProvider ) {
  $routeProvider.when('/blog', {
    controller: 'BlogController',
    template: '<p>This is my Blog</p>'
  });
}])
	
.controller('BlogController', [ '$scope', function HomeController( $scope ) {
  
}])
'use strict';

/* Blog Entries Module */

angular.module('MyApp.blog.entries', [])
	
.controller('BlogEntriesController', [ '$scope', function BlogEntriesController( $scope ) {
	$scope.Entries = [	
		{ text: "this is the first blog entry" },
		{ text: "this is the second blog entry" }
	];
}]);
'use strict';

/* Blog Entries Module */

angular.module('MyApp.blog.entries', [])
	
.controller('BlogEntriesController', [ '$scope', function BlogEntriesController( $scope ) {
	$scope.Entries = [	
		{ text: "this is the first blog entry", 
		  comments: [
			{text: "1. Comment"}, 
			{text: "2. Comment"}
		  ] 
	    },
		{ text: "this is the second blog entry" , 
		  comments: [
			{text: "3. Comment"}, 
			{text: "4. Comment"}
		  ] 
		}
	];
}]);
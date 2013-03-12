/* jasmine specs for controllers go here */
describe('MyApp controllers', function() {

  	describe('AppController', function(){
  		var scope, ctrl, $httpBackend;
  		
  		beforeEach(module('MyApp'));
  	
	  	beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
	      $httpBackend = _$httpBackend_;
	 
	      scope = $rootScope.$new();
	      ctrl = $controller('AppController', {$scope: scope});
	    }));
	
	    it('should create "Hello" model with "Hello, World!"', function () { 
	    	expect(scope.Hello).toBe("Hello, World!");
    	});
 	});
 	
 	describe('BlogController', function(){
  		var scope, ctrl, $httpBackend;
  	
  		beforeEach(module('MyApp.blog'));
  	
	  	beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
	      $httpBackend = _$httpBackend_;
	 
	      scope = $rootScope.$new();
	      ctrl = $controller('BlogController', {$scope: scope});
	    }));
	
	    it('should create "Hello" model with "This is my Blog"', function () { 
	    	expect(scope.Title).toBe("This is my Blog");
    	});
 	}); 	
});

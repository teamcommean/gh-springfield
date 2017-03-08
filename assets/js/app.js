//var app = angular.module('gracie',[]);

// one file
// NOTE: the immediately invoked function expression 
// is used to exemplify different files and is not required
(function(){
   // declaring the module in one file / anonymous function
   // (only pass a second parameter THIS ONE TIME as a redecleration creates bugs
   // which are very hard to dedect)
   angular.module('gracie',['ngRoute','ngAnimate', 'ui.bootstrap'])
    .config(function($routeProvider){
    $routeProvider
    	.when('/instructors',
    		{
    			templateUrl: 'templates/pages/instructors/index.html',
				  controller: 'InstructorsController',
				  controllerAs: 'instructorsCtrl'
    		})
    	.when('/classes',
    		{
    			templateUrl: 'templates/pages/classes/index.html',
  				controller: 'ClassesController',
  				controllerAs: 'classesCtrl'
			 })
      .when('/contact',
        {
          templateUrl: 'templates/pages/contact/index.html',
          controller: 'ContactController',
          controllerAs: 'contactCtrl'
        })
    	.when('/',
    		{	
    			templateUrl: 'templates/pages/main.html',
  				controller: 'MainController',
  				controllerAs: 'mainCtrl'
		    })
    	.otherwise({redirectTo: '/'})
  });             
})();
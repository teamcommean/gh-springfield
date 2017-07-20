/*app.controller('MainController', function(){
	this.message = 'wired up';
});
*/
// another file and/or another anonymous function
(function(){   
 // using the function form of use-strict...
 "use strict";
  // accessing the module in another. 
  // this can be done by calling angular.module without the []-brackets
  angular.module('gracie')
    .controller('MainController',['$scope', function($scope){
    	this.title = 'Gracie Humaita';
		this.message = 'all wired up';
		this.slideInterval = 5000;
		this.active = 'home';
		this.features = [	
							{
						    	iconClass: 'ion-beaker',
							    title: 'beaker',
							    text: 'asd al a  fkdk  akj fkdjfla ld la dfl alfd'
						  	}, 
						  	{
						    	iconClass: 'ion-beaker',
							    title: 'beaker',
							    text: 'asd al a  fkdk  akj fkdjfla ld la dfl alfd'
						  	}, 
						  	{
						    	iconClass: 'ion-social-twitter',
							    title: 'twitter',
							    text: 'asd al a  fkdk  akj fkdjfla ld la dfl alfd'
						  	}, 
						  	{
						    	iconClass: 'ion-thumbsup',
							    title: 'thumbsup',
							    text: 'asd al a  fkdk  akj fkdjfla ld la dfl alfd'
						  	}
					  	];


		this.slides = [	
							{
						    	image: 'assets/img/img-1.jpg',
							    title: 'slide 1',
							    text: 'asd al a  fkdk  akj fkdjfla ld la dfl alfd'
						  	}, 
						  	{
						    	image: 'assets/img/img-2.jpg',
							    title: 'slide 2',
							    text: 'asd al a  fkdk  akj fkdjfla ld la dfl alfd'
						  	}, 
						  	{
						    	image: 'assets/img/img-3.jpg',
							    title: 'slide 3',
							    text: 'asd al a  fkdk  akj fkdjfla ld la dfl alfd'
						  	}, 
						  	{
						    	image: 'assets/img/img-4.jpg',
							    title: 'slide 4',
							    text: 'asd al a  fkdk  akj fkdjfla ld la dfl alfd'
						  	}
					  	];

	  	$scope.$on('$viewContentLoaded', function(){
	  		console.log('loaded');
		    $('.main-flex-slider').flexslider({
	      		slideshowSpeed: 5000,
		      	directionNav: false,
		      	animation: "fade"
		  	});
		 });

	}]);


  	// appending another service/controller/filter etc to the same module-call inside the same file
    //.service('myservice', ['dep2', function(dep2){}]);

})();
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
    .controller('InstructorsController',['$scope', function($scope){
		this.message = 'all wired up';
		this.active = 'instructors';
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
					  	]

	}]);

})();
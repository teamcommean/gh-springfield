(function(){   
	angular.module('gracie')
		.directive('feature', function()
		{
			 return {
		     restrict: 'E',
		     scope: {
		       info: '='
		     },
		     templateUrl: 'assets/js/directives/feature.html'
		   };
		});           
})();
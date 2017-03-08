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
    .controller('ContactController',['$scope','$http', function($scope,$http){

		this.pageTitle = 'all wired up';
		this.active = 'contact';
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

		
		this.sendMail = function(a){
		    console.log(a);

		    var mailJSON ={
		        "key": "xxxxxxxxxxxxxxxxxxxxxxx",
		        "message": {
		          "html": ""+a.mailBody,
		          "text": ""+a.mailBody,
		          "subject": ""+a.subject,
		          "from_email": "sender@sending.domain.com",
		          "from_name": "Support",
		          "to": [
		            {
		              "email": ""+a.toEmail,
		              "name": "John Doe",
		              "type": "to"
		            }
		          ],
		          "important": false,
		          "track_opens": null,
		          "track_clicks": null,
		          "auto_text": null,
		          "auto_html": null,
		          "inline_css": null,
		          "url_strip_qs": null,
		          "preserve_recipients": null,
		          "view_content_link": null,
		          "tracking_domain": null,
		          "signing_domain": null,
		          "return_path_domain": null
		        },
		        "async": false,
		        "ip_pool": "Main Pool"
		    };
	
    		var apiURL = "https://www.acadnav.com/services/service.php";
    
		    $http.post(apiURL, mailJSON).
		      success(function(data, status, headers, config) {
		        alert('successful email send.');
		        $scope.form={};
		        //console.log('successful email send.');
		        //console.log('status: ' + status);
		        //console.log('data: ' + data);
		        //console.log('headers: ' + headers);
		        //console.log('config: ' + config);
		      }).error(function(data, status, headers, config) {
		        //console.log('error sending email.');
		        //console.log('status: ' + status);
		      });		
		};

	}]);

})();
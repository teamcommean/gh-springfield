<?php

	require '../vendor/autoload.php';
	use Mailgun\Mailgun;

	$mg = new Mailgun("key-dff0db659e51e37289273b4f33b88c41");
	$domain = "www.acadnav.com";

	try{
		# First, instantiate the SDK with your API credentials and define your domain. 

		# Now, compose and send your message.
		$mg->sendMessage($domain, array('from'    => 'noreplay@acadnav.com', 
		                                'to'      => 'web-AtQocs@mail-tester.com', 
		                                'subject' => 'The PHP SDK is awesome!', 
		                                'text'    => 'It is so simple to send a message.'));


	} catch (Exception $e) {
	    echo 'Caught exception: ',  $e->getMessage(), "\n";
	}


	/*
	$result = $mg->get("$domain/log", array('limit' => 25, 'skip'  => 0));

	$httpResponseCode = $result->http_response_code;
	$httpResponseBody = $result->http_response_body;

	# Iterate through the results and echo the message IDs.
	$logItems = $result->http_response_body->items;
	foreach($logItems as $logItem){
	    echo $logItem->message_id . "\n";
	}

	*/
?>                                
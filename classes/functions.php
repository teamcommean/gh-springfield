<?php
	date_default_timezone_set("America/Chicago");
	
	session_start();
	
	function ReturnJsonTable($json) {
		header('HTTP/1.1 200 OK', true, 200);
		header('Content-Type: application/json');
		print("{\"aaData\":" . json_encode($json) . "}");
	}
	
	function GetJsonMessage($msg) {
		header('HTTP/1.1 200 OK', true, 200);
		header('Content-Type: application/json');
		$arr = array("SvcMessage" => array("MessageText" => $msg));
		print json_encode($arr);
	}
	
	function ReturnJsonSuccess($json){
		//http_response_code(200);
		header('HTTP/1.1 200 OK', true, 200);
		header('Content-Type: application/json');
		print(json_encode($json));
	}
	
	function ReturnJsonError($err){
		//http_response_code(400);
		header('HTTP/1.1 400 Bad Request', true, 400);
		header('Content-Type: application/json');
		print(json_encode($err));
	}
	
    function arrayToDataTable(array $cols, array $rows) {
        
	    if (!empty($rows) && !empty($cols)) {
            
		    if (count($cols) !== count($rows[0])) {
			    // Values specified in the first row of $rows don't add up to the ones in $cols
			    throw new Exception('Number of values in rows must match number of columns');
		    }

		    $return = array();

		    // Process columns
		    foreach ($cols as $column) {
			    // Check if the column has a type
			    if (!array_key_exists('type', $column) && array_key_exists(0, $column)) {
				    // Try to mangle us a type
				    switch ($column[0]) {
					    case 'boolean':
					    case 'number':
					    case 'string':
					    case 'date':
					    case 'datetime':
					    case 'timeofday':
						    $column['type'] = $column[0];
					    break;
					    default:
						    $column['type'] = 'string';
					    break;
				    }
				    unset($column[0]);
				    // Assume the second entry is a label
				    if (array_key_exists(1, $column)) {
					    $column['label'] = $column[1];
					    unset($column[1]);
				    }
			    }
			    // @TODO: Add key => val validation here?
			    $return['cols'][] = $column;
		    }

            //print_r($return['cols']);
            
		    // Process rows
		    foreach ($rows as $row) {
			    // <3 Nested Arrays
			    $tmp = array('c' => array());
			    foreach ($row as $key => $cell) {
				    // Is our cell a plain or an array with other stuff?
				    if (!is_array($cell)) {
					    $cell = array('v' => $cell);
				    }
				    // @TODO: Add key => val validation here?
				    $tmp['c'][] = $cell;
			    }
			    $return['rows'][] = $tmp;
		    }
            
            //print_r($return);
            
		    print(json_encode($return));
	    }
	    else {
		    // We can't work without something to work on
		    throw new Exception('Unable to process empty arrays');
	    }
    }
    
	function logout(){
		unset($_SESSION[con_displayname]);
		unset($_SESSION[con_userid]);
		unset($_SESSION[con_timeout]);
	}
	

	function getSmtpTransport(){
        
        $transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, 'ssl')
			->setUsername('graciehumaitaspringfieldil@gmail.com')
			->setPassword('need to get key') //flav.flavor password
		;
        
        return $transport;
    }
    
	function sendEmail($transport, $recipients, $from,$to, $subject, $message){
        try{
            
            if(con_TestMode){
                $recipients = 'graciehumaitaspringfieldil@gmail.com';
                $from = con_replyTo;
            }
            
		    // Create the Mailer using your created Transport
		    $mailer = Swift_Mailer::newInstance($transport);

		    $message = Swift_Message::newInstance()
		      ->setSubject($subject)
		      ->setFrom(array($from))
		      ->setTo(array($recipients))
		      ->setReplyTo(con_replyTo)
		      ->addPart($message, 'text/html') 
		    ;
	        
		    // Send the message
		    $numSent = $mailer->send($message);
		    return $numSent;
            
        }catch(Exception $e){
            throw new Exception($e->getMessage());
        }
	}
	
?>
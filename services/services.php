<?php

	if(isset($_POST['fn'])){
		switch ($_POST['fn']){
			case 'SendForm':
				$message = $_POST['message'];
                $from = $_POST['from'];
                
                
				ReturnJsonSuccess(sendEmail($from, $message));
                
				break;
			default:
				ReturnJsonError('No function defined.');
				break;
		}
	}

?>
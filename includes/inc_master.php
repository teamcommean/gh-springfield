<?php

    require_once('inc_constants.php');
	require_once(conClassesDir . DIRECTORY_SEPARATOR . 'PDODb.php');
	require_once(conClassesDir . DIRECTORY_SEPARATOR . 'functions.php');
	require conVendorDir . DIRECTORY_SEPARATOR . 'autoload.php';

	foreach (glob(conObjDir . "/*.php") as $filename) 
	{ 
		require_once $filename; 
	} 


?>
<?php 
	$data =  $_POST;

	$uploaddir = '../uploads/';
	$uploadfile = $uploaddir . basename($_FILES['uploadBtn']['name']);
	
       
       
	
	if (move_uploaded_file($_FILES['uploadBtn']['tmp_name'], $uploadfile)) {
	   $data = array('message' => 'File is valid, and was successfully uploaded.');
	   
	} else {
	   $data = array('message' => 'Error');
	}

	//$file = 
	//echo $data['email'] .' - '. $_FILES['uploadBtn']['name'];;
	echo json_encode($data);
?>
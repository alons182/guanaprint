<?php 
	$data =  $_POST;

	$uploaddir = '../uploads/';
	$uploadfile = $uploaddir . basename($_FILES['uploadBtn']['name']);
	
       
   if ($_FILES['uploadBtn']['size'] <= 209715200) { 
   	
    	if (move_uploaded_file($_FILES['uploadBtn']['tmp_name'], $uploadfile)) {
	   		$data = array('message' => 'Archivo subido Exitosamente.');
	   
		} else {
		   $data = array('message' => 'Error al subir el archivo. Verifique que no sobrepase el limite de 64mb');
		}
    }else
   		 $data = array('message' => 'Error Archivo Muy grande');
	
	

	//$file = 
	//echo $data['email'] .' - '. $_FILES['uploadBtn']['name'];;
   		
	echo json_encode($data);
?>
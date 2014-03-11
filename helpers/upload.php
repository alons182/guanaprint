<?php 
	$data =  $_POST;

	$uploaddir = '../uploads/';
	$uploadfile = $uploaddir . basename($_FILES['uploadBtn']['name']);
	//'. $_SERVER['REQUEST_URI'] .'/uploads/'.basename($_FILES['uploadBtn']['name'].
       
   if ($_FILES['uploadBtn']['size'] <= 209715200) { 
   	
    	if (move_uploaded_file($_FILES['uploadBtn']['tmp_name'], $uploadfile)) {
	   		

	   		$result = 'ok';
			if(trim($_POST['nombre']) === '') {
				$result = 'Error - falta el campo nombre';
			}else{
				$name = trim($_POST['nombre']);
			}
			if(trim($_POST['email']) === '') {
				$result = 'Error - falta el campo email';
			}else{
				$email = trim($_POST['email']);
			}
			if(trim($_POST['descripcion']) === '') {
				$result = 'Error - falta el campo comentarios';
			}else{
				$comments = trim($_POST['descripcion']);
			}

			$link = '<a href="#" title="Imagen">link</a>';

			if($result=='ok'){
				$emailTo = 'alonso@avotz.com';
			    $subject = 'Desde el formulario de Archivo del Sitio Guanaprint - Submitted message from '.$name;
			    $body = "Nombre: $name \n\nEmail: $email \n\nDescripcion: $comments \n\nLink del Archivo: $link";
			    $headers = 'From: ' .' <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;

			    mail($emailTo, $subject, $body, $headers);
			        
			    
			    
			}

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
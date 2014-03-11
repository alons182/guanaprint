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

			$link = '<a href="'.basename($_FILES['uploadBtn']['name'].'" title="Imagen">link</a>';

			if($result=='ok'){
				$emailTo = 'alonso@avotz.com';
			    $subject = 'Desde el formulario de Archivo del Sitio Guanaprint - Submitted message from '.$name;
			    
			    $body = '<html><body>';
				$body .= '<img src="http://css-tricks.com/examples/WebsiteChangeRequestForm/images/wcrf-header.png" alt="Website Change Request" />';
				$body .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
				$body .= "<tr style='background: #eee;'><td><strong>Nombre:</strong> </td><td>" . strip_tags($name) . "</td></tr>";
				$body .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($email) . "</td></tr>";
				$body .= "<tr><td><strong>Descripción:</strong> </td><td>" . strip_tags($comments) . "</td></tr>";
				$body .= "<tr><td><strong>URL del Archivo:</strong> </td><td>" . strip_tags($link) . "</td></tr>";
				$body .= "</table>";
				$body .= "</body></html>";
			    $headers = 'From: ' .' <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email . "\r\nCC:".$email."\r\n". "MIME-Version: 1.0\r\n"."Content-Type: text/html; charset=ISO-8859-1\r\n";


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

define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        validate            = require('validate'),
        utils				= require('utils');
       

	//INPUT FILE 
	document.getElementById("uploadBtn").onchange = function () {

    	document.getElementById("uploadFile").value = this.value;
     

	};

$("#uploadform").validate({

	 	messages:
	 	{
	 		nombre:{
	 			required:'Nombre requerido'
	 		},
	 		email:{
	 			required:'Email requerido',
	 			invalid:'Email valido'
	 		},
	 		uploadBtn:{
	 			required:'*'
	 		},
	 		descripcion:{
	 			required:'Comentario requerido'
	 		}
	 		
	 		
	 	},
	 	rules: {
	 		
		    descripcion:{
		    	required: true
		    }

		  },

		  submitHandler: function(form) {
		  	
		 	var url = "/guanaprint/helpers/upload.php",
				progress = $('.progress'),
				bar = $('.bar'),
				percent = $('.percent'),
				status = $('#status'),
				mensaje = $('.mensaje');
		   
		    $('#uploadform').ajaxSubmit({

		    	beforeSend: function() {
		    		progress.show();
			        status.empty();
			        var percentVal = '0%';
			        bar.width(percentVal)
			        percent.html(percentVal);
			    },
			    uploadProgress: function(event, position, total, percentComplete) {
			        var percentVal = percentComplete + '%';
			        bar.width(percentVal)
			        percent.html(percentVal);
			    },
		         success: function(data) {
			        var percentVal = '100%';
			        bar.width(percentVal)
			        percent.html(percentVal);

			        // mensaje.html('<span class="ok">'+ data.message +'</span>');	
			        $('<span></span>',{
			        	text: data.message,
			        	class: 'ok'
			        }).appendTo(mensaje);	
			        

				    setTimeout(function(){  
							        mensaje.fadeOut(200,function() {
							        	progress.hide();
									    mensaje.find('span').remove();
									    mensaje.show();
									    
									  });}, 3000);  	 
			    },
		        error: function(data) {
			        var percentVal = '0%';
			        bar.width(percentVal)
			        percent.html(percentVal);

			        $('<span></span>',{
			        	text: 'Error al subir el archivo. Verifique que no sobrepase el limite de 64mb',
			        	class: 'error'
			        }).appendTo(mensaje);	

			      
			        //mensaje.html('<span class="error">Error al subir el archivo. Verifique que no sobrepase el limite de 64mb</span>');	

		    		setTimeout(function(){  
					        mensaje.fadeOut(200,function() {

							    mensaje.find('span').remove();
							    mensaje.show();
							    
							  });}, 3000);  	 
			    },
		        
		        url:       url,        // override for form's 'action' attribute 
		        type:      'post',        // 'get' or 'post', override for form's 'method' attribute 
		        dataType:  'json',       // 'xml', 'script', or 'json' (expected server response type) 
		        clearForm: true        // clear all form fields after successful submit 
		        //resetForm: true        // reset the form after successful submit 

		    }); 
 		

		 }
	


	});





  });





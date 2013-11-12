$(function() {
	

	var $menu = $('#menu');

	//	Toggle menu 
	$('#open-icon-menu a').click(function( e ) {
		e.stopImmediatePropagation();
		e.preventDefault();
		$menu.trigger( $menu.hasClass( 'mm-opened' ) ? 'close.mm' : 'open.mm' );					
	});

	//	Create the menu
	$menu.mmenu({
		onClick: {
			preventDefault	: true,
			setSelected		: false
		}
	});

	//	Click an anchor, scroll to section
	$menu
		.find( 'a' )
		.on( 'click',
			function()
			{
				var href = $(this).attr( 'href' );
				if ( $menu.hasClass( 'mm-opened' ) )
				{
					$menu
						.off( 'closed.mm' )
						.one( 'closed.mm',
							function()
							{
								setTimeout(
									function()
									{
										$('html, body').animate({
											scrollTop: $( href ).offset().top
										});
									}, 10
								);
							}
						);
				}
				else
				{
					$('html, body').animate({
						scrollTop: $( href ).offset().top
					});
				}
			}
		);


	//INPUT FILE 
	document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value;

     

	};
 

	$("#uploadform").validate({

	 	rules: {
	 		
		    descripcion:{
		    	required: true
		    }

		  },

		  submitHandler: function(form) {
		  	
		 	var url = "/guanaprint/helpers/upload.php";
			
			
 			var bar = $('.bar');
			var percent = $('.percent');
			var status = $('#status');
		   
		    $('#uploadform').ajaxSubmit({

		    	beforeSend: function() {
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

			         $('.mensaje').html('<span class="ok">'+ data.message +'</span>');	

				    setTimeout(function(){  
							        $('.mensaje').fadeOut(200,function() {

									    $('.mensaje span').remove();
									    $('.mensaje').show();
									    
									  });}, 2000);  	 
			    },
		        error: function(data) {
			        var percentVal = '0%';
			        bar.width(percentVal)
			        percent.html(percentVal);

			         $('.mensaje').html('<span class="ok">Error subiendo el archivo</span>');	

		    		setTimeout(function(){  
					        $('.mensaje').fadeOut(200,function() {

							    $('.mensaje span').remove();
							    $('.mensaje').show();
							    
							  });}, 2000);  	 
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
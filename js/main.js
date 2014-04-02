
require.config({

    baseUrl: './js',

    paths: {
        jquery: 'vendor/jquery-1.10.1.min',
        validate:'vendor/jquery.validate.min',
        form:'vendor/jquery.form.min',
        mmenu : 'vendor/jquery.mmenu.min.all',
        raphael: 'vendor/raphael-min',
        cycle2: 'vendor/jquery.cycle2.min'
            

       
    },

  
    shim: {
        
        'validate':
        {
            deps: ['jquery'],
            exports: 'validate'
        },
        'form':
        {
            deps: ['jquery'],
            exports: 'form'
        },
        'mmenu': {
            deps: ['jquery'],
            exports: 'mmenu'
        },
        'raphael': {
            deps: ['jquery'],
            exports: 'raphael'
        },
        'cycle2': {
            deps: ['jquery'],
            exports: 'cycle2'
        }
        
    }
});

require(['jquery', 'cycle2','mmenu','form','./logo','./formvalidation'], function ($) {
	  
	
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
 

	



});


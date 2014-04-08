
require.config({

    baseUrl: './js',

    paths: {
        jquery: 'vendor/jquery-1.10.1.min',
        validate:'vendor/jquery.validate.min',
        form:'vendor/jquery.form.min',
        mmenu : 'vendor/jquery.mmenu.min.all',
        raphael: 'vendor/raphael-min',
        cycle2: 'vendor/jquery.cycle2.min',
        inview:'vendor/jquery.inview.min',
        
            

       
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
        },
        'inview':
        {
            deps: ['jquery'],
            exports: 'inview'
        }
        
        
    }
});

require(['jquery','mmenu','./logo','cycle2','inview','form','./formvalidation'], function ($) {
	  
	
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



	$('#contact').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		  if (isInView) {
		    var mapIframe = $('#contact').find('div.map').children('iframe');
		    var href = mapIframe.data('src');

		    if(mapIframe.attr('src') === '')
		    	mapIframe.attr('src',href);
		 }
	});





		



});


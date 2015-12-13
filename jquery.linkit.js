/*
 * name: linkit
 * author: Nigel Thornton Clark
 * version: 0.1.0
 * license: MIT
 */
(function( $ ) {
    $.fn.linkit = function ( options ) {
	//alert( this.html() );
	var settings = $.extend( {
	    href: null,
	    text: null,
	    target: '_self'
	}, options );

	if ( settings.href == null ) {
	    console.log( 'you need an href for linkit to work' );
	    return this;
	}

	return this.each( function () {
	    var object = $(this);
	    if ( settings.text == null ) {
		settings.text = object.text();
	    }
	    object.wrap( '<a target="' + settings.target + '" href="' + settings.href + '"></a>' )
		.text( settings.text );
	} );

    };
})( jQuery );
    

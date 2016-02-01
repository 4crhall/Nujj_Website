$( document ).ready( function( $ ) {
	var body = document.body,
        doc = document.documentElement;
    $(window).scroll(function () {


        	body.style.backgroundPosition = "0px " + (0-(Math.max(doc.scrollTop, body.scrollTop) / 50) ) + "px";

    });
});
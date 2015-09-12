$( document ).ready( function( $ ) {
	var body = document.body,
        doc = document.documentElement;
    $(window).scroll(function () {

    var backgroundPos = body.style.backgroundPosition.split(" ");
	//now contains an array like ["0%", "50px"]
	var xPos = backgroundPos[0],
    yPos = backgroundPos[1];
    console.log(backgroundPos);
    var yInt = parseInt(yPos);

    	if(typeof yInt !== "undefined") {
        	body.style.backgroundPosition = "0px " + (0-(Math.max(doc.scrollTop, body.scrollTop) / 50) ) + "px";
        }

    });
});
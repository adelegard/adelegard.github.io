$(function() {
	waitForHiddenIcon(function() {
	    // Will be called as soon as ALL specified fonts are available
	    $(".icon").addClass("loaded");
	});

	function waitForHiddenIcon(callback) {

	    var interval;
	    function checkFont() {
	        if(interval) {
	            clearInterval(interval);
	        }
	        if($(".off-screen").width() > 0) {
	            callback();
	            return true;
	        }
	    };

	    if(!checkFont()) {
	        interval = setInterval(checkFont, 50);
	    }
	};
});
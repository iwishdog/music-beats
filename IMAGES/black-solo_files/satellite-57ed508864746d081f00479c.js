_satellite.pushAsyncScript(function(event, target, $variables){
  jQuery(document).ready(function() {
	(function($) {
		var startHoverTime = 0;
		var endHoverTime = 0;
		var minHoverTime = 2500;
		var maxHoverTime = 5000;
		var currentSection = '';
		var diagnostic = false;

		$(".main-navigation .navigation-item").on('mouseenter', function() {
		    currentSection = $(this).attr('data-navlink');
		});

		$(".main-navigation .navigation-item").on('mouseenter', function() {
		    currentSection = $(this).attr('data-navlink');
		});

		$(".main-navigation .navigation-item").on('mouseleave', function() {
		    currentSection = "";
		});

		$(".product-dropdown .product-display, .product-dropdown .explore-image .imgcontainer").on('click', function(e){
		    if (currentSection !== "Explore") {
		        var attr = $(this).attr('data-productid');
		        if (typeof attr !== typeof undefined && attr !== false) {
			       	var newEventArgs = {};
			       	s.prop49 = "Explore Click";
					newEventArgs.events = "event52";
					newEventArgs.linkTrackEvents = "event52";
					newEventArgs.linkTrackVars 	= "events,eVar49";
					s.tl(true,'o','Explore Item Click',newEventArgs);
		       }
		    } else if (currentSection === "Explore") {
		    	if(diagnostic){console.log("caught click in Explore cell");}
		  	}
		});

		$(".product-dropdown .product-display, .product-dropdown .explore-image .imgcontainer").on('mouseenter', function(e){
		  startHoverTime = Date.now();
		  if(diagnostic){console.log("Entered cell");}
		});

		$(".product-dropdown .product-display, .product-dropdown .explore-image .imgcontainer").on('mouseleave', function(e){
		    endHoverTime = Date.now();
		    timeInSeconds = (endHoverTime-startHoverTime) / 1000;
		    if(diagnostic){console.log("Exited cell, time spent: " + timeInSeconds + "s");}
		    if (timeInSeconds >= minHoverTime && timeInSeconds <= maxHoverTime){
		    	var newEventArgs = {};
		    	s.prop49 = "Explore Hover";
				newEventArgs.events = "event52";
				newEventArgs.linkTrackEvents = "event52";
				newEventArgs.linkTrackVars 	= "events,eVar49";
				s.tl(true,'o','Explore Item Hover',newEventArgs);
		    }
		});
	})(jQuery);
});

});

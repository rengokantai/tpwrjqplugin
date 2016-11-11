(function($){
	$.fn.accordion = function(){
		this.find("h3").addClass("accordion-header")
		.next()
		.addClass("accordion-panel")
		.slideUp();

		this.on("click",".accordion-header",function(e){
			var next = $(e.target).next();
			next.slideToggle();
		})
	};
})(jQuery)
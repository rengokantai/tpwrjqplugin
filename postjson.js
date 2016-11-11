(function($){
	if(!$.ke){
		//$.ke={}
		$.extend({ke:{

		}})
	}

	$.extend($.ke,{
	postJSON = function(url,data){
		if(typeof data!="string"){
			data = JSON.stringify(data);
		}

		return $.ajax(url,{
			type:"POST",
			data:data,
			contentType:"application/json"
		})
	}
});
})(jQuery)
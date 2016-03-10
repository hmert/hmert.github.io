$(".panel-toggle").on("click", function(){
	$(".panel-toggle").removeClass("active");
	$(this).addClass("active");
	
	var isAnimating = false;
	
	if( !isAnimating ){
		isAnimating = true;
		
		$(".panel").find(".panel-content").css("z-index",0);
		$(".panel").removeClass("active");

		var that = $(this);

		$(this).siblings().css("z-index",1);

		setTimeout(function(){
			that.parent().toggleClass("active").find(".panel-content").on("transitionend", function(){
				isAnimating = false;
			});	;
			
		},10);
	} else {
		return;
	}
});
$(document).ready(function(){

	//scroll drag (left/right)
	$(window).scroll(function(){
		$('#cmd_footer').css('left', -$(this).scrollLeft() + "px");
	});

});

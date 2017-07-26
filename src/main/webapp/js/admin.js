var _this;
$(document).ready(function(){
	
	$("#cmenu").click(function(){
		$("#ifr_content").attr("src","cmenu");
	});
	
	$("#cuser").click(function(){
		$("#ifr_content").attr("src","cuser");
	});
	$("#cmessage").click(function(){
		$("#ifr_content").attr("src","cmessage");
	});
	$("#cfeedback").click(function(){
		$("#ifr_content").attr("src","cfeedback");
	});
})
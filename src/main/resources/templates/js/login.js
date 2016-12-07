var _this;
$(document).ready(function(){

 
    $("#btfacebooklog").click( "click", function() {
    	
    	(function(d, s, id) {
    	  var js, fjs = d.getElementsByTagName(s)[0];
    	  if (d.getElementById(id)) return;
    	  js = d.createElement(s); js.id = id;
    	  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7&appId=1585759011719480";
    	  fjs.parentNode.insertBefore(js, fjs);
    	}(document, 'script', 'facebook-jssdk'));
    });
    
    $("#btlog").click( "click", function() {
	 
   });
	
	   
})

function login(){
	var csrfHeader = $("meta[name='_csrf_header']").attr("content");
	var csrfToken = $("meta[name='_csrf']").attr("content")
	
	var input={};
	
	input["id"]=$("#fid").val();
	input["username"]=$("#username").val()
	input["password"]=$("#password").val()
	  $.ajax({
	    	type   : 'POST',
	    	url    : "/login",
	    	cache: false,
	        async: false,
	        
	        beforeSend: function(xhr) {
	            xhr.setRequestHeader(csrfHeader, csrfToken);
	        },
	        data:input,
	    	success :function(result){
	    	   alert(result);
	    		
	    	 }
		   })
}
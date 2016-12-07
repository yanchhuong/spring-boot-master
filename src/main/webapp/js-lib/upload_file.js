var _this;
$(document).ready(function(){

    
    $("#upload_submit").click( "click", function() {
	  alert();
	  ft_UPLOAD_FILE();
   });
	 
})

function ft_UPLOAD_FILE(e){
	var csrfHeader = $("meta[name='_csrf_header']").attr("content");
	var csrfToken = $("meta[name='_csrf']").attr("content")
/*	
    e.preventDefault();
    var formData = new FormData($(this).parents('form')[0]);
    console.log(formData);
    alert(formData);
    $.ajax({
        url: '/file',
        type: 'POST',
        xhr: function() {
            var myXhr = $.ajaxSettings.xhr();
            return myXhr;
        },
        success: function (data) {
            alert("Data Uploaded: "+data);
        },
        data: formData,
        cache: false,
        contentType: false,
        processData: false
    });
    return false;
    */
	/*  $.ajax({
	    	type   : 'POST',
	    	url    : "/file",
	    	cache: false,
	        async: false,
	        beforeSend: function(xhr) {
	            xhr.setRequestHeader(csrfHeader, csrfToken);
	        },
	        
	        data:input,
	    	success :function(result){
	    	   alert(result);
	    	 }
		   })*/
}
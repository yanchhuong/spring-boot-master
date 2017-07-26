var _dat = {};
var popup_uploadimg_002 ={};
$(document).ready(function(){
	init(input);
	var $form = $("#imageUploadForm"), 
	    $file = $("#file"), 
	    $uploadedImg = $("#uploadedImg") ;
	    $helpText = $("#helpText")
	;    
	$uploadedImg.on('webkitAnimationEnd MSAnimationEnd oAnimationEnd animationend', function(){
	      $form.addClass('loaded');
	});
	$helpText.on('webkitAnimationEnd MSAnimationEnd oAnimationEnd animationend', function(){
	      setTimeout(function() {
	        $file.val(''); 
	        $form.removeClass('loading').removeClass('loaded');
	        $form.find('.helpText').removeClass();
	        $form.find("#imgframe").addClass("imgFrame");
	     }, 5000);
	     
	 });
	 $file.on('change', function(){
		//  readURL(this);
		  $form.addClass('loading');
		  uploadFormData();
	 });
	 $uploadedImg.on('webkitAnimationEnd MSAnimationEnd oAnimationEnd animationend', function(){
		  $form.addClass('loaded');
	 });
	 $helpText.on('webkitAnimationEnd MSAnimationEnd oAnimationEnd animationend', function(){
		 setTimeout(function() {
		    $file.val(''); 
		    $form.removeClass('loading').removeClass('loaded');
		    $form.find('.helpText').removeClass();
		    $form.find("#imgframe").addClass("imgFrame");
		  }, 5000);
		 
	  });

	//using FormData() object
	 $(document).on("click", "#tbRemove",function(){
		 var data=$("#randname").val();
		 if(data=='null' || data==null){
			 alert("No file to delete");
			 return;
		 }else{
			  removeFile(data);
			  $("#img").siblings().remove();
			  $("#img").attr("src", "");
			  $("#randname").val("null");
			  $("#filename").remove();
			  $("#helpText").addClass("helpText");
			  $("#imgframe").removeClass(); 
		 }
	 });
	 $(document).on("click", "#tbSave",function(e){
		 SaveFile();
	 });
	
});
function init(input){
	var isHas =  input.randname; 
	if(isHas!= 'null'){
	      $('#helpText').removeClass();
	      $("#imgframe").addClass("imgFrame");
		  $("#img").attr("src", document.location.origin+"/upload_file/files/"+ isHas);
	}else{
		  $('#helpText').addClass('helpText');
	      $("#imgframe").removeClass();
		  $("#img").attr("src", "");
	}
};
function removeFile(dat){
	  var csrfHeader = $("meta[name='_csrf_header']").attr("content");
	  var csrfToken = $("meta[name='_csrf']").attr("content");
	 var input={};
	     input.filename=dat;
	  $.ajax({
		  url: '/upload_file/remove_file_name',
		  cache: false,
          dataType: 'json',
	      contentType: 'application/json',
	      async: true,
		  beforeSend: function(xhr) {
			  xhr.setRequestHeader(csrfHeader, csrfToken);
		  },
		  data:input,
		  success: function(data){
			  var	callbackFn = parent.wehrm.popup.callbackFn["popup_uploadimg_002"];
	  		  if($.isFunction(callbackFn)) {
	  			  callbackFn({IS_TRUE:true});
	  		  }
		  }
	  });
};

function uploadFormData(){
  var csrfHeader = $("meta[name='_csrf_header']").attr("content");
  var csrfToken = $("meta[name='_csrf']").attr("content");
  var oMyForm = new FormData();
   
  oMyForm.append("file", file.files[0]);
  $.ajax({
    url: '/upload_file/uploadimg',
    data: oMyForm,
    dataType: 'text',
    cache  : true,
    processData: false,
    contentType: false,
    type: 'POST',
     beforeSend: function(xhr) {
      xhr.setRequestHeader(csrfHeader, csrfToken);
    },
    success: function(data){
           data=JSON.parse(data);
	        $("#img").attr("src", document.location.origin+"/upload_file/files/"+ data.RANDNAME);
	    	$("#imgframe").append("<input type='hidden' id='orname' value='"+ data.OUT_REC.orname+"'>" ); 
	    	$("#imgframe").append("<input type='hidden' id='regdate' value='"+ data.OUT_REC.regdate+"'>" ); 
	    	$("#imgframe").append("<input type='hidden' id='size' value='"+ data.OUT_REC.size+"'>" ); 
	    	$("#imgframe").append("<input type='hidden' id='type' value='"+ data.OUT_REC.type+"'>" );
	    	$("#randname").val(''+data.OUT_REC.randname +'');

    }
  });
};
function SaveFile(){
	  var csrfHeader = $("meta[name='_csrf_header']").attr("content");
	  var csrfToken = $("meta[name='_csrf']").attr("content");
	  var input = {};
	      input["orname"]   = $("#orname").val();
	      input["randname"] = $("#randname").val();
	      input["regdate"] = $("#regdate").val();
	      input["size"]     = $("#size").val();
	      input["type"]     = $("#type").val();
	      input["pid"]      = $("#pid").val();
	  $.ajax({
		    url    : '/upload_file/save_file_name',
	    	cache  : true,
	        processData: false,
	        contentType: false,
            dataType: 'text',
	    	contentType: 'application/json',
	    	type   : 'POST',
	        beforeSend: function(xhr) {
	            xhr.setRequestHeader(csrfHeader, csrfToken);
	        },
	        data: JSON.stringify(input),
	    	success :function(result){
	    	  var	callbackFn = parent.wehrm.popup.callbackFn["popup_uploadimg_002"];
	  		  if($.isFunction(callbackFn)) {
	  			  callbackFn({IS_TRUE:true});
	  		  }
	  		wehrm.popup.closePopup("popup_uploadimg_002");
	       }
	 })
};

var _this;
$(document).ready(function(){
	// on load 
	ListAll();
		
	 $("#ajaxtest").click(function(){
		    $.ajax({
		    	type   : 'GET',
			    url    : "/customer/welcome",
			    cache  : false,
			    sucess : function(data){
			    }
			})
		    
		    .done(function(html) {
			    $( ".alert" ).append( html );
			});	
	  });
		
	  $("#btAdd").click(function(){
		  $("#popup").show();
	  });
	  $("#add").click(function(){
		  addData();
	  });
	  $("#tbSearch").click(function(){
		  Search($("#keysearch").val());
	  });

	   $("#delete").live( "click", function() {
		   var id= $(this).parents().find("td:first").html();
		   DeletCustomer(id);
	   });
	   
	   $("#update").live( "click", function() {
		   
		   $("#fid").val($(this).parents().find("td:nth-child(1)").html());
		   $("#firstname").val($(this).parents().find("td:nth-child(2)").html());
		   $("#lastname").val($(this).parents().find("td:nth-child(3)").html());
		   
	   });
	   
       $("#btfacebooklog").click( "click", function() {
		   
    	   window.fbAsyncInit = function() {
    		    FB.init({
    		      appId      : 'your-app-id',
    		      xfbml      : true,
    		      version    : 'v2.7'
    		    });
    		    FB.AppEvents.logPageView();
    		  };

    		  (function(d, s, id){
    		     var js, fjs = d.getElementsByTagName(s)[0];
    		     if (d.getElementById(id)) {return;}
    		     js = d.createElement(s); js.id = id;
    		     js.src = "//connect.facebook.net/en_US/sdk.js";
    		     fjs.parentNode.insertBefore(js, fjs);
    		   }(document, 'script', 'facebook-jssdk'));
		   
	   });
	  
	   
	  
	   
})
function ListAll(){
	  $.ajax({
	    	type   : 'GET',
	    	headers:{ Accept: "application/json; charset=utf-8" , "Content-Type": "application/json; charset=utf-8" },	
		    url    : "/customer/load/alls",
		    cache: false,
	        async: false,
		    sucess : function(data){
		    }
	    
		})
	    .done(function(dat) {
	    	var _html=""; 
	    	$.map(dat, function(v, i){
	    		_html +="<tr>";
	    		_html +="<td id='txid'>" + v.id + "</td>";
	    		_html +="<td id='first'>" + v.firstname + "</td>";
	    		_html +="<td id='last'>" + v.lastname + "</td>";
	    		_html +="<td><a href='#' id='update'> Edit </a></td>"  ;
	    		_html +="<td><a href='#' id='delete'> Delete</a></td>" ;
	    		_html +="</tr>";
	    	})
		    $( "#result" ).html(_html);
		});	
}

function addData(){
	var csrfHeader = $("meta[name='_csrf_header']").attr("content");
	var csrfToken = $("meta[name='_csrf']").attr("content");
	
	var input={};
	var url= "";
	if($("#fid").val()!=""){
		url= "/customer/update";
	}else{
		url= "/customer/form";
	}
	input["id"]=$("#fid").val();
	input["firstname"]=$("#firstname").val()
	input["lastname"]=$("#lastname").val()
	  $.ajax({
	    	type   : 'POST',
	    	url    :  url,
	    	cache: false,
	        async: false,
	        
	        beforeSend: function(xhr) {
	            xhr.setRequestHeader(csrfHeader, csrfToken);
	        },
	        data:input,
	    	success :function(result){
	    		alert(result);
	    		ListAll();
	    	 }
		   })
}

function Search(id){
	var input={};
	    input["id"]=id;
	  $.ajax({
	    	type   : 'GET',
	    	headers:{ Accept: "application/json; charset=utf-8" , "Content-Type": "application/json; charset=utf-8" },	
		    url    : "/customer/load/all",
		    data   : input,
		    sucess : function(data){}
	    
		})
	    .done(function(dat) {
	    	var _html=""; 
	    		_html +="<tr>";
	    		_html +="<td>" + dat.id + "</td>";
	    		_html +="<td>" + dat.firstname + "</td>";
	    		_html +="<td>" + dat.lastname + "</td>";
	    		_html +="<td> Edit </td>"  ;
	    		_html +="<td> Delete</td>" ;
	    		_html +="</tr>";
	
		    $( "#result" ).html(_html);
		});	
}


function DeletCustomer(_this){
	var csrfHeader = $("meta[name='_csrf_header']").attr("content");
	var csrfToken = $("meta[name='_csrf']").attr("content");
	
	var input={};
	input["id"]=_this;
	  $.ajax({
	    	type   : 'POST',
	    	url    : "/customer/delete",
	    	cache: false,
	        async: false,
	        
	        beforeSend: function(xhr) {
	            xhr.setRequestHeader(csrfHeader, csrfToken);
	        },
	        data:input,
	    	success :function(result){
	    		alert(result);
	    		ListAll();
	    	 }
		   })
}

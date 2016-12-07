<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<link href="<c:url value="css/app.css" />" rel="stylesheet" type="text/css">
<title>Spring Security Example</title>

<script type="text/javascript">
    function clearThis(target){
        target.value= "";
    }
</script>
 <script src="/js/jquery-1.7.2.min.js"></script> 
 <script src="/js/login.js"></script> 
<script src="http://connect.facebook.net/en_US/all.js"></script>

<meta name="_csrf" content="${_csrf.token}"/>
    <!-- default header name is X-CSRF-TOKEN -->
<meta name="_csrf_header" content="${_csrf.headerName}"/>
</head>

<body>
<script>
 
 // init
  window.fbAsyncInit = function() {
  FB.init({
    appId      : '1585759011719480',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.7' // use graph api version 2.5
  });
  
  FB.getLoginStatus(function(response){
	  console.log('statusChangeCallback');
	    console.log(response);
	    // The response object is returned with a status field that lets the
	    // app know the current login status of the person.
	    // Full docs on the response object can be found in the documentation
	    // for FB.getLoginStatus().
	    if (response.status === 'connected') {
	    	 document.getElementById('status').innerHTML = 'Connected!'
	    } else if (response.status === 'not_authorized') {
	      // The person is logged into Facebook, but not your app.
	      document.getElementById('status').innerHTML = 'Please log ' +
	        'into this app.';
	    } else {
	      // The person is not logged into Facebook, so we're not sure if
	      // they are logged into this app or not.
	      document.getElementById('status').innerHTML = 'Please log ' +
	        'into Facebook.';
	    } 
	    
  });
  
  };
  
  (function(d,s,id){
	  var js,fjs= d.getElementsByTagName(s)[0];
	  if(d.getElementById(id)) {return;}
	  js= d.createElement(s);js.id=id;
	  js.src= "//connect.facebook.net/en_US/sdk.js";
	  fjs.parentNode.insertBefore(js,fjs);
  }(document,'script','facebook-jssdk'));

  // Log in
  function Login(){
	  FB.login(function(response){
		    if (response.status === 'connected') {
		    	 document.getElementById('status').innerHTML = 'Connected!'
		    } else if (response.status === 'not_authorized') {
		      document.getElementById('status').innerHTML = 'Please log ' +
		        'into this app.';
		    } else {
		      document.getElementById('status').innerHTML = 'Please log ' +
		        'into Facebook.';
		    }   
	  },{scope:'publish_actions'});
  }
  
  // get info
  function getInfo(){
	    FB.api('/me','GET' ,{fields:'first_name,last_name,name,id,gender,link,locale,name_format,public_key'},function(response){
	    	document.getElementById('status').innerHTML = response.id +" | " + response.name + " | " + response.gender;
	    	console.log(response);

	    });
  }
  
//post status in facebook
  function post(){
	  FB.api('/me/feed','post',{message: 'my first status...'},function(response){
		  document.getElementById('status').innerHTML = response.id;
	  });
  }
  
  // logout
  function logout(){
	  FB.logout(function(response) {
		  document.getElementById('status').innerHTML = "User name " + response.name +" logout!";
		  
		 console.log(response);
	  });

  }
 
  //share link
  function Sharelinks(){
	  FB.api('/me/feed','post',{link: 'http://google.com'},function(response){
		  document.getElementById('status').innerHTML = response.id;
	  });
  }
  
  //upload photo
  function upload(){
	  FB.api('/me/photos','post',{url: 'C:/Users/Public/Pictures/Sample Pictures/Desert.jpg'},function(response){
		  
		  console.log(response);
		if(!response || response.error){
			document.getElementById('status').innerHTML = "Error!";
		}else{
			document.getElementById('status').innerHTML = response.id;
		}
	  });
  }

</script>


<!-- <fb:login-button scope="public_profile,email" onlogin="checkLoginState();"> </fb:login-button> -->
    
 <button onclick="logout();" id="logout">Log out</button>      
<button onclick="Login();" id="login">Log in</button>   
<button onclick="getInfo();" id="info">Info</button>    
<button onclick="post();" id="post">post</button>    

<button onclick="Sharelinks();" id="post">Share Link</button>  
<button onclick="upload();" id="upload">upload</button>  

<div id="status">

</div>
</body>

</html>

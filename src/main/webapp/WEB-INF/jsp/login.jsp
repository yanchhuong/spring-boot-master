<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>Sign-Up/Login Form</title>
  <link href='http://fonts.googleapis.com/css?family=Titillium+Web:400,300,600' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
	  
   <link rel="stylesheet" type="text/css" href="/css/login.css">

   <meta name="_csrf" content="${_csrf.token}"/>
    <!-- default header name is X-CSRF-TOKEN -->
   <meta name="_csrf_header" content="${_csrf.headerName}"/>

</head>

<body>
  <div class="form">
      
      <ul class="tab-group">
        <li class="tab active"><a href="#signup">Sign Up</a></li>
        <li class="tab"><a href="#login">Log In</a></li>
      </ul>
      
      <div class="tab-content">
        <div id="signup">   
          <h1>Sign Up for Free</h1>
          
          <form  method="post" >
          
          <div class="top-row">
            <div class="field-wrap">
              <label>
                First Name<span class="req">*</span>
              </label>
              <input type="text" required autocomplete="off" id="firstname" />
            </div>
        
            <div class="field-wrap">
              <label>
                Last Name<span class="req">*</span>
              </label>
              <input type="text"required autocomplete="off" id="lastname"/>
            </div>
          </div>

          <div class="field-wrap">
            <label>
              Email Address<span class="req" >*</span>
            </label>
            <input type="email"required autocomplete="off" id="email"/>
          </div>
          
          <div class="field-wrap">
            <label>
              Set A Password<span class="req">*</span>
            </label>
            <input type="password"required autocomplete="off" id="password"/>
          </div>
          
          <button type="submit" class="button button-block" id="btsign_up"/>Get Started</button>
           <input type="hidden" name="${_csrf.parameterName}"
			value="${_csrf.token}" />
          </form>

        </div>
        
        <div id="login">   
          <h1>Welcome Back!</h1>
          
          <form action="/login" method="post">
          
            <div class="field-wrap">
            <label>
              Email Address<span class="req">*</span>
            </label>
            <input type="text"required autocomplete="off"/ name="username">
          </div>
          
          <div class="field-wrap">
            <label>
              Password<span class="req">*</span>
            </label>
            <input type="password"required autocomplete="off" name="password"/>
          </div>
          
          <p class="forgot"><a href="#">Forgot Password?</a></p>
          
          <button class="button button-block"/>Log In</button>
          
		  <input type="hidden" name="${_csrf.parameterName}"
			value="${_csrf.token}" />
          </form>

        </div>
        
      </div><!-- tab-content -->
      
</div> <!-- /form -->
 <!-- <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script> --> 
  <script src="/js/jquery-1.7.2.min.js"></script> 
  <script src="/js/login.js"></script>

</body>
</html>

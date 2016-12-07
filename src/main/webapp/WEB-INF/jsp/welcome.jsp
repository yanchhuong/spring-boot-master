<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Home page</title>
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/bootstrap-theme.min.css">
     <script src="/js/jquery.min.js"></script> 
     <script src="/js/jquery-1.7.2.min.js"></script> 
   
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/welcomeajax.js"></script>
   <meta name="_csrf" content="${_csrf.token}"/>
    <!-- default header name is X-CSRF-TOKEN -->
   <meta name="_csrf_header" content="${_csrf.headerName}"/>
</head>
<body>

<div class="example">
    <div class="container">
        <div class="jumbotron">
            <nav role="navigation">
                <div class="alert alert-info">
                    <center><h3> WELCOME TO AJAX HOME</h3></center>
                </div>

                <div class="alert alert-info btn-block">
                    Server Time ${time}
                </div>
                <div class="alert alert-info btn-block">
                    Message: ${sessionScope.username}
                </div>
                
                <form>
                     <input type="button" value="Hello Ajax" id="ajaxtest">
                     <input type="button" value="Add" id="btAdd">
                     <input type="button" value="Search" id="tbSearch">
                     <input type="text" id="keysearch"/>
                     <br>
                </form>

               <table border="2" width="70%" cellpadding="2">  
                   <thead>
                      <tr>
                    	<th>Id</th>
                    	<th>firstname</th>
                    	<th>lastname</th>
                    	<th>Edit</th>
                    	<th>Delete</th>
                       </tr>  
                   </thead>
                    <tbody id="result">
          
                    </tbody> 
                </table> 
                
            </nav>
        </div>
        
        <!-- Popup -->
        <div id="popup">
                <h1>Customer Form</h1>
    			<form id="form">
              		 <p>Id: <input type="text" id="fid" /></p>
              		 <p>First Name: <input type="text" id="firstname" /></p>
               		 <p>Last Name: <input type="text" id="lastname" /></p>
               		 <p><input type="button" value="Submit" id="add"/> <input type="reset" value="Reset" /></p>
               </form>
        
        </div>
    </div>
</div>
</body>
</html>

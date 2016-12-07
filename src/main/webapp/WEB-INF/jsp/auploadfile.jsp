<%-- <html>
  <head>
    <title>File Upload Example using Apache commons File Upload Utility </title>
    <meta name="_csrf" content="${_csrf.token}"/>
    <!-- default header name is X-CSRF-TOKEN -->
    <meta name="_csrf_header" content="${_csrf.headerName}"/>
  </head>
  <body>
    <form action="/file" method="post" enctype="multipart/form-data">
        Select File to Upload:<input type="file" name="filename" id="filename"><br>
       <input type="submit" value="Upload">
       <input type="hidden" name="${_csrf.parameterName}"
			value="${_csrf.token}" />
    </form>
	
  </body>
</html>

 --%>
 
 
 <html xmlns:th="http://www.thymeleaf.org">
<head>

    <script src="/js/jquery-1.7.2.min.js"></script> 
   
    <script src="/js-lib/upload_file.js"></script>

    <title>File Upload Example using Apache commons File Upload Utility </title>
    <meta name="_csrf" content="${_csrf.token}"/>
    <!-- default header name is X-CSRF-TOKEN -->
    <meta name="_csrf_header" content="${_csrf.headerName}"/>
 </head>
<body>

	<div th:if="${message}">
		<h2 th:text="${message}"/>
	</div>

	<div>
		 <form method="POST" enctype="multipart/form-data" action="/upload_file/store_file" id="upload_file"> 
			<table>
				<tr><td>File to upload:</td><td><input type="file" name="file" id="file"/></td></tr>
				<tr><td>File to upload:</td><td><input type="file" name="file" /></td></tr>
				<tr><td>File to upload:</td><td><input type="file" name="file" /></td></tr> 
				
				<tr><td></td><td><input type="submit" id="upload_submit" value="Upload" /></td></tr>
			</table>
			<input type="hidden" name="${_csrf.parameterName}"
			value="${_csrf.token}" />
		</form>
	</div>

	<div>
		<ul>
			<li th:each="files : ${files}">
				<a th:href="${file}" th:text="${file}" />
			</li>
		</ul>
	</div>
	
	<img src="https://spring-boot-3.herokuapp.com/files/stock-photo-162224091.jpg" alt="Mountain View" style="width:304px;height:228px;">

</body>
</html>
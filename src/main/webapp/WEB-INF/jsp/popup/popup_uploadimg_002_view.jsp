<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%

String input = request.getParameter("input");

%>    
    
<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>Animated image upload form</title>
 <link rel="stylesheet" type="text/css" href="../../css/uploadimg.css" media="all"> 
 <meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
 <!-- default header name is X-CSRF-TOKEN -->
 <meta name="_csrf" content="${_csrf.token}"/>
 <meta name="_csrf_header" content="${_csrf.headerName}"/>
 <%@include file="../fragments/include_popup.jsp"%>
<!--   <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script> -->
  <script type="text/javascript" src="../../js/popup_uploadimg_002.js?<%=_localDatetime%>"></script>

<script type="text/javascript">
var input = <%=input%>;
$(function(){
	// Invoke the plugi
	$("#randname").val(input.randname);
	$("#pid").val(input.pid);
	
});
</script>


</head>

<body>

<input type="hidden" id="randname">
<input type="hidden" id="pid">
 <div class="uploadWrapper">
  <form id="imageUploadForm" class="imageUploadForm" method="post" action="/upload_file/uploadimg" enctype="multipart/form-data">
    <span class="helpText" id="helpText">Upload an image</span>
    <div>
        <input type='file' id="file" class="uploadButton" accept="image/*" />
    </div>
    <div id="uploadedImg" class="uploadedImg">
      <span class="unveil"></span>
    </div>
    <span class="pickFile">
      <table style="border-spacing: 10px;">
        <tr>
          <td><a href="#" class="pickFileButton" id="tbSave">Save</a></td>
          <td><a href="#" class="pickFileButton" id="tbRemove">Delete</a></td>
       </tr>
      </table>
    </span>
    <div id="imgframe">
        <img id="img"/>
    </div>
    
  </form>
</div>
  
</body>
</html>


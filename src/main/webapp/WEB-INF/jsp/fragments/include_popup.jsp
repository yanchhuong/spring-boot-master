<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.text.DateFormat"%>
<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"    pageEncoding="UTF-8"%>
  <%  
     
  DateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
  Date date = new Date();
  String _localDatetime = dateFormat.format(date);
  
 %> 
  
    <meta charset="utf-8">
    <meta http-equiv="Cache-Control" content="No-Cache">
    <meta http-equiv="Pragma" content="No-Cache">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
   
  <!--Jquery files  -->
    <script type="text/javascript" src="../../js_admin/1.10.2.jquery.min.js?<%=_localDatetime%>"></script>
    <script type="text/javascript" src="../../js_admin/common.js?<%=_localDatetime%>"></script>
    <script type="text/javascript" src="../../js_admin/jquery.placeholder.min.js?<%=_localDatetime%>"></script>
    
 <!-- popup -->
    <script type="text/javascript" src="../../js_admin/wehrm.popup.js?<%=_localDatetime%>"></script> 
    <script type="text/javascript" src="../../js_admin/jquery.bpopup.min.js?<%=_localDatetime%>"></script>

    <!--js custom  
    <script type="text/javascript" src="../../common/js_admin/layout.popup.js"></script>
    <script type="text/javascript" src="../../common/js_admin/wehrm.file.js"></script>
    <script type="text/javascript" src="../../common/js_admin/wehrm.popup.js"></script>
    <script type="text/javascript" src="../../common/js_admin/layout.wehrm.ui.js"></script>-->
    
<!--     <script type="text/javascript" src="../../common/js_admin/jquery-3.2.1.min.js"></script> -->
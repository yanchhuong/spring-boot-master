<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.text.DateFormat"%>
<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"    pageEncoding="UTF-8"%>
  <%  
     
  DateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
  Date date = new Date();
  String _localDatetim = dateFormat.format(date);
  
 %> 
  
    <meta charset="utf-8">
    <meta http-equiv="Cache-Control" content="No-Cache">
    <meta http-equiv="Pragma" content="No-Cache">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
   
   <link rel="stylesheet" type="text/css" href="../../css_admin/reset.css" media="all"> 
   <link rel="stylesheet" type="text/css" href="../../css_admin/cmd_content.css" media="all">
   <link rel="stylesheet" type="text/css" href="../../css_admin/idx_content.css" media="all">
   <link rel="stylesheet" type="text/css" href="../../css_admin/content.css" media="all">
    
    
  <!--Jquery files  -->
    <script type="text/javascript" src="../../js_admin/1.10.2.jquery.min.js?<%=_localDatetim%>"></script>
    <script type="text/javascript" src="../../js_admin/common.js?<%=_localDatetim%>"></script>
    <script type="text/javascript" src="../../js_admin/jquery.placeholder.min.js?<%=_localDatetim%>"></script>
    <script type="text/javascript" src="../../js_admin/jquery.tmpl.min1.js?<%=_localDatetim%>"></script>
  <!-- Pagination -->
    <script type="text/javascript" src="../../js_admin/jquery.simplePagination.js?<%=_localDatetim%>"></script>
   
  <!-- datepicker -->
   <link rel="stylesheet" type="text/css" href="../../css_admin/jquery-ui.css" media="all">
   <script type="text/javascript" src="../../js_admin/jquery-ui.js?<%=_localDatetim%>"></script>
   <script type="text/javascript" src="../../js_admin/wehrm.ui.js?<%=_localDatetim%>"></script>
  
  <!-- popup -->
    <script type="text/javascript" src="../../js_admin/wehrm.popup.js?<%=_localDatetim%>"></script> 
    <script type="text/javascript" src="../../js_admin/jquery.bpopup.min.js?<%=_localDatetim%>"></script>
    
    <!--js custom  
    <script type="text/javascript" src="../../common/js_admin/layout.popup.js"></script>
    <script type="text/javascript" src="../../common/js_admin/wehrm.file.js"></script>
    <script type="text/javascript" src="../../common/js_admin/wehrm.popup.js"></script>
    <script type="text/javascript" src="../../common/js_admin/layout.wehrm.ui.js"></script>-->
    
<!--     <script type="text/javascript" src="../../common/js_admin/jquery-3.2.1.min.js"></script> -->
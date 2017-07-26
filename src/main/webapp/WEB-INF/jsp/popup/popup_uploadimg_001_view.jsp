<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" xml:lang="ko">
<head>
<title>Upload Image</title>
 <meta name="_csrf" content="${_csrf.token}"/>
 <meta name="_csrf_header" content="${_csrf.headerName}"/>
 <%@include file="../fragments/include_admin.jsp"%>
<script>
$(function(){
	// Invoke the plugin
	$('input, textarea').placeholder({customClass:'my-placeholder'});
});
</script>
</head>

<body style="width:490px;">

	<div class="pop_wrap">

		<!-- 팝업 헤더 -->
		<div class="pop_header">
			<h1>Upload image</h1>
			<a href="#none" onClick="self.close()" class="btn_popclose"><img src="../img/btn/btn_popclose.gif" alt="Upload image"></a>
		</div>
		<!-- //팝업 헤더 -->

		<!-- 팝업 컨텐츠 -->
		<div class="pop_container2">
			<div class="">
				<table class="input_table input_table_b" summary="">
					<caption></caption>
					<colgroup>
						<col style="width:80px;">
						<col >
					</colgroup>
					<tbody>
						<tr>
							<th><div class="line"></div></th>
							<td><div class="line">
								  <span class="input_style1" style="width:100px;"><em><input type="file" value=""></em></span>
								  <a href="#none"><img src="../img/btn/btn_calendar.gif" alt="달력"></a>
							    </div>
							</td>
						</tr>

					</tbody>
				</table>
			</div>
		</div>
		<!-- //팝업 컨텐츠 -->

		<!-- 팝업 하단 -->
		<div class="pop_btm">
			<span class="btn_style2_b"><a href="#none">Save</a></span>
			<span class="btn_style2"><a href="#none">Cancel</a></span>
		</div>
		<!-- //팝업 하단 -->
	</div>
</body>
</html>
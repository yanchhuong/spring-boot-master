<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
 <meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
 <!-- default header name is X-CSRF-TOKEN -->
 <meta name="_csrf" content="${_csrf.token}"/>
 <meta name="_csrf_header" content="${_csrf.headerName}"/>
   
<%@include file="fragments/include_admin.jsp"%>
<script src="/js/menu_control_001.js"></script>

<script>
$(function(){
	// Invoke the plugin
	$('input, textarea').placeholder({customClass:'my-placeholder'});
});
top.ifrMainResize("N", 878);
</script>

<style>

.container{
      padding:0px;
 }
</style>


</head>
<body>

<!-- content wrap -->
		<div class="content">

			<div class="content_wrap">

				<!-- 타이틀/버튼영역 -->
				<div class="title_wrap mgb15">
					<div class="left"><h1>부서현황 > 부서설정</h1></div>
					<div class="right"></div>
				</div>
				<!-- //타이틀/버튼영역 -->

				<!-- 안내 -->
				<!-- <div class="pop_info_txt">
					<p style="padding:15px 0;">
					* 이용기관의 부서를 등록하세요. 부서는 최대 8depth까지 구성이 가능합니다.<br>
					* 부서등록은 관리자가 설정 가능하며, 관리자 지정 및 변경은 비즈플레이 환경설정에서 하실 수 있습니다.
					</p>
				</div> -->
				<!-- //안내 -->

				<!-- 상단 기능버튼 -->
				<div class="editbtn_top_box">
					<div class="left">
						최종수정일시 : 2016-01-02 12:00:00
					</div>
				</div>
				<!-- //상단 기능버튼 -->

				<!-- 스크롤테이블 -->
				<div style="position:relative;z-index:200;" class="treemenu_wrap">
					<div class="list_scroll_top">
						<table class="list_table">
							<colgroup>
							<col width="66px">
							<col>
							<col width="95px">
							<col width="120px">
							<col width="120px">
							<col width="40px">
							</colgroup>
							<thead>
							<tr>
								<th scope="col"></th>
								<th scope="col" class="t_left">Name</th>
								<th scope="col" class="t_right">Parent</th>
								<th scope="col" class="t_left">Level</th>
								<th scope="col" class="t_left">User</th>
								<th scope="col" class="t_left"></th>
							</tr>
							</thead>
						</table>
					</div>
					<div class="list_scroll" style="height: 655px;max-height: 545px;">
						<div class="list_scroll_fix">
							<table class="list_table" id="TBL_DATA">
								<colgroup>
								<col width="66px">
								<col>
								<col width="95px">
								<col width="120px">
								<col width="120px">
								<col width="40px">
								</colgroup>
								<thead class="bg">
									<tr>
										<td class="t_center"></td>
										<td class="t_left"><strong>Total</strong></td>
										<td class="t_right" ><strong id="CNT"></strong></td>
										<td class="t_left"></td>
										<td class="t_left"></td>
										<td class="t_left"></td>
									</tr>
								</thead>
								<tbody>

								</tbody>
							</table>
							<div>&nbsp;</div>
						</div>
					</div>
				</div>
				<!-- //스크롤테이블 -->
			</div>
		</div>
		<!-- //content wrap -->

<%@include file="fragments/html_iframes.jsp"%>
</body>
</html>
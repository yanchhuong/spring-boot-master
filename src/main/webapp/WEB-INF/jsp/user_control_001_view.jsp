<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
 <!-- default header name is X-CSRF-TOKEN -->
 <meta name="_csrf" content="${_csrf.token}"/>
 <meta name="_csrf_header" content="${_csrf.headerName}"/>
<%@include file="fragments/include_admin.jsp"%>
<script src="/js/user_control_001.js"></script>
<script>
$(function(){
	// Invoke the plugin
	$('input, textarea').placeholder({customClass:'my-placeholder'});
});

top.ifrMainResize("N", 878);

</script>

<script>
function windowClose() { 
	window.open("about:blank", "_self","status=0,width=0,height=0"); 
	window.close();
	} 
$(function(){
	// Invoke the plugin
	$('input, textarea').placeholder({customClass:'my-placeholder'});
});
</script>


<style type="text/css">
/* .ui-datepicker select.ui-datepicker-month, 
.ui-datepicker select.ui-datepicker-year{
	height: 22px;
}
.ui-datepicker select.ui-datepicker-year{float:left;}
.container{
      padding:0px;
 } */
 .ui-widget-content{

     position: absolute;
     top: 39px;
    left: 96px;
    z-index: 1112;
 }
 
</style>

</head>
<body>
<!-- content wrap -->
		<div class="content">

			<div class="content_wrap">

				<!-- 타이틀/버튼영역 -->
				<div class="title_wrap">
					<div class="left"><h1>Control User</h1></div>
					<div class="right">
			<!-- 			<div class="input_box"><input type="text" style="width:180px;" placeholder="성명, 사번, 부서, 직위, 직책"><a href="#none"><img src="../img/btn/btn_topsearch.gif" alt="조회"></a></div>
						펼쳤을때<span class="btn_style1 up"><a href="#none">상세</a></span>
						접혔을때<span class="btn_style1 down"><a href="#none">상세</a></span> -->
					</div>
				</div>
				<!-- //타이틀/버튼영역 -->

				<!-- table search-->
				<div class="tbl_srch">
					<table class="">
						<caption></caption>
						<colgroup>
						<col style="width:202px;">
						<col style="width:60px;">
						<col>
						</colgroup>
						<tbody>
							<tr>
								<td><div>
									<span class="select_bg">
										<a href="#none" class="txt">RegDate</a><!-- 활성화클래스 on -->
										<!-- 레이어 -->
										<div class="ly_select_bg" style="display:none;">
											<ul>
												<li><a href="#none" class="on">입사월</a></li><!-- 활성화클래스 on -->
												<li><a href="#none">퇴사월</a></li>
											</ul>
										</div>
										<!-- //레이어 -->
									</span>
									<input type="text" style="width:70px;" id="regdate" class="">&nbsp;<a href="javascript:" id="img_date"><img src="../img/ico/ico_calendar.png" alt="달력"></a>
								</div></td>
								<th scope="row"><div>검색조건</div></th>
								<td><div>
									<span class="txt_combo" style="width:100px;">
										<a href="#none" class="txt">선택</a>
										<!-- 레이어 -->
										<div class="ly_txtcombo" style="display:none;">
											<ul>
												<li><a href="#none">성명</a></li>
												<li class="on"><a href="#none">사번</a></li><!-- 활성화클래스 on -->
												<li><a href="#none">부서</a></li>
												<li><a href="#none">직위(직급)</a></li>
												<li><a href="#none">직책</a></li>
												<li><a href="#none">고용형태</a></li>
											</ul>
										</div>
										<!-- //레이어 -->
									</span>
									<input type="text" id="keySRC"style="width:240px;">
									<span class="btn_search_tb"><a href="#none"> 검색 </a></span>
								</div></td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- //table search -->

				<!-- 상단 기능버튼 -->
				<div class="editbtn_top_box">
					<ul class="tab">
						<li class="on"><a href="#none">전체<span class="no">(100)</span></a></li><!-- 활성화클래스 on -->
						<li><a href="#none">재직<span class="no">(100)</span></a></li>
						<li><a href="#none">입사<span class="no">(100)</span></a></li>
						<li><a href="#none">퇴사<span class="no">(100)</span></a></li>
					</ul>
					 <div class="right">
						<span class="btn_style1_b" id="btnaAdd"><a href="javascript:">등록</a></span>
						<!-- (PARK)20161202 --><span><a id="btn_download_excel" href="javascript:"><img src="../img/btn/btn_excel.gif" alt="엑셀저장"></a></span><!--                                    /(PARK)20161202 -->
						<span class="txt_combo">
							<a id="txtCbmYear" href="javascript:" class="txt"><span id="txtYear" class="bg">2017 년</span></a>
							<!-- 레이어 -->
							<div class="ly_txtcombo" id="lyTxtComboStyle" style="display: none;">
								<ul id="lyCombo">
								<li><a href="javascript:">2017</a></li><li><a href="javascript:">2016</a></li><li><a href="javascript:">2015</a></li><li><a href="javascript:">2014</a></li><li><a href="javascript:">2013</a></li><li><a href="javascript:">2012</a></li><li><a href="javascript:">2011</a>                                   </li><li><a href="javascript:">2010</a></li><li><a href="javascript:">2009</a></li><li><a href="javascript:">2008</a></li></ul>
							</div>
							<!-- //레이어 -->
						</span>
					</div>
				</div>
				<!-- //상단 기능버튼 -->

				<!-- table result -->
				<div class="table_layout">
					<table class="tbl_result">
						<caption></caption>
						<colgroup>
						<col style="width:62px;">
						<col>
						<col style="width:15%;">
						<col style="width:10%;">
						<col style="width:10%;">
						<col style="width:10%;">
						<col style="width:10%;">
						<col style="width:10%;">
						<col style="width:10%;">
						<col style="width:10%;">
						</colgroup>
						<thead>
							<tr>
								<th scope="col"><div></div></th>
								<th scope="col"><div>Name</div></th>
								<th scope="col"><div>Role</div></th>
								<th scope="col"><div>Birth Date</div></th>
								<th scope="col"><div>Phone</div></th>
								<th scope="col"><div>Email</div></th>
								<th scope="col"><div>Address</div></th>
								<th scope="col"><div>Shop Name</div></th>
								<th scope="col"><div>Register Date</div></th>
								<th scope="col"><div>Status</div></th>
							</tr>
						</thead>
						<tbody id="Result_List">
						<!-- 	<tr>
								<td>
									<div class="thumb">
										<img src="../img/img_nullphoto_s.png" alt="">썸네일 이미지 없을때
										<img src="../img/ex_photo.gif" alt=""> --><!-- 썸네일 테스트 이미지
									</div>
								</td>
								<td><div class="elipsis">홍일점 (w20010101001)</div></td>
								<td><div class="elipsis">지원부문 관리부</div></td>
								<td><div>2002-01-01</div></td>
								<td><div>과장</div></td>
								<td><div>팀장</div></td>
								<td><div>2001-01-11</div></td>
								<td><div></div></td>
								<td><div>정규직</div></td>
								<td><div>재직</div></td>
							</tr>
						</tbody> -->
					</table>
					 <script id="tbl_result_template" type="text/x-jQuery-tmpl">
						<tr>
								<td>
                                    <input type="hidden" id="usercd" value="{{= usercd }}">  
									<div class="thumb">
										<img src="../img/img_nullphoto_s.png" alt="">
									</div>
								</td>
								<td><div class="elipsis">{{= name }}</div></td>
								<td><div class="elipsis">{{= role }}</div></td>
								<td><div>{{= birthdate }}</div></td>
								<td><div>{{= cphone }}</div></td>
								<td><div>{{= email }}</div></td>
								<td><div>{{= address }}</div></td>
								<td><div>{{= site }}</div></td>
								<td><div>{{= regdate }}</div></td>
								<td><div>
                                        <span class="txt_combo btn_combo_down" id="cbStatus" style="width:100px;">
										<a href="#none" class="txt"> {{= enabled }}</a>
										<!-- 레이어 -->
										<div class="ly_txtcombo" id="txtstatus" style="display:none;">
											<ul id="cbStat">
												<li class="on"><a href="#none">block</a></li><!-- 활성화클래스 on -->
											 	<li><a href="#none">Unblock</a></li>
										    </ul> 
										</div>
										<!-- //레이어 -->
									 </span>
                                    </div></td>		
						</tr>
					</script>
					
				</div>
				<!-- //table result -->

				<!-- Paging wrap -->
				<div class="paging_wrap">
					<div class="combo_wrap">
						<div class="combo_style">
							<a href="#none" class="btn_style btn_combo_down"><span id="txt">15</span></a>
							<ul style="display:none;" id="pageNum">
								<li><a href="#none">15개</a></li>
								<li><a href="#none">20개</a></li>
								<li><a href="#none">30개</a></li>
							</ul>
						</div>
					</div>
					<!-- pagination -->
					<div class="paging" id="table_paging"><!-- 비활성상태는 on class 제거 -->
					  
						<!-- <a href="#none" class="btn_pag_cntr first on"><span class="blind">first</span></a><a href="#none" class="btn_pag_cntr prev on"><span class="blind">previous</span></a> 
						<span class="pag_num">
							<a href="#none" class="on">1</a>
							<a href="#none">2</a>
							<a href="#none">3</a>
							<a href="#none">4</a>
							<a href="#none">5</a>
							<a href="#none">6</a>
							<a href="#none">7</a>
							<a href="#none">8</a>
							<a href="#none">9</a>
							<a href="#none">10</a>
						</span>
						<a href="#none" class="btn_pag_cntr next on"><span class="blind">next</span></a><a href="#none" class="btn_pag_cntr last on"><span class="blind">last</span></a> -->
					</div>
					<!-- //pagination -->
				</div>
				<!-- //Paging wrap -->

			</div>

		</div>
		<!-- //content wrap -->

</body>
</html>
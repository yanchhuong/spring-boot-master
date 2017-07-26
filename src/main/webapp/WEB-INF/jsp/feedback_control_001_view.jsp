<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="fragments/include_admin.jsp"%>
<script src="/js/feedback_control_001.js"></script>
<script>
$(function(){
	// Invoke the plugin
	$('input, textarea').placeholder({customClass:'my-placeholder'});
});

top.ifrMainResize("N", 700);
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
				<div class="title_wrap">
					<div class="left"><h1>증명서 발급대장</h1></div>
					<div class="right">
						<div class="input_box"><input type="text" style="width:180px;" placeholder="신청자, 용도, 증명서NO"><a href="#none"><img src="/img/btn/btn_topsearch.gif" alt="조회"></a></div>
						<!-- 펼쳤을때 --><span class="btn_style1 up"><a href="#none">상세</a></span>
						<!-- 접혔을때 --><span class="btn_style1 down"><a href="#none">상세</a></span>
					</div>
				</div>
				<!-- //타이틀/버튼영역 -->

				<!-- table search-->
				<div class="tbl_srch">
					<table class="">
						<caption></caption>
						<colgroup>
						<col style="width:62px;">
						<col style="width:254px;">
						<col style="width:60px;">
						<col>
						</colgroup>
						<tbody>
							<tr>
								<th scope="row"><div>작성일자</div></th>
								<td><div>
									<input type="text" style="width:70px;">&nbsp;<a href="#none"><img src="/img/ico/ico_calendar.png" alt="달력"></a> ~
									<input type="text" style="width:70px;">&nbsp;<a href="#none"><img src="/img/ico/ico_calendar.png" alt="달력"></a>
								</div></td>
								<th scope="row"><div>검색조건</div></th>
								<td><div>
									<span class="txt_combo" style="width:100px;">
										<a href="#none" class="txt">선택</a>
										<!-- 레이어 -->
										<div class="ly_txtcombo" style="display:none;">
											<ul>
												<li><a href="#none">작성자</a></li>
												<li class="on"><a href="#none">제목</a></li><!-- 활성화클래스 on -->
												<li><a href="#none">제목+내용</a></li>
												<li><a href="#none">내용</a></li>
											</ul>
										</div>
										<!-- //레이어 -->
									</span>
									<input type="text" style="width:240px;">
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
						<li class="on"><a href="#none">전체<span class="no">(03)</span></a></li><!-- 활성화클래스 on -->
						<li><a href="#none">재직<span class="no">(00)</span></a></li>
						<li><a href="#none">퇴직<span class="no">(00)</span></a></li>
						<li><a href="#none">경력<span class="no">(00)</span></a></li>
					</ul>
					<div class="right"></div>
				</div>
				<!-- //상단 기능버튼 -->

				<!-- table result -->
				<div class="table_layout">
					<table class="tbl_result">
						<caption></caption>
						<colgroup>
						<col style="width:10%;">
						<col style="width:10%;">
						<col style="width:10%;">
						<col>
						<col style="width:10%;">
						<col style="width:10%;">
						<col style="width:15%;">
						</colgroup>
						<thead>
							<tr>
								<th scope="col"><div>신청일자</div></th>
								<th scope="col"><div>신청자</div></th>
								<th scope="col"><div>증명서유형</div></th>
								<th scope="col"><div>용도</div></th>
								<th scope="col"><div>발급일자</div></th>
								<th scope="col"><div class="t_right">발급부수</div></th>
								<th scope="col"><div>증명서NO</div></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><div>2016-01-05</div></td>
								<td><div>이태백</div></td>
								<td><div>재직증명서</div></td>
								<td><div class="elipsis">주택자금대출신청 서류</div></td>
								<td><div>2016-01-05</div></td>
								<td><div class="t_right">1</div></td>
								<td><div>재직_201601_003</div></td>
							</tr>
							<tr>
								<td><div>2016-01-03</div></td>
								<td><div>고길동</div></td>
								<td><div>퇴직증명서</div></td>
								<td><div class="elipsis">비자 발급신청 서류</div></td>
								<td><div>2016-01-03</div></td>
								<td><div class="t_right">1</div></td>
								<td><div>퇴직_201601_002</div></td>
							</tr>
							<tr>
								<td><div>2016-01-02</div></td>
								<td><div>나잘난</div></td>
								<td><div>경력증명서</div></td>
								<td><div class="elipsis">취업용</div></td>
								<td><div>2016-01-02</div></td>
								<td><div class="t_right">2</div></td>
								<td><div>경력_201601_001</div></td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- //table result -->

				<!-- Paging wrap -->
				<div class="paging_wrap">
					<div class="combo_wrap">
						<div class="combo_style">
							<a href="#none" class="btn_style btn_combo_down"><span>15</span></a>
							<ul style="display:block;">
								<li><a href="#none">15개</a></li>
								<li><a href="#none">20개</a></li> 
								<li><a href="#none">30개</a></li>
							</ul>
						</div>
					</div>
					<!-- pagination -->
					<div class="paging"><!-- 비활성상태는 on class 제거 -->
						<a href="#none" class="btn_pag_cntr first on"><span class="blind">first</span></a><a href="#none" class="btn_pag_cntr prev on"><span class="blind">previous</span></a>
						<span class="pag_num">
							<a href="#none" class="on">1</a><a href="#none">2</a><a href="#none">3</a><a href="#none">4</a><a href="#none">5</a><a href="#none">6</a><a href="#none">7</a><a href="#none">8</a><a href="#none">9</a><a href="#none">10</a>
						</span>
						<a href="#none" class="btn_pag_cntr next on"><span class="blind">next</span></a><a href="#none" class="btn_pag_cntr last on"><span class="blind">last</span></a>
					</div> 
					<!-- //pagination -->
				</div>
				<!-- //Paging wrap -->

			</div>

		</div>
		<!-- //content wrap -->

</body>
</html>
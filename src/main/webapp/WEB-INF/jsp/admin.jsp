<!DOCTYPE html>
<head>
<title>Admin Control</title>
<%@include file="fragments/include_admin.jsp"%>
<script src="/js/admin.js"></script>
<script>
$(function(){
	// Invoke the plugin
	$('input, textarea').placeholder({customClass:'my-placeholder'});
});
 function ifrMainResize(ani_yn, height1) {
	if (typeof (height1) != "number") {
		height1 = 20;
	}
	$("#ifr_content").css("height", ($("#ifr_content").contents().find(".content").height() + height1) + "px");
	if(ani_yn != "N"){
		$('body,html').animate({
			scrollTop : 0
		}, 0);
	}
} 
</script>
</head>
<body class="lnb_bg">

<div class="wrap">
	<!-- (공통)header -->
	<div class="cmd_header type2" id="cmd_header"><!-- [D] type1(메인), type2(업무) -->
		<div class="cmd_header_inner">
			<div class="cmd_lft">
				<h1>
					<a href="javascrip:">
						<img src="../img/cmd_header/app_logo_type2.png" alt="" class="logo_resize">
						<span id="" class="">Admin Control</span>
					</a>
				</h1>
				<h3>
					<a href="javascrip:"><span id="" class=""></span></a>
				</h3>
			</div>
		</div>
	</div>
	<!-- //(공통)header -->

	<!-- Container -->
	<div class="container">

		<!-- lnb box -->
		<div class="lnb_box">
			<!-- lnb top -->
			<div class="lnb_top">
				<!-- user view -->
				<div class="user_view">
					<img src="../img/user_img.png" class="img_user">
					<div class="user_r_side">
						<!--  select -->
						<div class="select_com">
							<div class="combo"><span>Setting</span><a href="javascrip:"><img src="../img/btn/combo_link.png" alt="combo link"></a></div>
							<ul style="display:none;">
								<li><a href="javascrip:">Menu</a></li>
								<li><a href="javascrip:" >User</a></li>
								<li><a href="javascrip:">FeedBack</a></li>
							</ul>
						</div>
						<!-- //select -->
						<div class="select_com">
							<div class="combo_no"><span>웹케시(주)웹케시(주)웹케시(주)</span></div>
						</div>
						<p><strong>Admin</strong> User</p>
					</div>
				</div>
				<!-- //user view -->
			</div>
			<!-- //lnb top -->

			<!-- group wrap -->
			<div class="com_group_wrap">
				<!--company list -->
				<div class="com_list">
					<div class="com_item">
						<div class="group_name ic_lnb_cmd ic_m6_1 on"><a href="javascrip:">Controll Panel</a></div><!-- 활성화클래스 on -->
						<div class="group_name2">
							<ul>
								<li><a href="javascrip:" id="cmenu" >Menu</a></li>
								<li><a href="javascrip:" id="cuser"  >User</a></li><!-- (add)20170309 -->
								<li><a href="javascrip:" id="cmessage">Message</a></li>
								<li><a href="javascrip:" id="cfeedback">Feedback</a></li>
							</ul>
						</div>
					</div>
				</div>
				<!--//company list -->
			</div>
			<!-- //group wrap -->
		</div>
		<!-- //lnb box -->
		
		<iframe id="ifr_content" name="ifr_content" src="cmenu" 
                    style="width:100%;min-width:600px;height:auto" 
                    scrolling="auto" frameborder="0" marginheight="0" marginwidth="0" >
       	</iframe> 

		<!-- content wrap -->
		<div class="content">
		</div>
		<!-- //content wrap -->
	</div>
	<!-- //Container -->
	
	<!-- (공통)footer -->
	<div class="cmd_footer type2" id="cmd_footer"><!-- [D] type1(메인), type2(업무) -->
		<div class="cmd_footer_inner">
			<div class="cmd_lft">
				<p>Copyright(c) <strong>bizplay</strong> All rights reserved.</p>
			</div>
			<div class="cmd_rft">
				<ul>
					<li><a href="javascrip:" id=""></a></li>
					<li><a href="javascrip:" id=""></a></li>
					<li><span>고객센터 : 1566-0000</span></li>
				</ul>
			</div>
		</div>
	</div>
	<!-- //(공통)footer -->
	
</div>
</body>
</html>

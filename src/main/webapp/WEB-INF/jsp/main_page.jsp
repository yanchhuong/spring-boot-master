<!DOCTYPE html>
<html lang="ko" class="leaf">
<head>
<meta charset="UTF-8">

<!-- <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<link rel="stylesheet" type="text/css" href="/css/css_page/reset.css" media="all">
<link rel="stylesheet" type="text/css" href="/css/css_page/content.css" media="all">
<link rel="stylesheet" type="text/css" href="/css/css_page/content_media_screen.css" media="all">
<link rel="stylesheet" type="text/css" href="/css/css_page/button.css" media="all">
<script type="text/javascript" src="../js_lib/js_page/jquery-1.10.2.js"></script>
<script type="text/javascript" src="../js_lib/js_page/collJsPlugin.js"></script>
<script type="text/javascript" src="../js_lib/js_page/common.js"></script> -->



 <%@include file="fragments/include_page.jsp"%>
</head>

<body>

<!-- wrap -->
<div class="wrap ">

	<!-- header -->
   	<div class="header_wrap"><!--<div class="header_wrap search">-->
		<!-- header_inner top-bar-wrap -->
        <div class="header_inner">
			<!-- logo -->
            <h1 class="logo"><a href="#none"><img src="img/bg/bg_logo.png" alt="logo"></a></h1>
			<!-- //logo -->

			<!-- button_menu_mobile -->
            <button type="button" class="btn_gnb">GNB</button>
			<!-- //button_menu_mobile -->

			<!-- search_box_header -->
            <div id="searchview" onclick="schView()">
                <fieldset>
                    <legend>검색</legend>
                    <input type="text" class="txt" value="Product name, area name, @ shop name, initial search" disabled="">
                </fieldset>
            </div>
            
			<!-- //search_box_header -->

			<!-- aleim -->
            <button type="button" class="btn_alrim new" onclick="gotalklist()"><span>Notice</span></button>
			<!--<button type="button" class="btn_alrim new" onclick="gotalklist()"><span>Notice</span></button>-->
			<!-- //aleim -->

			<!-- search_wrap -->
            <div class="searchwrap">
                <button type="button" class="btn_back" onclick="schHide()">뒤로</button>
                <div id="searcharea">
                    <fieldset>
                        <legend>검색</legend>
                        <input type="text" id="main_search_input_text" class="txt" placeholder="Product name, area name, @ shop name, initial search">
                        <button type="button" class="btn_sch" onclick="goSearchPage()">검색</button>
                    </fieldset>
                </div>
            </div>
			<!-- //search_wrap -->
        </div>
		<!-- //header_inner -->
    </div>
	<!-- // header -->

	<!-- container -->
	<div id="container">
		<!-- left_navigation_bar -->
		<div id="gnb" class="on">
			<div class="gnbwrap">
				<div class="gnb_inner">
					<button type="button" class="btn_gnbclose">Close</button>
					<dl class="memview">
						<dt><a href="#"><img id="sidebar_photo" src="img/bg/bg_nophoto.png" alt="User"></a></dt>
						<dd id="sidebar_name">Please Login</dd>
					</dl>
					<div class="meminfo">
						<a href="#none" class="sidebar_item"><em>Goods</em></a>
						<a href="#none" class="sidebar_faverd"><em>Stream</em></a>
						<a href="#none" class="sidebar_following"><em>Follow</em></a>
					</div>
					<dl class="category">
						<dt>
							<strong>Category</strong>
							<button type="button" class="btn_upload"><span>Post Free here!</span></button>
						</dt>
						<dd id="sidebar_catagory_list">
							<a href="#none" class="ctg_01">Women's clothing</a>
							<a href="#none" class="ctg_02">Men's clothing</a>
							<a href="#none" class="ctg_03">Fashion goods</a>
							<a href="#none" class="ctg_04">Beauty / Beauty</a>
							<a href="#none" class="ctg_05">Baby / birth</a>
							<a href="#none" class="ctg_06">Sports / Leisure</a>
							<a href="#none" class="ctg_07">Digital / Appliances</a>
							<a href="#none" class="ctg_08">Books / tickets / hobbies / pets</a>
							<a href="#none" class="etc_01">Life / Stationery / Furniture / Food</a>
							<a href="#none" class="etc_02">Vehicles / Motorcycles</a>
							<a href="#none" class="etc_03">More</a>
							<a href="#none" class="etc_04">Stargaz</a>
						</dd>
					</dl>
					<div class="btncenter">
						<button id="sidebar_loginout_btn" type="button" class="btn_wt">LogIn</button>
					</div>
				</div>
			</div>
		</div>
		<!-- //left_navigation_bar -->

		<!-- container -->
		<div class="container_inner">

			<!-- sub_category -->
			<div class="sub_cat">
				<div class="hdbox">Women's Clothing <a href="#none" class="btn_subCatClose"><img src="img/btn/btn_subCatClose.png" alt="Sub Category Close"></a></div>
				<div class="ctglist">
					<ul>
						<li><a href="#none"><em>Long sleeve T-shirt</em><span>999 Items</span></a></li>
						<li><a href="#none"><em>Short Sleeve T-shirt</em><span>10 Items</span></a></li>
						<li><a href="#none"><em>Man-to-man / hoody</em><span>99 Items</span></a></li>
						<li><a href="#none"><em>One Piece</em><span>999 Items</span></a></li>
						<li><a href="#none"><em>Blouse</em><span>800 Items</span></a></li>
						<li><a href="#none"><em>Shirt / Souvenir</em><span>999 Items</span></a></li>
						<li><a href="#none"><em>Long sleeve T-shirt</em><span>999 Items</span></a></li>
						<li><a href="#none"><em>Short Sleeve T-shirt</em><span>10 Items</span></a></li>
						<li><a href="#none"><em>Man-to-man / hoody</em><span>99 Items</span></a></li>
						<li><a href="#none"><em>One Piece</em><span>999 Items</span></a></li>
						<li><a href="#none"><em>Blouse</em><span>800 Items</span></a></li>
						<li><a href="#none"><em>Shirt / Souvenir</em><span>999 Items</span></a></li>
					</ul>
					<button class="btn_more"><span class="btn_text">Show More</span><span class="btn_collape"></span></button>
				</div>
			</div>
			<!-- //sub_category -->

			<div class="ctgwrap" style="display:;">
				<!-- list_Sub_Categiry -->
				<div class="listalign">
					<div class="tit_rst"><span>Products </span><strong>1561811</strong><span>Items</span></div>
					<div class="rbox">
						<div class="cstselect">
							<a href="#" class="selected"><span>Popularity</span></a>
							<ul class="layselected">
								<li><a href="#none">Latest</a></li>
								<li><a href="#none">Bestselling</a></li>
								<li><a href="#none">Low-cost</a></li>
								<li><a href="#none">Highest Priority</a></li>
							</ul>
						</div>
						<!--<button type="button" class="btn_txt">Advanced Search</button>-->
					</div>
				</div>
				<!-- //list_Sub_Categiry -->

				<!-- goods_list -->
				<ul class="goodslist">
					<li>
						<a href="#none" class="thumb">
							<img src="img/products/prod_01.jpg" alt="" class="thumb loaded">
							<p class="txtinfo">
								<em>Adidas Three Line One Man Line One Man</em>
								<strong class="flt"><span>$ 28</span></strong>
								<strong class="frl"><span>10% OFF</span></strong>
							</p>
						</a>
						<div class="items_foot">
							<div class="flt">
								<ul class="items_foot_opt">
									<li class="ico_local"><a href="#none"></a></li>
									<li class="ico_save"><a href="#none"></a></li>
									<li class="ico_fb"><a href="#none"></a></li>
								</ul>
							</div>
							
							<div class="frl">
								<ul class="items_foot_view">
									<li class="ico_local"><a href="#none">999</a></li>
									<li class="ico_atlist"><a href="#none">999</a></li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<a href="#none" class="thumb">
							<span class="badge icon_plus">Plus</span>
							<img src="img/products/prod_02.jpg" alt="" class="thumb loaded">
							<p class="txtinfo">
								<em>Rouge Pit Long Angora</em>
								<strong class="flt"><span>$ 31.00</span></strong>
								<strong class="frl"><span>10% OFF</span></strong>
							</p>
						</a>
						<div class="items_foot">
							<div class="flt">
								<ul class="items_foot_opt">
									<li class="ico_local"><a href="#none"></a></li>
									<li class="ico_save"><a href="#none"></a></li>
									<li class="ico_fb"><a href="#none"></a></li>
								</ul>
							</div>
							
							<div class="frl">
								<ul class="items_foot_view">
									<li class="ico_local"><a href="#none">999</a></li>
									<li class="ico_atlist"><a href="#none">999</a></li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<a href="#none" class="thumb">
							<img src="img/products/prod_03.jpg" alt="" class="thumb loaded">
							<p class="txtinfo">
								<em>Mmolded horn nt</em>
								<strong class="flt"><span>$ 28</span></strong>
							</p>
						</a>
						<div class="items_foot">
							<div class="flt">
								<ul class="items_foot_opt">
									<li class="ico_local"><a href="#none"></a></li>
									<li class="ico_save"><a href="#none"></a></li>
									<li class="ico_fb"><a href="#none"></a></li>
								</ul>
							</div>
							
							<div class="frl">
								<ul class="items_foot_view">
									<li class="ico_local"><a href="#none">999</a></li>
									<li class="ico_atlist"><a href="#none">999</a></li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<a href="#none" class="thumb">
							<span class="badge icon_plus">Plus</span>
							<img src="img/products/prod_04.jpg" alt="" class="thumb loaded">
							<p class="txtinfo">
								<em>Pajama set top and bottom</em>
								<strong class="flt"><span>$ 28</span></strong>
							</p>
						</a>
						<div class="items_foot">
							<div class="flt">
								<ul class="items_foot_opt">
									<li class="ico_local"><a href="#none"></a></li>
									<li class="ico_save"><a href="#none"></a></li>
									<li class="ico_fb"><a href="#none"></a></li>
								</ul>
							</div>
							
							<div class="frl">
								<ul class="items_foot_view">
									<li class="ico_local"><a href="#none">999</a></li>
									<li class="ico_atlist"><a href="#none">999</a></li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<a href="#none" class="thumb">
							<span class="badge icon_plus">Plus</span>
							<img src="img/products/prod_05.jpg" alt="" class="thumb loaded">
							<p class="txtinfo">
								<em>Key brushed training + vest</em>
								<strong class="flt"><span>$ 52,200</span></strong>
							</p>
						</a>
						<div class="items_foot">
							<div class="flt">
								<ul class="items_foot_opt">
									<li class="ico_local"><a href="#none"></a></li>
									<li class="ico_save"><a href="#none"></a></li>
									<li class="ico_fb"><a href="#none"></a></li>
								</ul>
							</div>
							
							<div class="frl">
								<ul class="items_foot_view">
									<li class="ico_local"><a href="#none">999</a></li>
									<li class="ico_atlist"><a href="#none">999</a></li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<a href="#none" class="thumb">
							<span class="badge icon_plus">Plus</span>
							<img src="img/products/prod_06.jpg" alt="" class="thumb loaded">
							<p class="txtinfo">
								<em>Redferm Mustang</em>
								<strong class="flt"><span>$ 98.00</span></strong>
							</p>
						</a>
						<div class="items_foot">
							<div class="flt">
								<ul class="items_foot_opt">
									<li class="ico_local"><a href="#none"></a></li>
									<li class="ico_save"><a href="#none"></a></li>
									<li class="ico_fb"><a href="#none"></a></li>
								</ul>
							</div>
							
							<div class="frl">
								<ul class="items_foot_view">
									<li class="ico_local"><a href="#none">999</a></li>
									<li class="ico_atlist"><a href="#none">999</a></li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<a href="#none" class="thumb">
							<span class="badge icon_plus">Plus</span>
							<img src="img/products/prod_07.jpg" alt="" class="thumb loaded">
							<p class="txtinfo">
								<em>Band Stocking Set Items</em>
								<strong class="flt"><span>$ 3.00</span></strong>
							</p>
						</a>
						<div class="items_foot">
							<div class="flt">
								<ul class="items_foot_opt">
									<li class="ico_local"><a href="#none"></a></li>
									<li class="ico_save"><a href="#none"></a></li>
									<li class="ico_fb"><a href="#none"></a></li>
								</ul>
							</div>
							
							<div class="frl">
								<ul class="items_foot_view">
									<li class="ico_local"><a href="#none">999</a></li>
									<li class="ico_atlist"><a href="#none">999</a></li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<a href="#none" class="thumb">
							<span class="badge icon_plus">Plus</span>
						<img src="img/products/prod_08.jpg" alt="" class="thumb loaded">
							<p class="txtinfo">
								<em>Itmisha gold chain tweed jacket</em>
								<strong class="flt"><span>$ 22</span></strong>
							</p>
						</a>
						<div class="items_foot">
							<div class="flt">
								<ul class="items_foot_opt">
									<li class="ico_local"><a href="#none"></a></li>
									<li class="ico_save"><a href="#none"></a></li>
									<li class="ico_fb"><a href="#none"></a></li>
								</ul>
							</div>
							
							<div class="frl">
								<ul class="items_foot_view">
									<li class="ico_local"><a href="#none">999</a></li>
									<li class="ico_atlist"><a href="#none">999</a></li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<a href="#none" class="thumb">
							<span class="badge icon_plus">Plus</span>
						<img src="img/products/prod_09.jpg" alt="" class="thumb loaded">
							<p class="txtinfo">
								<em>Dress for Christmas</em>
								<strong class="flt"><span>$ 20</span></strong>
							</p>
						</a>
						<div class="items_foot">
							<div class="flt">
								<ul class="items_foot_opt">
									<li class="ico_local"><a href="#none"></a></li>
									<li class="ico_save"><a href="#none"></a></li>
									<li class="ico_fb"><a href="#none"></a></li>
								</ul>
							</div>
							
							<div class="frl">
								<ul class="items_foot_view">
									<li class="ico_local"><a href="#none">999</a></li>
									<li class="ico_atlist"><a href="#none">999</a></li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<a href="#none" class="thumb">
							<span class="badge icon_plus">Plus</span>
							<img src="img/products/prod_10.jpg" alt="" class="thumb loaded">
							<p class="txtinfo">
								<em>Default Goliath Panola</em>
								<strong class="flt"><span>$ 12.00</span></strong>
							</p>
						</a>
						<div class="items_foot">
							<div class="flt">
								<ul class="items_foot_opt">
									<li class="ico_local"><a href="#none"></a></li>
									<li class="ico_save"><a href="#none"></a></li>
									<li class="ico_fb"><a href="#none"></a></li>
								</ul>
							</div>
							
							<div class="frl">
								<ul class="items_foot_view">
									<li class="ico_local"><a href="#none">999</a></li>
									<li class="ico_atlist"><a href="#none">999</a></li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<a href="#none" class="thumb">
							<span class="badge icon_plus">Plus</span>
							<img src="img/products/prod_11.jpg" alt="" class="thumb loaded">
							<p class="txtinfo">
								<em>Breathing 3 Senjyu</em>
								<strong class="flt"><span>$ 9.50</span></strong>
							</p>
						</a>
						<div class="items_foot">
							<div class="flt">
								<ul class="items_foot_opt">
									<li class="ico_local"><a href="#none"></a></li>
									<li class="ico_save"><a href="#none"></a></li>
									<li class="ico_fb"><a href="#none"></a></li>
								</ul>
							</div>

							<div class="frl">
								<ul class="items_foot_view">
									<li class="ico_local"><a href="#none">999</a></li>
									<li class="ico_atlist"><a href="#none">999</a></li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<a href="#none" class="thumb">
							<span class="badge icon_plus">Plus</span>
							<img src="img/products/prod_12.jpg" alt="" class="thumb loaded">
							<p class="txtinfo">
								<em>Mulpon Corset Bra </em>
								<strong class="flt"><span>$ 12.00</span></strong>
							</p>
						</a>
						<div class="items_foot">
							<div class="flt">
								<ul class="items_foot_opt">
									<li class="ico_local"><a href="#none"></a></li>
									<li class="ico_save"><a href="#none"></a></li>
									<li class="ico_fb"><a href="#none"></a></li>
								</ul>
							</div>
							
							<div class="frl">
								<ul class="items_foot_view">
									<li class="ico_local"><a href="#none">999</a></li>
									<li class="ico_atlist"><a href="#none">999</a></li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
				<!-- //goods_list -->
			</div>

			<div class="pagination">
				<a href="#none" class="pag_prev">next</a>
				<span>
					<a href="#none" class="on">1</a>
					<a href="#none">2</a>
					<a href="#none">3</a>
					<a href="#none">4</a>
					<a href="#none">5</a>
				</span>
				<a href="#none" class="pag_next">next</a>
			</div>

		</div>
		<!-- //container -->
    </div>
	<!-- // container -->

	<!-- footer -->
	<footer>
		<div class="footerwrap">
			<div class="botmenu">
				<a href="#none">Information</a>
				<a href="#none">Terms and Conditions</a>
				<a href="#none">Privacy Policy</a>
				<a href="#none">Terms of Service</a>
			</div>
			<address>
				<p>
					<strong>Address </strong> No.197, Khan Russey Keo, Phnom Penh Cambodia,<br>
					<span><strong>TEL / FAX</strong> 02-598-8240 / 02-598-8241 </span>
				</p>
			</address>
		</div>
		<div class="txtmsg">
			Please Do Not Hesitate to Contact US.<br>
			Copyright ⓒ Online Shopping. All rights reserved
		</div>
	</footer>
	<!-- //footer -->
</div>
<!-- //wrap -->

</body>
</html>
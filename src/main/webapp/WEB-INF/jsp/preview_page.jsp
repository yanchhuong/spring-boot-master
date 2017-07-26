<!doctype html>
<html lang="ko">
<head>

 <%@include file="fragments/include_page.jsp"%>

</head>

<body id="product">

<!-- wrap -->
<div class="wrap">

	<!-- header -->
   	<div class="header_wrap"><!--<div class="header_wrap search">-->
		<!-- header_inner top-bar-wrap -->
        <div class="header_inner">
			<!-- logo -->
            <h1 class="logo"><a href="javascrip:"><img src="img/bg/bg_logo.png" alt="logo"></a></h1>
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
                        <button type="button" class="btn_sch" onclick="gosearchPage()">검색</button>
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
						<a href="javascrip:" class="sidebar_item"><em>Goods</em></a>
						<a href="javascrip:" class="sidebar_faverd"><em>stream</em></a>
						<a href="javascrip:" class="sidebar_following"><em>Follow</em></a>
					</div>
					<dl class="category">
						<dt>
							<strong>Category</strong>
							<button type="button" class="btn_upload"><span>Upload</span></button>
						</dt>
						<dd id="sidebar_catagory_list">
							<a href="javascrip:" class="ctg_01">Women's clothing</a>
							<a href="javascrip:" class="ctg_02">Men's clothing</a>
							<a href="javascrip:" class="ctg_03">Fashion goods</a>
							<a href="javascrip:" class="ctg_04">Beauty / Beauty</a>
							<a href="javascrip:" class="ctg_05">Baby / birth</a>
							<a href="javascrip:" class="ctg_06">sports / Leisure</a>
							<a href="javascrip:" class="ctg_07">digital / Appliances</a>
							<a href="javascrip:" class="ctg_08">Books / tickets / hobbies / pets</a>
							<a href="javascrip:" class="etc_01">Life / stationery / Furniture / Food</a>
							<a href="javascrip:" class="etc_02">Vehicles / Motorcycles</a>
							<a href="javascrip:" class="etc_03">More</a>
							<a href="javascrip:" class="etc_04">stargaz</a>
						</dd>
					</dl>
					<div class="btncenter">
						<button id="sidebar_loginout_btn" type="button" class="btn_wt">LogIn</button>
					</div>
				</div>
			</div>
		</div>
		<!-- //left_navigation_bar -->

		<!-- container_inner -->	
		<div class="container_inner">
			<div class="detailwrap">
				<!-- view_products_images -->
				<div class="slidewrap">
					<div id="slidearea">
						 <ul id="image_gallery">
							<li data-thumb="img/products/cS-1.jpg"><img src="img/products/cS-1.jpg"></li>
							<li data-thumb="img/products/cS-2.jpg"><img src="img/products/cS-2.jpg"></li>
							<li data-thumb="img/products/cS-3.jpg"><img src="img/products/cS-3.jpg"></li>
							<li data-thumb="img/products/cS-4.jpg"><img src="img/products/cS-4.jpg"></li>
							<li data-thumb="img/products/cS-5.jpg"><img src="img/products/cS-5.jpg"></li>
							<li data-thumb="img/products/cS-6.jpg"><img src="img/products/cS-6.jpg"></li>
							<li data-thumb="img/products/cS-7.jpg"><img src="img/products/cS-7.jpg"></li>
							<li data-thumb="img/products/cS-8.jpg"><img src="img/products/cS-8.jpg"></li>
							<li data-thumb="img/products/cS-9.jpg"><img src="img/products/cS-9.jpg"></li>
							<li data-thumb="img/products/cS-10.jpg"><img src="img/products/cS-10.jpg"></li>
							<li data-thumb="img/products/cS-11.jpg"><img src="img/products/cS-11.jpg"></li>
							<li data-thumb="img/products/cS-12.jpg"><img src="img/products/cS-12.jpg"></li>
							<li data-thumb="img/products/cS-13.jpg"><img src="img/products/cS-13.jpg"></li>
							<li data-thumb="img/products/cS-14.jpg"><img src="img/products/cS-14.jpg"></li>
							<li data-thumb="img/products/cS-15.jpg"><img src="img/products/cS-15.jpg"></li>
						</ul>
					</div>
				</div>
				<!-- //view_products_images -->

				<!-- description_wrap -->
				<div class="desc_wrap">
					<!-- products_description -->
					<div class="prod_desc">
						<div class="prod_price">
							<ul>
								<li><p class="prod_name">Man's Clothing</p></li>
								<li><p class="prod_price">9999 $</p></li>
							</ul>
							<div class="other_info">
								<ul class="items_foot_opts">
									<li class="ico_wishlist"><span>999</span></li>
									<li class="ico_view"><span>99999</span></li>
									<li class="ico_report"><a href="javascrip:">Report</a></li>
									<li class="ico_fbshare"><a href="javascrip:"></a></li>
									<li class="ico_time"><span>66:66 min PM</span></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- //products_description -->
	
					<!-- goods_information -->
					<div class="goods_infor">
						<!-- tab -->
						<div class="tabType01 mgb10">
							<ul>
								<li class="on"><a href="javascrip:">Products Detail</a></li>
								<li><a href="javascrip:">Video</a></li>
							</ul>
						</div>
						<!-- //tab -->
						
						<!-- good_text -->
						<div class="good_text tab01" style="display:;">
							This Product come from Korean<br>
							It is so good for us.<br>
							Our Shop have 2 Place Phnom and Kompong Cham<br>
							If you to talk to sell continue...<br>
							Please Contact use : 012 99 99 99/010 43 55 99
						</div>
						<!-- //good_text -->
						
						<!-- good_text -->
						<div class="good_text tab02" style="display:none;">
							<div class="video_player">
								<h5>Video Player</h5>
							</div>
							
							<div class="video_player" style="margin-top:10px;">
								<h5>No Video View</h5>
							</div>
						</div>
						<!-- //good_text -->
					</div>
					<!-- //goods_information -->
				</div>
				<!-- //description_wrap -->

				<!-- comment_view -->
				<div class="comment_wrap view mgt15">
					<div class="comment_tit">
						<h3 class="comm_tit_h3">Comment</h3>
					</div>
					<ul>
						<li>
							<div class="comment">
								<div class="customer"><img src="img/users/customer001.png" alt=""></div>
								<div>
									<h5>CHIN RITHY</h5>
									<p>It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!</p>
								</div>
							</div>
							<div class="comment_opt">
								<ul class="layer_comm_opt">
									<li class="comm_delete"><a href="javascrip:">Delete</a></li>
									<li class="comm_edit"><a href="javascrip:">Edit</a></li>
									<li class="comm_date"><span>12:60 min AM</span></li>
								</ul>
							</div>
						</li>
						<li>
							<div class="comment">
								<div class="customer"><img src="img/users/customer001.png" alt=""></div>
								<div>
									<h5>CHIN RITHY</h5>
									<p>It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!</p>
								</div>
							</div>
							<div class="comment_opt">
								<ul class="layer_comm_opt">
									<li class="comm_delete"><a href="javascrip:">Delete</a></li>
									<li class="comm_edit"><a href="javascrip:">Edit</a></li>
									<li class="comm_date"><span>12:60 min AM</span></li>
								</ul>
							</div>
						</li>
						<li>
							<div class="comment">
								<div class="customer"><img src="img/users/customer001.png" alt=""></div>
								<div>
									<h5>CHIN RITHY</h5>
									<p>It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!</p>
								</div>
							</div>
							<div class="comment_opt">
								<ul class="layer_comm_opt">
									<li class="comm_delete"><a href="javascrip:">Delete</a></li>
									<li class="comm_edit"><a href="javascrip:">Edit</a></li>
									<li class="comm_date"><span>12:60 min AM</span></li>
								</ul>
							</div>
						</li>
						<!--<li>
							<div class="comment">
								<div class="customer"><img src="img/users/customer001.png" alt=""></div>
								<div class="field_comment">
									<textarea name="" placeholder="Your comment" style="height:31px;"></textarea>
									<div class="btn_wrap mgt5 tar">
										<a href="javascrip:" class="btn_b1">Post</a>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="comment">
								<div class="customer"><img src="img/users/customer001.png" alt=""></div>
								<div>
									<textarea name="" placeholder="Your comment">It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!</textarea>
									<div class="btn_wrap mgt5 tar" style="">
										<a href="javascrip:" class="btn_b1">Save</a>
										<a href="javascrip:" class="btn_wh1">Cancel</a>
									</div>
								</div>
							</div>
						</li>-->
					</ul>
				</div>
				<!-- //comment_view -->

				

				<!-- comment_post -->
				<div class="comment_wrap mgt15">
					<ul>
						<li>
							<div class="comment">
								<div class="customer"><img src="img/users/customer001.png" alt=""></div>
								<div class="field_comment">
									<textarea name="" placeholder="Your comment" style="height:31px;"></textarea>
									<div class="btn_wrap mgt5 tar">
										<a href="javascrip:" class="btn_b1">Post</a>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="comment">
								<div class="customer"><img src="img/users/customer001.png" alt=""></div>
								<div>
									<textarea name="" placeholder="Your comment">It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!It is the best Products for me!!!!</textarea>
									<div class="btn_wrap mgt5 tar" style="">
										<a href="javascrip:" class="btn_b1">Save</a>
										<a href="javascrip:" class="btn_wh1">Cancel</a>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<!-- //comment_post -->

				<!-- pagination -->
				<div class="pagination mgb15">
					<a href="javascrip:" class="pag_prev">next</a>
					<span>
						<a href="javascrip:" class="on">1</a>
						<a href="javascrip:">2</a>
						<a href="javascrip:">3</a>
						<a href="javascrip:">4</a>
						<a href="javascrip:">5</a>
					</span>
					<a href="javascrip:" class="pag_next">next</a>
				</div>
				<!-- //pagination -->

				<!-- seller_information[Owner] -->
				<div class="sellerwrap">
					<div class="seller_inner">
						<div class="sellershop">
							<a href="javascrip:">
								<dl>
									<dt>
										<p>Shoping Online<span>'s shop</span></p>
									</dt>
									<dd class="info">
										<span> Open 723 days</span>
										<span>Products 9999 Items</span>
									</dd>
									<dd class="photo"><img src="img/users/users.jpg" alt="" class="loaded"></dd>
								</dl>
							</a>
						</div>
	
						<!-- Seller_Information -->
						<div class="seller_info">
							<p class="sell_user">: Chin Rithy</p>
							<p class="sell_tel">: 0968609973</p>
							<p class="sell_localtion">: Phnom Penh</p>
							<p class="sell_map">: House 38 Street 360 about 200m from Toul Sleng Museum Sangkat BKK3 Khan Chamkarmorn Phnom Penh</p>
						</div>
						<!-- //Seller_Information -->
	
						<!-- button_wrap -->
						<div class="btn_wrap">
							<a href="javascrip:" class="btn_visitshop">Visit Shop</a>
						</div>
						<!-- //button_wrap -->
	
						<!-- button_wrap -->
						<div class="btn_wrap mgt15">
							<a href="javascrip:" class="btn_follow">Follow</a>
							<a href="javascrip:" class="btn_chat">Chat</a>
						</div>
						<!-- //button_wrap -->
					</div>

					<!-- seller_other_option -->
					<div class="seller_other_opt">
						<!-- app_for mobile -->
						<div class="app_mobile">
							<h5>Please Mobile App</h5>
						</div>
						<!-- //app_for mobile -->
					</div>
					<!-- //seller_other_option -->
				</div>
				<!-- //seller_information[Owner] -->
				
				<!-- related_products -->
				<div class="related_prod">
					<div class="tit_rel_prod">
						<h3 class="tit_relprod_h3">Related Products</h3>
						<a href="javascrip:" class="btn_recollape">View More</a>
					</div>
					
					<!-- goods_list -->
					<ul class="goodslist_detail">
						<li>
							<a href="javascrip:" class="thumb">
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
										<li class="ico_local"><a href="javascrip:"></a></li>
										<li class="ico_save"><a href="javascrip:"></a></li>
										<li class="ico_fb"><a href="javascrip:"></a></li>
									</ul>
								</div>
								
								<div class="frl">
									<ul class="items_foot_view">
										<li class="ico_local"><a href="javascrip:">999</a></li>
										<li class="ico_atlist"><a href="javascrip:">999</a></li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<a href="javascrip:" class="thumb">
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
										<li class="ico_local"><a href="javascrip:"></a></li>
										<li class="ico_save"><a href="javascrip:"></a></li>
										<li class="ico_fb"><a href="javascrip:"></a></li>
									</ul>
								</div>
								
								<div class="frl">
									<ul class="items_foot_view">
										<li class="ico_local"><a href="javascrip:">999</a></li>
										<li class="ico_atlist"><a href="javascrip:">999</a></li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<a href="javascrip:" class="thumb">
								<img src="img/products/prod_03.jpg" alt="" class="thumb loaded">
								<p class="txtinfo">
									<em>Mmolded horn nt</em>
									<strong class="flt"><span>$ 28</span></strong>
								</p>
							</a>
							<div class="items_foot">
								<div class="flt">
									<ul class="items_foot_opt">
										<li class="ico_local"><a href="javascrip:"></a></li>
										<li class="ico_save"><a href="javascrip:"></a></li>
										<li class="ico_fb"><a href="javascrip:"></a></li>
									</ul>
								</div>
								
								<div class="frl">
									<ul class="items_foot_view">
										<li class="ico_local"><a href="javascrip:">999</a></li>
										<li class="ico_atlist"><a href="javascrip:">999</a></li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<a href="javascrip:" class="thumb">
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
										<li class="ico_local"><a href="javascrip:"></a></li>
										<li class="ico_save"><a href="javascrip:"></a></li>
										<li class="ico_fb"><a href="javascrip:"></a></li>
									</ul>
								</div>
								
								<div class="frl">
									<ul class="items_foot_view">
										<li class="ico_local"><a href="javascrip:">999</a></li>
										<li class="ico_atlist"><a href="javascrip:">999</a></li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<a href="javascrip:" class="thumb">
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
										<li class="ico_local"><a href="javascrip:"></a></li>
										<li class="ico_save"><a href="javascrip:"></a></li>
										<li class="ico_fb"><a href="javascrip:"></a></li>
									</ul>
								</div>
								
								<div class="frl">
									<ul class="items_foot_view">
										<li class="ico_local"><a href="javascrip:">999</a></li>
										<li class="ico_atlist"><a href="javascrip:">999</a></li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<a href="javascrip:" class="thumb">
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
										<li class="ico_local"><a href="javascrip:"></a></li>
										<li class="ico_save"><a href="javascrip:"></a></li>
										<li class="ico_fb"><a href="javascrip:"></a></li>
									</ul>
								</div>
								
								<div class="frl">
									<ul class="items_foot_view">
										<li class="ico_local"><a href="javascrip:">999</a></li>
										<li class="ico_atlist"><a href="javascrip:">999</a></li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<a href="javascrip:" class="thumb">
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
										<li class="ico_local"><a href="javascrip:"></a></li>
										<li class="ico_save"><a href="javascrip:"></a></li>
										<li class="ico_fb"><a href="javascrip:"></a></li>
									</ul>
								</div>
								
								<div class="frl">
									<ul class="items_foot_view">
										<li class="ico_local"><a href="javascrip:">999</a></li>
										<li class="ico_atlist"><a href="javascrip:">999</a></li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<a href="javascrip:" class="thumb">
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
										<li class="ico_local"><a href="javascrip:"></a></li>
										<li class="ico_save"><a href="javascrip:"></a></li>
										<li class="ico_fb"><a href="javascrip:"></a></li>
									</ul>
								</div>
	
								<div class="frl">
									<ul class="items_foot_view">
										<li class="ico_local"><a href="javascrip:">999</a></li>
										<li class="ico_atlist"><a href="javascrip:">999</a></li>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<a href="javascrip:" class="thumb">
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
										<li class="ico_local"><a href="javascrip:"></a></li>
										<li class="ico_save"><a href="javascrip:"></a></li>
										<li class="ico_fb"><a href="javascrip:"></a></li>
									</ul>
								</div>
								
								<div class="frl">
									<ul class="items_foot_view">
										<li class="ico_local"><a href="javascrip:">999</a></li>
										<li class="ico_atlist"><a href="javascrip:">999</a></li>
									</ul>
								</div>
							</div>
						</li>
					</ul>
					<!-- //goods_list -->
				</div>
				<!-- //related_products -->
			</div>
		</div>
		<!-- //container_inner -->
	</div>
	<!-- //container -->

	<!-- footer -->
	<footer>
		<div class="footerwrap">
			<div class="botmenu">
				<a href="javascrip:">Information</a>
				<a href="javascrip:">Terms and Conditions</a>
				<a href="javascrip:">Privacy Policy</a>
				<a href="javascrip:">Terms of Service</a>
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
 <script type="text/javascript">
	 $(document).ready(function() {
		$('#image_gallery').lightSlider({
			gallery:true,
			item:1,
			thumbItem:7,
			slideMargin: 0,
			speed:500,
			auto:false,
			loop:true,
			onSliderLoad: function() {
				$('#image_gallery').removeClass('cS-hidden');
			}  
		});
		
		$('.comment_opt').generPlugIn({
			btnCombo	:	'.btn_comment_opt',
			layerCom	:	'.layer_comm_opt'
		});
		
		$('.related_prod').readMoreDetPage();
	});
</script>
</body>
</html>
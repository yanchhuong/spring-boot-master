<!DOCTYPE html>
<!-- saved from url=(0051)http://tz-private-webchat.herokuapp.com/chat/585374 -->
<html style="background-attachment: scroll;"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

	<title>Private chat room | Tutorialzine Demo</title>

	<link href="./Private chat room _ Tutorialzine Demo_files/css" rel="stylesheet" type="text/css">
	
	<link rel="stylesheet" type="text/css" href="../css/realtimechat.css" media="all"> 


<style type="text/css">		#bsaHolder{				right: 25px;position: absolute;	top: 0;	width: 345px;z-index: 10;}		#bsaHolder span{		text-shadow:1px 1px 0 #fff;}		#bsap_aplink,		#bsap_aplink:visited{	bottom: 10px;color: #aaa;font: 11px arial, sans-serif;position: absolute;right: 14px;border:none;}		#bsaHolder .bsa_it_p{	display:none;}		#bsaHolder .bsa_it_ad{	background: -moz-linear-gradient(#F3F3F3, #FFFFFF, #F3F3F3) repeat scroll 0 0 transparent; background: -webkit-gradient(linear,0% 0%,0% 100%,color-stop(0, #f3f3f3),color-stop(0.5, #fff),color-stop(1, #f3f3f3)); background-color:#f4f4f4;								border-color: #fff;overflow: hidden;padding: 10px 10px 0;-moz-box-shadow: 0 0 2px #999;-webkit-box-shadow: 0 0 2px #999;box-shadow: 0 0 2px #999;								-moz-border-radius: 0 0 4px 4px;-webkit-border-radius: 0 0 4px 4px;border-radius: 0 0 4px 4px;}		#bsaHolder img{			display:block;border:none;}		#bsa_closeAd{			width:15px;height:15px;overflow:hidden;position:absolute;top:10px;right:11px;border:none !important;z-index:1;								text-decoration:none !important;background:url("http://cdn.tutorialzine.com/misc/enhance/x_icon.png") no-repeat;}		#bsa_closeAd:hover{		background-position:left bottom;}	</style><script id="_carbonads_projs" type="text/javascript" src="./Private chat room _ Tutorialzine Demo_files/C6AILKT.json"></script><style id="_legacy_carbonads_css">.one{position:relative}.one .bsa_it_ad{display:block;padding:15px;border:1px solid #e1e1e1;background:#f9f9f9;font-family:helvetica,arial,sans-serif;line-height:100%;position:relative}.one .bsa_it_ad a{text-decoration:none}.one .bsa_it_ad a:hover{text-decoration:none}.one .bsa_it_ad .bsa_it_t{display:block;font-size:12px;font-weight:bold;color:#212121;line-height:125%;padding:0 0 5px 0}.one .bsa_it_ad .bsa_it_d{display:block;color:#434343;font-size:12px;line-height:135%}.one .bsa_it_ad .bsa_it_i{float:left;margin:0 15px 10px 0}body .one .bsa_it_p{text-align:center;display:block !important}.one .bsa_it_p a{font-size:10px;color:#666;text-decoration:none}.one .bsa_it_ad .bsa_it_p a:hover{font-style:italic}</style><script type="text/javascript" src="./Private chat room _ Tutorialzine Demo_files/saved_resource"></script></head>

<body>

	<header class="banner">

		<h1 class="bannertext">
			<a href="http://tutorialzine.com/2014/03/nodejs-private-webchat/" id="logo">Tutorial<span>zine</span>: NODE.JS CHAT TUTORIAL</a>
		</h1>

	</header>


	<section class="section">

		<!-- These elements are displayed as white info cards in the middle of the screen -->

		<div class="connected" style="display: none;">

			<img src="./Private chat room _ Tutorialzine Demo_files/unnamed.jpg" id="creatorImage">

			<div class="infoConnected">
				<h2>Who are you?</h2>
				<br>

				<form class="loginForm">
					<input type="text" id="yourName" placeholder="Your nick name"><br>
					<input type="text" id="yourEmail" placeholder="Your email address"><br>
					<input type="submit" id="yourEnter" value="ENTER">
				</form>

			</div>

		</div>

		<div class="personinside" style="display: none;">

			<img src="./Private chat room _ Tutorialzine Demo_files/unnamed.jpg" id="ownerImage">

			<div class="infoInside">
				<h2>Chat with <span class="nickname-chat">TT</span></h2>
				<br>

				<form class="loginForm">
					<input type="text" id="hisName" placeholder="Your nick name"><br>
					<input type="text" id="hisEmail" placeholder="Your email address"><br>
					<input type="submit" id="hisEnter" value="CHAT">
				</form>

			</div>

		</div>

		<div class="invite-textfield" style="display: none;">

			<h2>Oops, there are no other people in this chat!</h2>
			<h5>Invite a friend by sending them this URL</h5>

			<div class="link">
				<a title="Invite a friend" href="http://tz-private-webchat.herokuapp.com/chat/585374" id="link">http://tz-private-webchat.herokuapp.com/chat/585374</a>
			</div>

		</div>

		<div class="left" style="display: none;">

			<img src="./Private chat room _ Tutorialzine Demo_files/unnamed.jpg" id="leftImage">

			<div class="info">
				<h2><span class="nickname-left"></span> has left this chat.</h2>
				<h5>Invite somebody else by sending them this page.</h5>
			</div>

		</div>

		<div class="toomanypeople" style="display: none;">

			<h2>Oops, you can not join this chat!</h2>
			<h5>There are already two people in it. Would you like to create a <a title="New Room" href="http://tz-private-webchat.herokuapp.com/create" id="room">new room</a>?</h5>

		</div>

		<div class="nomessages" style="display: none;">

			<img src="./Private chat room _ Tutorialzine Demo_files/63b52f7b24dad3646b3f8d2283220461" id="noMessagesImage">

			<div class="info">
				<h2>You are chatting with <span class="nickname-chat">TT</span>.</h2>
				<h5>Send them a message from the form below!</h5>
			</div>

		</div>

		<div class="chatscreen" style="display: block;">

			<ul class="chats"><li class="you"><div class="image"><img src="./Private chat room _ Tutorialzine Demo_files/63b52f7b24dad3646b3f8d2283220461"><b>TT</b><i class="timesent" data-time="1469175234935">9 minutes ago</i> </div><p>sdfasf</p></li><li class="me"><div class="image"><img src="./Private chat room _ Tutorialzine Demo_files/bc7025792de200a662ccaccf037ad530"><b>yanchhuong</b><i class="timesent" data-time="1469175239799">9 minutes ago</i> </div><p>hello</p></li><li class="you"><div class="image"><img src="./Private chat room _ Tutorialzine Demo_files/63b52f7b24dad3646b3f8d2283220461"><b>TT</b><i class="timesent" data-time="1469175244517">9 minutes ago</i> </div><p>hhh</p></li><li class="you"><div class="image"><img src="./Private chat room _ Tutorialzine Demo_files/63b52f7b24dad3646b3f8d2283220461"><b>TT</b><i class="timesent" data-time="1469175246575">9 minutes ago</i> </div><p>hhdhd]</p></li><li class="you"><div class="image"><img src="./Private chat room _ Tutorialzine Demo_files/63b52f7b24dad3646b3f8d2283220461"><b>TT</b><i class="timesent" data-time="1469175249188">9 minutes ago</i> </div><p>ddhhd]</p></li><li class="me"><div class="image"><img src="./Private chat room _ Tutorialzine Demo_files/bc7025792de200a662ccaccf037ad530"><b>yanchhuong</b><i class="timesent" data-time="1469175288573">8 minutes ago</i> </div><p>hesadf</p></li><li class="me"><div class="image"><img src="./Private chat room _ Tutorialzine Demo_files/bc7025792de200a662ccaccf037ad530"><b>yanchhuong</b><i class="timesent" data-time="1469175313587">7 minutes ago</i> </div><p>gfh</p></li><li class="me"><div class="image"><img src="./Private chat room _ Tutorialzine Demo_files/bc7025792de200a662ccaccf037ad530"><b>yanchhuong</b><i class="timesent" data-time="1469175315247">7 minutes ago</i> </div><p>gh</p></li><li class="me"><div class="image"><img src="./Private chat room _ Tutorialzine Demo_files/bc7025792de200a662ccaccf037ad530"><b>yanchhuong</b><i class="timesent" data-time="1469175317130">7 minutes ago</i> </div><p>hgg</p></li><li class="me"><div class="image"><img src="./Private chat room _ Tutorialzine Demo_files/bc7025792de200a662ccaccf037ad530"><b>yanchhuong</b><i class="timesent" data-time="1469175708891">a minute ago</i> </div><p>ki</p></li><li class="me"><div class="image"><img src="./Private chat room _ Tutorialzine Demo_files/bc7025792de200a662ccaccf037ad530"><b>yanchhuong</b><i class="timesent" data-time="1469175713145">a minute ago</i> </div><p>kkj</p></li><li class="me"><div class="image"><img src="./Private chat room _ Tutorialzine Demo_files/bc7025792de200a662ccaccf037ad530"><b>yanchhuong</b><i class="timesent" data-time="1469175714969">a minute ago</i> </div><p>ikkk</p></li><li class="me"><div class="image"><img src="./Private chat room _ Tutorialzine Demo_files/bc7025792de200a662ccaccf037ad530"><b>yanchhuong</b><i class="timesent" data-time="1469175716738">a minute ago</i> </div><p>kj</p></li><li class="me"><div class="image"><img src="./Private chat room _ Tutorialzine Demo_files/bc7025792de200a662ccaccf037ad530"><b>yanchhuong</b><i class="timesent" data-time="1469175718226">a few seconds ago</i> </div><p>jj</p></li><li class="me"><div class="image"><img src="./Private chat room _ Tutorialzine Demo_files/bc7025792de200a662ccaccf037ad530"><b>yanchhuong</b><i class="timesent" data-time="1469175719698">a few seconds ago</i> </div><p>jj</p></li><li class="me"><div class="image"><img src="./Private chat room _ Tutorialzine Demo_files/bc7025792de200a662ccaccf037ad530"><b>yanchhuong</b><i class="timesent" data-time="1469175730448">a few seconds ago</i> </div><p>dfdsfs</p></li><li class="me"><div class="image"><img src="./Private chat room _ Tutorialzine Demo_files/bc7025792de200a662ccaccf037ad530"><b>yanchhuong</b><i class="timesent" data-time="1469175735664">a few seconds ago</i> </div><p>sdfdsf</p></li><li class="me"><div class="image"><img src="./Private chat room _ Tutorialzine Demo_files/bc7025792de200a662ccaccf037ad530"><b>yanchhuong</b><i class="timesent" data-time="1469175739184">a few seconds ago</i> </div><p>xcvsdf</p></li></ul>

		</div>

	</section>

	<footer style="display: block;">

		<form id="chatform">

			<textarea id="message" placeholder="Write something.."></textarea>
			<input type="submit" id="submit" value="SEND">

		</form>

	</footer>

	<script src="./Private chat room _ Tutorialzine Demo_files/jquery.min.js"></script>
	<script src="./Private chat room _ Tutorialzine Demo_files/moment.min.js"></script>
	<script src="./Private chat room _ Tutorialzine Demo_files/socket.io.js"></script>
	<script src="./Private chat room _ Tutorialzine Demo_files/chat.js"></script>

</body></html>
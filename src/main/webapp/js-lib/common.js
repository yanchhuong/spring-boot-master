$(document).ready(function(){

	$('.tabType01').find('a').click(function(){
		$(this).parent('li').addClass('on');
		$(this).parent('li').siblings().removeClass('on');
		var liIndex	=	$(this).parent('li').index()+1;
		var cls		=	".tab0"+liIndex;
		$('.good_text').css({"display":"none"});
		$(cls).css({"display":"block"});
	});

	/* Mobile */
	$('.btn_gnb').click(function(){
		$("#gnb").animate({width:100+"%"},300);
		$('#container').css({"z-index":"999"});
	});

	$('.btn_gnbclose').click(function(){
		$('#gnb').animate({width:0+"px"},300,function(){ $('#container').css({"z-index":"880"}); });
		
	});

	$(window).resize(function(e) {
		$("#gnb").removeAttr("style");
		$('#container').css({"z-index":"880"});
	});

	/* Area Remove Sub Category */
	$('.btn_subCatClose').click(function(){
		var $this	=	$(this);
		$(this).parents('.sub_cat').slideUp(300);
	});


	$('.ctglist').readMore();
	$('.cstselect').generPlugIn();

});
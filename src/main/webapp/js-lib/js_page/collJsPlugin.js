// JavaScript Document
$(document).ready(function(){
	$.fn.readMore	=	function(opts){
		var minHeight	=	164+"px";
		var maxHeight 	=	$(this).children('ul').height();
		
		$(this).children('ul').css({'height':minHeight,'overflow':'hidden'});
		$('body').delegate('.btn_more','click',function(){
			$(this).prev('ul').animate({height:maxHeight+"px"},300);
			$(this).addClass('read_few');
			$(this).find('.btn_text').text("Show Less");
		});
		$('body').delegate('.read_few','click',function(){
			$(this).prev('ul').animate({height:minHeight},300).stop();
			$(this).find('.btn_text').text("Show More");
			$(this).removeClass('read_few');
		});
	};
	
	$.fn.readMoreDetPage	=	function(opts){
		var minHeight	=	$(this).children('ul.goodslist_detail').find('li:first-child').height()+22;
		var maxHeight 	=	$(this).children('ul.goodslist_detail').height();
		
		$(this).children('ul').css({'height':minHeight,'overflow':'hidden'});
		$('body').delegate('.btn_recollape','click',function(){
			$(this).parent('div.tit_rel_prod').next('ul.goodslist_detail').animate({height:maxHeight+"px"},300);
			$(this).addClass('read_few');
			$(this).text("Show Less");
		});
		$('body').delegate('.read_few','click',function(){
			$(this).parent('div.tit_rel_prod').next('ul.goodslist_detail').animate({height:minHeight},300).stop();
			$(this).text("Show More");
			$(this).removeClass('read_few');
		});
	};


	var methods	=	{

		comboBox:	function(btn,lay){
			$(btn).click(function(e){
				e.stopPropagation();
				$(this).nextAll(lay).slideDown();
			});
		
			$(document).click(function(e){
				e.stopPropagation();
				$(lay).slideUp();
			});
			
			$(lay).find('a').click(function(evt){
				evt.stopPropagation();
				$(this).parents(lay).slideUp();
			});
		},
		
		textCount	:	function(slc){
			var len = $(slc).val().length;
			 if(len >= 160) {
				$('.count_text').text("Sorry You can input only 160 Charactor");
			 }else{
				 $('.txtCurlen').text(len);
			 }
		}
	};
	
	$.fn.generPlugIn	=	function(opts){
		var setting	=	$.extend({
			btnCombo	:	'.selected',
			layerCom	:	'.layselected',
			textCount	:	false,
		},opts);
		
		if(setting.btnUpload===true){
			$('.btn_browse').click(function(e){
				e.stopPropagation();
				$('#uploadfile').trigger('click');
			});
		}

		if(setting.textCount===true){
			$('.textCount').keyup(function(e) {
				methods.textCount('.textCount');
			});
		}

		if($(setting.btnCombo).length <= 0){
			///alert("This Element ("+setting.btnCombo+") Don't Have.");	
		}
		
		if($(setting.layerCom).length <= 0){
			///alert("This Element ("+setting.layerCom+") Don't Have.");	
		}

		if($(setting.btnCombo).length > 0 && $(setting.layerCom).length > 0){
			methods.comboBox(setting.btnCombo,setting.layerCom);
		}			
	};
});
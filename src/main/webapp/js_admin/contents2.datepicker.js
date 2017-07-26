//document.write('<link rel="stylesheet" type="text/css" href="/js/schd_mngm/datepicker/contents2_jquery-ui.css"/>');
//document.write('<script src="/js/jquery.datepicker/jquery.min.js"></script>');
//document.write('<script src="/js/jquery.datepicker/jquery-ui.min.js"></script>');

var contents;
if(!contents) contents ={};
if(!contents.datepicker) contents.datepicker={};




$(document).ready(function () {
    $.datepicker.regional['ko'] = {
		dateFormat			:'yy-mm-dd',
		monthNamesShort		: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNamesMin			: ['일','월','화','수','목','금','토'],
		changeMonth			: true,
		changeYear			: true,
		showMonthAfterYear 	: true,
		onClose				: function(e){
		    //var date = new Date($(this).datepicker({ dateFormat: 'yy-mm-dd' }).val()); 
			var tmpSeldate 	= fn_null2void($(this).val(),"").replace(/-/g,"");
			//console.log("tmpSeldate : " +$(this).val());
		    var date 		= new Date(Number(tmpSeldate.substr(0,4)), Number(tmpSeldate.substr(4,2))-1, Number(tmpSeldate.substr(6,2)));
		    week 			= new Array('(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'); 
		     	
		    if (week[date.getDay()]!== undefined){ 
		    	
		    	// 기존 날짜 inputbox에 세팅되어있던 값에서 년월일만 추출 
		    	var existDate 	= fn_null2void($(this).val(),"");
		    	existDate 		= existDate.substring(0,10);
		    	//console.log("existDate : " +$(this).val());
		    	
		    	// 년월일 + 요일
		    	//$(this).val(existDate + " " + week[date.getDay()]);
		    } 
	    	
		} 
		
    };
    $.datepicker.setDefaults($.datepicker.regional['ko']);

});

function fn_null2void(dat) {
	if (dat == null || typeof dat == "undefined")
		return "";
	else
		return dat;
}

/*
window.onload = funtion(){
	//DatePicker 크기수정  ie 구분
	var agt = navigator.userAgent.toLowerCase();
	if(agt.indexOf("msie") > -1 || agt.indexOf("trident") > -1){
		$("#ui-datepicker-div").css({"top":"134px"});//$("#ui-datepicker-div").css({"top":"134px"});
	}else{
		$("#ui-datepicker-div").css({"top":"0px"});
	}
};
*/
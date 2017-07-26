var wehrm;
if(!wehrm) wehrm={};	

if(!wehrm.string) {
	wehrm.string={};
	
	//@@ Add Camma per 3digits
	wehrm.string.numberWithCommas = function(str) {
		if(str == null || str == "") return "";
		return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		//return str.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, ",");
	};
	
	wehrm.string.removeAllCommas = function(str){
		return str.replace(/,/g, "");
	};

	wehrm.string.removeAllString = function(str) {
		return str.replace(/[^0-9\.]/g, '');
	};
		
	//@@ zero pad
	wehrm.string.zeroPad = function(num, places) {
		var zero = places - num.toString().length + 1;
	  	return Array(+(zero > 0 && zero)).join("0.") + num;
	};
	
	//@@ lpad
	wehrm.string.lPad = function(str,z){
		z = z || '0';
		str = str + '';
		return str.length >= 4 ? str : new Array(4 - str.length + 1).join(z) + str;
		
	};
	
	//@@ format Date
	wehrm.string.formatDate = function(str, format){
		if(str == "" || str == undefined) str = "";
		if(format == undefined) format = "-";
		if(str.length == 10)
			str = str.replace(/-/g,"");
		return str.substr(0,8).replace(/(\d{4})(\d{2})(\d{2})/, "$1"+format+"$2"+format+"$3");
	};
	
	//@@ format DateTime
	wehrm.string.formatDateTime = function(str, format){
		if(str == "" || str == undefined) str = "";
		if(format == undefined) format = "-";
		
		return str.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1"+format+"$2"+format+"$3 $4:$5:$6");
	};
	
	//@@ format Time
	wehrm.string.formatTime = function(str, format){
		if(str == "" || str == undefined) str = "";
		if(format == undefined) format = ":";
		return str.substr(8,12).replace(/(\d{2})(\d{2})(\d{2})/, "$1"+format+"$2"+format+"$3");
	};
	
	//@@ format Time 6 digit
	wehrm.string.formatTimeSixDigit = function(str, format){
		if(str == "" || str == undefined) str = "";
		if(format == undefined) format = ":";
		return str.substr(0,4).replace(/(\d{2})(\d{2})/, "$1"+format+"$2");
	};
	wehrm.string.cnts_Null2Void = function(value, str){
		if(value==null ||  value=="" || typeof(value)== undefined || value=="null" || value==undefined || value=="undefined") {
			return (typeof(str)=="string")?str:"";
		} else {
			return value;
		}
	};
	
	//@@ format number to korean name
	wehrm.string.viewKoreanNum = function(num) { 
	     var hanA = new Array("","일","이","삼","사","오","육","칠","팔","구","십");
	     var danA = new Array("","십","백","천","","십","백","천","","십","백","천","","십","백","천");
	     var result = "";
		  for(var i=0; i<num.length; i++) {  
		   str = "";
		   han = hanA[num.charAt(num.length-(i+1))];
		   if(han != "")
		    str += han+danA[i];
		   if(i == 4) str += "만";
		   if(i == 8) str += "억";
		   if(i == 12) str += "조";
		   result = str + result;
		  };
		  if(num != 0){
		   result = result + "원";
		   return result;
		  }
	};
	
	//Format RR_NO
	wehrm.string.formatRrNo = function(num,star) {
		var result = num;
		result = result.replace(/-/g,"");
		result = result.replace(/\s/g,"");
		if(!star) star = false;
		if(result.length == 13){
			if(star){
				result = result.substring(0,result.length-6).replace(/(\d{6})(\d{1})/, "<span class='no1'>$1</span><span class='bar'>-</span><span class='no2'>$2******</span>");
			}else{
				result = result.replace(/(\d{6})(\d{7})/, "<span class='no1'>$1</span><span class='bar'>-</span><span class='no2'>$2</span>");
			}
		}
		return result;
	}
	
	wehrm.string.formatPhoneNo = function(str,format) {
		if(str == "" || str == undefined) str = "";
		if(format == undefined) format = "-";
		str = str.replace(/[^0-9\.]/g, '');
		if(str.length == 11){
			return str.replace(/(\d{3})(\d{4})(\d{4})/, "$1"+format+"$2"+format+"$3");
		}else if(str.length == 10){
			return str.replace(/(\d{2})(\d{4})(\d{4})/, "$1"+format+"$2"+format+"$3");
		}else{
			return str;
		} 
	};

	wehrm.string.formatEmpSsn = function(str, format) {
		if(str == "" || str == undefined) str = "";
		if(format == undefined) format = "-";
		str = str.replace(/[^0-9\.]/g, '');
		if(str.length == 13){
			return str.replace(/(\d{6})(\d{7})/, "$1"+format+"$2");
		}else{
			return str;
		} 
	};
	
};

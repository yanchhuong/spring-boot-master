var wehrm;

if(!wehrm) wehrm={};

if(!wehrm.popup) {
	wehrm.popup={};	
	wehrm.popup.callbackFn = {};
	wehrm.popup.ndvd_input = {};
	
	wehrm.popup.modalOptions = {
		modalClose: false,
		follow: [true, true],
		opacity: 0.3,
		//follow: true,
		escClose: false
	};

	wehrm.popup.messageOptions = {
		modal: false,
		opacity: 0.3
	};
}

// test
//wehrm.popup.show = function(service, callback) {
//	var tags = [
//	    '<div id="div_' + service + '" style="position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; z-index: 999;">',
//	    '  <div class="bg" style="position:absolute; top:0; left:0; width:100%; height:100%; background:#000; opacity:.5; filter:alpha(opacity=50);"></div>',
//	    '  <div style="display: block; position: absolute; top: 50%; left: 50%; width: 950px; height: 550px; border: 0px solid rgb(53, 113, 181); z-index: 10; margin-top: -275px; margin-left: -475px; background-color: rgb(255, 255, 255);">',
//	    '    <div class="pop-container">',
//	    '      <div class="pop-conts">',
//	    '        <iframe id="' + service + '_iframe" src="' + service + '.act" scrolling="yes" frameborder="0" marginheight="0" marginwidth="0" style="width:100%;height:550px;min-height:100px;border:0px;">',
//	    '        </iframe>',
//	    '      </div>',
//	    '    </div>',
//	    '  </div>',
//	    '</div>'
//    ];
//	
//	$('body').append(tags.join(''));
//};

//wehrm.popup.hide = function(service) {
//	$('body').find('#div_' + service).remove();
//};

wehrm.popup.openPopupDvsnList = function(wsvcId, input, callbackFn, topHeight) {
	//console.log(wsvcId+"_iframe");
	wehrm.popup.callbackFn[wsvcId] = callbackFn;
//	var iframe =  parent.document.getElementById(wsvcId+"_iframe");
	var iframe =  document.getElementById(wsvcId+"_iframe");
	if(typeof(parent) != undefined) {
//		parent.wehrm.ui.createProgressBar();
	}
	
//	$(iframe).load(function() {
	
//		parent.$(iframe).bPopup(wehrm.popup.modalOptions);
		//$(iframe).bPopup(wehrm.popup.modalOptions);
		$(iframe).bPopup({position:['auto',45],follow: [true, true]});
		//{position:['auto',45],follow: [true, true]}
		if(typeof(parent) != undefined) {
//			parent.wehrm.ui.destroyProgressBar();
		}
		/*if(topHeight != "" && topHeight != null){
			parent.$(iframe).css({top: topHeight});
		} else {
			parent.$(iframe).css({top: "90px"});
		}*/

//	});

	
	var param = "";
	if(typeof input != "undefined"){
		param =  "?input=" + encodeURIComponent(jex.toStr(input));
	}
	
	
	$(iframe).attr("src", wsvcId+".act" + param);
	$(iframe).find()
//	$(iframe).attr("src", wsvcId+".act?input=" + encodeURIComponent(jex.toStr(input)));
};

//general openPopup
wehrm.popup.openPopup = function(wsvcId, input, callbackFn, topHeight) { 
	//console.log(wsvcId+"_iframe");
	wehrm.popup.callbackFn[wsvcId] = callbackFn;
//	var iframe =  parent.document.getElementById(wsvcId+"_iframe");
	var iframe =  document.getElementById(wsvcId+"_iframe");
	if(typeof(parent) != undefined) {
//		parent.wehrm.ui.createProgressBar();
	}
	
//	$(iframe).load(function() {
	
//		parent.$(iframe).bPopup(wehrm.popup.modalOptions);
		//$(iframe).bPopup(wehrm.popup.modalOptions);
		if(topHeight != "" && topHeight != null){
			$(iframe).bPopup({position:['auto',topHeight],follow: [true, true]});
		}else
			$(iframe).bPopup({position:['auto',45],follow: [true, true]});
		
		if(typeof(parent) != undefined) {
//			parent.wehrm.ui.destroyProgressBar();
		}
		/*if(topHeight != "" && topHeight != null){
			parent.$(iframe).css({top: topHeight});
		}*/
		/*if(topHeight != "" && topHeight != null){
			parent.$(iframe).css({top: topHeight});
		} else {
			parent.$(iframe).css({top: "90px"});
		}*/

//	});

	
	var param = "";
	if(typeof input != "undefined"){
		param =  "?input=" + encodeURIComponent(jex.toStr(input));
	}
	
	
	$(iframe).attr("src", wsvcId+".act" + param);
//	$(iframe).attr("src", wsvcId+".act?input=" + encodeURIComponent(jex.toStr(input)));
};

wehrm.popup.openPopup2 = function(wsvcId, input, callbackFn, topHeight) {
	//console.log(wsvcId+"_iframe");
	wehrm.popup.callbackFn[wsvcId] = callbackFn;
//	var iframe =  parent.document.getElementById(wsvcId+"_iframe");
	var iframe =  document.getElementById(wsvcId+"_iframe");
	if(typeof(parent) != undefined) {
//		parent.wehrm.ui.createProgressBar();
	}
	
//	$(iframe).load(function() {
	
//		parent.$(iframe).bPopup(wehrm.popup.modalOptions);
		//$(iframe).bPopup(wehrm.popup.modalOptions);
		$(iframe).bPopup({position:['auto',45],follow: [true, true]});
		if(typeof(parent) != undefined) {
//			parent.wehrm.ui.destroyProgressBar();
		}
		/*if(topHeight != "" && topHeight != null){
			parent.$(iframe).css({top: topHeight});
		} else {
			parent.$(iframe).css({top: "90px"});
		}*/

//	});

	
	var param = "";
	if(typeof input != "undefined"){
		var param = "?" + Object.keys(input).map(function(key){ 
			  return encodeURIComponent(key) + '=' + encodeURIComponent(input[key]); 
			}).join('&');
		//param =  "?" + encodeURIComponent(input);
	}
	
	
	$(iframe).attr("src", wsvcId+".act" + param);
//	$(iframe).attr("src", wsvcId+".act?input=" + encodeURIComponent(jex.toStr(input)));
};

// #5035
wehrm.popup.openPopup3 = function(wsvcId, input, callbackFn, topHeight) {
	//console.log(wsvcId+"_iframe");
	wehrm.popup.callbackFn[wsvcId] = callbackFn;
//	var iframe =  parent.document.getElementById(wsvcId+"_iframe");
	var iframe =  document.getElementById(wsvcId+"_iframe");
	if(typeof(parent) != undefined) {
//		parent.wehrm.ui.createProgressBar();
	}
	
//	$(iframe).load(function() {
	
//		parent.$(iframe).bPopup(wehrm.popup.modalOptions);
		//$(iframe).bPopup(wehrm.popup.modalOptions);
		$(iframe).bPopup({position:['auto',45],follow: [true, true]});
		if(typeof(parent) != undefined) {
//			parent.wehrm.ui.destroyProgressBar();
		}
		if(topHeight != "" && topHeight != null){
			parent.$(iframe).css({top: topHeight});
			parent.$(iframe).css({left: "0px"});
		} else {
			parent.$(iframe).css({top: "90px"});
		}

//	});

	
	var param = "";
	if(typeof input != "undefined"){
		param =  "?input=" + encodeURIComponent(jex.toStr(input));
	}
	
	
	$(iframe).attr("src", wsvcId+".act" + param);
//	$(iframe).attr("src", wsvcId+".act?input=" + encodeURIComponent(jex.toStr(input)));
};

wehrm.popup.openPopup4 = function(wsvcId, input, callbackFn, topHeight) {
	var top = 90;
	if(input.ARTICLE_CD){
		top = 45;
	}
	
	wehrm.popup.ndvd_input = input;
	
	wehrm.popup.callbackFn[wsvcId] = callbackFn;
	var iframe =  document.getElementById(wsvcId+"_iframe");

	$(iframe).bPopup({position:['auto',top],follow: [true, false]});

	
	/*var param = "";
	if(typeof input != "undefined"){
		param =  "?input=" + encodeURIComponent(jex.toStr(input));
	}*/
	
	$(iframe).attr("src", wsvcId+".act");
};
wehrm.popup.closePopup = function(wsvcId) {
	
	var iframe =  parent.document.getElementById(wsvcId+"_iframe");
	parent.$(iframe).bPopup().close();
	
};
wehrm.popup.closePopup2 = function(wsvcId){
	var iframe = document.getElementById(wsvcId+"_iframe");
	$(iframe).bPopup().close();
};

wehrm.popup.callDirectIframeFn = function(iframe){
	return document.getElementById(iframe+"_iframe").contentWindow;
};

//@@ set scroll - decode
wehrm.popup.setDynamicIframScreen = function(dat) {
	var dyn_width = dat.WIDTH - 940;
	if(dyn_width>0) dyn_width /=2;
	
	$("#"+dat.IFRAME_NAME+"_iframe").css({
		width : dat.WIDTH,
		height : dat.HEIGHT,
		left: 330-dyn_width,
		top: "0px"
	});
};

wehrm.popup.PopupCenter = function(url, title) {
  // Fixes dual-screen position                         Most browsers      Firefox
  var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
  var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

  var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

  var left = ((width / 2) - (992 / 2)) + dualScreenLeft;
  var top = ((height / 2) - (600 / 2)) + dualScreenTop;
  var newWindow = window.open(url, title, 'scrollbars=yes, width=992, height=' + height + ', top=' + top + ', left=' + left);

  // Puts focus on the newWindow
  if (window.focus) {
      newWindow.focus();
  }
}

//wehrm.popup.PopupCenter = function(url, title, w, h) {
//    // Fixes dual-screen position                         Most browsers      Firefox
//    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
//    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
//
//    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
//    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
//
//    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
//    var top = ((height / 2) - (h / 2)) + dualScreenTop;
//    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
//
//    // Puts focus on the newWindow
//    if (window.focus) {
//        newWindow.focus();
//    }
//}

wehrm.popup.getDvsnList = function(calbackFn) {
	var input = {};
	input["DVSN_NM"] = "DVSN_NM";
	input["DVSN_CD"] = "DVSN_CD";
	input["BSUN_CD"] = "BSUN_CD";
	input["_BSUN_YN"] = "_BSUN_YN";
	wehrm.popup.openPopupDvsnList("empl_1003_02",input,calbackFn);
};

wehrm.popup.bPopup = function(wsvcId, heigth, width){ 
	var iframe =  document.getElementById("bpopup_ifrm");
	$(iframe).attr("src", wsvcId);
	$(iframe).css({"width":width+"px","height":heigth+"px"});
	$(iframe).bPopup({position:['auto',90],follow: [true, true]},function(){
		
	});
//	$(iframe).load(function() { 
//		
//	});
	
}
wehrm.popup.bPopup.close = function(){
	var iframe =  document.getElementById("bpopup_ifrm");
	$(iframe).bPopup().close();
}

wehrm.popup.openBpopupFormSubmit = function (wsvcId, input, callbackFn, topHeight) { 
	//console.log(wsvcId+"_iframe");
	//wehrm.popup.callbackFn[wsvcId] = callbackFn;
	//var iframe =  parent.document.getElementById(wsvcId+"_iframe");
	var iframe =  document.getElementById(wsvcId+"_iframe");
	if(typeof(parent) != undefined) {
	//	parent.wehrm.ui.createProgressBar();
	}
	
	//
	
		
	var form = wehrm.popup.createForm(input, wsvcId+".act","tmpForm", wsvcId + "_iframe");
	/*form.submit(function(event){
        event.preventDefault();
    });*/
	
	
	//$(iframe).attr("src",wsvcId+".act");
	if(topHeight != "" && topHeight != null){
		$(iframe).bPopup({position:['auto',topHeight],follow: [true, true]});
	}else
		$(iframe).bPopup({position:['auto',45],follow: [true, true]});
	
	if(typeof(parent) != undefined) {
//		parent.wehrm.ui.destroyProgressBar();
	}
	//alert(2);
	//form.remove();
	form.submit();
	
};

wehrm.popup.createForm = function(param,action,formId, target){
	var $form = $('<form></form>');
	formId = formId || 'tmpForm';
	//$(document).find('#' + formId).remove();
	var $input =  $('<input/>', {
		type: 'hidden', 
		name: "input", 
		value: decodeURIComponent(JSON.stringify(param))
	});
	
	var input = $('<input name = "input" type="hidden"/>')	;
	input.val(encodeURIComponent(JSON.stringify(param)));
	
	$form.append(input);
	
	$form.attr({
		'id': formId,
		'name': formId,
		'action': action,
		'target': target,
		'method' : "POST"
	});
	$form.appendTo('body');
	return $form;
}

//TODO:form

wehrm.popup.createFormLvl1 = function(param, action, formId, target) {
	var $form = $('<form></form>');
	formId = formId || 'tmpForm';
	var test = $(formId);
	if(test){
		test.remove();
	}
	$(document).find('#' + formId).remove();
	$.each(param, function(i,e){
		var $input = $('<input/>', {
			type: 'hidden', 
			name: i, 
			value: e
		});
		$form.append($input);
	});
	
	$form.attr({
		'id': formId,
		'name': formId,
		'action': action,
		'target': target,
		'method' : "POST"
	});
	$form.appendTo('body');
	return $form;
};






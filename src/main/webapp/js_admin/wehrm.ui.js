var wehrm;
if(!wehrm) wehrm={};	

if(!wehrm.ui) {
	wehrm.ui={};
	wehrm.ui.receiverData = [];
	
	wehrm.ui.validateDateInput = function (obj_id){
		 var orgin_date  = "";
		 orgin_date   = $(obj_id).val();
		 
		 if((orgin_date.length == 8) && (Number(orgin_date))){
		  if(moment(orgin_date,'YYYYMMDD', true).isValid()){
		   $(obj_id).val(moment(orgin_date).format('YYYY-MM-DD'));
		   $(obj_id).css("background", "#fff");
		   $(obj_id).removeClass("error");
		   $(obj_id).attr("maxlength","10");
		  }else{
		   $(obj_id).val(fnFormateDateYyyyMmDd(orgin_date));
		   $(obj_id).css("background", "#FF0000");
		   $(obj_id).addClass("error");
		   $(obj_id).attr("maxlength","8");
		   $(obj_id).focus();
		  }
		  
		 }else{
		  if(orgin_date.length == 10){
		   if(moment(orgin_date,'YYYY-MM-DD', true).isValid()){
		    $(obj_id).val(moment(orgin_date).format('YYYY-MM-DD'));
		   $(obj_id).css("background", "#fff");
		   $(obj_id).removeClass("error");
		   $(obj_id).attr("maxlength","10");
		   }else{
		    $(obj_id).val(orgin_date);
		    $(obj_id).css("background", "#FF0000");
		    $(obj_id).addClass("error");
		    $(obj_id).attr("maxlength","10");
		    $(obj_id).focus();
		   }
		  }
		 }
	};
	
	//link append to show
	wehrm.ui.setappdenLink = function (target, appcdNo) {
		
		var jexAjax = jex.createAjaxUtil("pc_link_r002");
		jexAjax.set("APPCD_NO", appcdNo);
		jexAjax.execute(function(dat) {
//			var valueField = "APPCD_NO";
//			var labelField = "APP_NM";
			//$(target).find("option[data-generated='option']").remove();
			
//			$.each(dat.INQ_REC, function(i, v) {
//				if(i==0){
				var linkUrl = jex.null2Void(dat.WEB_URL);
				if(jex.isNull(linkUrl)) {
					linkUrl = "javascript:jex.warning('ì›¹ í™”ë©´ì—ì„œëŠ” ì œê³µë˜ì§€ ì•ŠëŠ” ê¸°ëŠ¥ìž…ë‹ˆë‹¤.');";
				}
				var txt="<span id=\"linktype\"><a href=\""+linkUrl+"\" target=\"_blank\" data-value="+dat.APPCD_NO+" class=\"linkview\">"+dat.APP_NM+"</a><a class=\"removeLink\" href=\"javascript:\"><img src=\"../img/ico/ico_delete.gif\" alt=\"ì‚­ì œ\"></a></span>";
				$(".msg_linkview div").empty().append(txt);
				$(".msg_linkview").show();
//				}
//			});
		});
	};
	

	//ë§í¬ì •ë³´ ì½¤ë³´ë°•ìŠ¤
	wehrm.ui.setLinkAppCombo = function(target, json) {
		var valueField = "APPCD_NO";
		var labelField = "APP_NM";
		var labelUrl = "WEB_URL";
		var defaultValue = null;
		
		if(json) {
			if(json.valueField) {
				valueField = json.valueField;
			}
			
			if(json.labelField) {
				labelField = json.labelField;
			}
			
			if(json.defaultValue) {
				defaultValue = json.defaultValue;
			}
		}
		
		var jexAjax = jex.createAjaxUtil("pc_link_r001");
		jexAjax.execute(function(dat) {
			$(target).find("option[data-generated='option']").remove();
			
			$.each(dat.INQ_REC, function(i, v) {
				if(defaultValue == v[valueField]) {
					$(target).append("<option selected data-url_link='"+v[labelUrl]+"' data-generated=\"option\" value='"+v[valueField]+"'>"+v[labelField]+"</option>");
				}
				else {
					$(target).append("<option data-url_link='"+v[labelUrl]+"' data-generated=\"option\" value='"+v[valueField]+"'>"+v[labelField]+"</option>");
				}
			});
			
			wehrm.ui.setUiComponent($(target).closest("div.select_field_cbox"), {
				component:"select"
			});
			//var txt="<span id=\"linktype\"><a href=\"javascript:\"  data-value=\"12121\" class=\"linkview\">\"+v[labelField]+\"</a><a class=\"removeLink\" href=\"javascript:\"><img src=\"../img/ico/ico_delete.gif\" alt=\"ì‚­ì œ\"></a></span>";
			//$(".msg_linkview div").empty().append(txt);
//			$(target).select2({
//				minimumResultsForSearch: -1,
//				dropdownAutoWidth: true,
//				placeholder: "ì„ íƒí•˜ì„¸ìš”."
//			});
		});
	};
	wehrm.ui.getBsunList = function() {
		var rec = [];
		var jexAjax = jex.createAjaxUtil("hr_bsunlist_r002");
		jexAjax.async = false;
		jexAjax.execute(function(dat) {
			if (dat.COMMON_HEAD.ERROR) {
//				top.showPrintInfoMsg(dat.COMMON_HEAD.MESSAGE);
				return;
			}
			//console.log("dat",dat);
			rec = dat.OUT_REC;
		});
		jexAjax.async = false;
		return rec;
	};
	
//	emplInfoPopup
	wehrm.ui.emplInfoPopup = function (url, width, height, ifr_id, center) {
	if (center == null)
		center = false;

	// ë ˆì´ì–´íŒì—… ì‹¤í–‰ë˜ëŠ” ë™ì•ˆ ë§ˆìš°ìŠ¤ íœ  ìŠ¤í¬ë¡¤ ìž ê¸ˆ
	$('body').bind({
		'mousewheel' : function(e) {
			e.preventDefault();
			e.stopPropagation();
		}
	});

	var top = "20%";
	if ($(window).height() * 8 / 10 < height) { // top 20% ì œì™¸í•œ ìœˆë„ìš° ë†’ì´ê°€ ì •í•´ì§„ ë†’ì´ë³´ë‹¤
												// ìž‘ìœ¼ë©´
		top = "5%";
	}
	var ifrId = ifr_id ? ifr_id : "layerPopupIfr";
	var strLayerPopup = "";

	strLayerPopup += "<div class=\"layer\" style=\"display:none; position:fixed; _position:absolute; top:0px; left:10px;; width:100%; height:100%; z-index:999;\">";
	strLayerPopup += "	<div class=\"bg\" style=\"position:absolute; top:0; left:0; width:100%; height:100%; background:#000; opacity:0; filter:alpha(opacity=0);\"></div>";
	if (center) { // ê°€ìš´ë° ì •ë ¬
		strLayerPopup += "	<div id=\""
				+ ifrId
				+ "\" class=\"pop-layer\" style=\"display:block; position: absolute; top: "
				+ top + "; left: 50%; margin-left:-" + (width / 2)
				+ "px; width:" + width + "px; height:" + height
				+ "px;   border: 0px solid #3571B5; z-index: 10;\">";
	} else {
		strLayerPopup += "	<div id=\""
				+ ifrId
				+ "\" class=\"pop-layer\" style=\"display:block; position: absolute; top: "
				+ top + "; left: 30%; width:" + width + "px; height:" + height
				+ "px;   border: 0px solid #3571B5; z-index: 10;\">";
	}
	strLayerPopup += "	<div class=\"pop-container\"><div class=\"pop-conts\">";
	strLayerPopup += "    <iframe name=\"ifr_sub\" src=\""
			+ url
			+ "\" allowTransparency=\"true\" scrolling=\"no\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\" style=\"width:100%;height:"
			+ height + "px;min-height:100px;border:0px;\"></iframe> ";
	strLayerPopup += "	</div></div></div>";
	strLayerPopup += "</div>";

	$("body").append(strLayerPopup);

	$(".layer iframe").load(function() {
		var temp = $('#' + ifrId);
		var bg = temp.prev().hasClass('bg');

		if (bg) {
			$('.layer').fadeIn();
		} else {
			temp.fadeIn();
		}
	});

	$('.layer .bg').click(function(e) {
		// $('.layer').fadeOut();
		wehrm.ui.emplInfoPopupClose();
		e.preventDefault();
	});
};
//ì§ì›ìƒì„¸ë³´ê¸° íŒì—… ë‹«ê¸°
	wehrm.ui.emplInfoPopupClose = function(setTrcoList, trcoDataList, ifr_id) {
		$('body').unbind('mousewheel'); // ë ˆì´ì–´íŒì—…ì´ ë‹«ížˆë©´ ë§ˆìš°ìŠ¤ íœ  ìŠ¤í¬ë¡¤ ìž ê¸ˆ í’€ê¸°
		// $('body').unbind("DOMMouseScroll mousewheel wheel");
		$('.layer').fadeOut(300, function() {
			$(this).remove();
		});
	};
	
	//ë°›ëŠ”ì´ì •ë³´ ìž…ë ¥ë°•ìŠ¤
	wehrm.ui.setReceiverInput = function(target, callbackFn) {
		
		var receiverData = [];
		
		var jexAjax = jex.createAjaxUtil("pc_receiver_r001");
		jexAjax.execute(function(dat) {
			
			$.each(dat.USER_REC, function(i, v) {
				// receiverData.push({id: "USER_" + v.USER_NO, text: "[ê°œì¸]" + v.USER_NM});
				
				var label;
				
				if(/\@J$/.test(v.USER_NO)) {
					label = "[ì§ì›]";
				}
				else if(/\@Y$/.test(v.USER_NO)) {
					label = "[ì—°ë½ì²˜]";
				}
				else {
					label= _extLang.privates;
				}
				
				receiverData.push({id: "USER_" + v.USER_NO, text: label + v.USER_NM});
			});
			
			$.each(dat.GROUP_REC, function(i, v) {
				//receiverData.push({id: "GROUP_" + v.GROUP_NO, text: "[ê·¸ë£¹]" + v.GROUP_NM});
				
				var label;
				
				if(/\@J$/.test(v.GROUP_NO)) {
					label = "[ì§ì›ê·¸ë£¹]";
				}
				else if(/\@Y$/.test(v.GROUP_NO)) {
					label = "[ì—°ë½ì²˜ê·¸ë£¹]";
				}
				else {
					label= _extLang.group;
				}
				
				receiverData.push({id: "GROUP_" + v.GROUP_NO, text:  label  + v.GROUP_NM});
			});
			
			
			$(target).select2({
				multiple: true,
				data: receiverData
			});
			
			if(callbackFn) callbackFn(receiverData);
		});
		
//		receiverData.push({id: "GROUP_1", text: "group1"});
//		receiverData.push({id: "GROUP_2", text: "group2"});
//		receiverData.push({id: "GROUP_3", text: "group3"});
//		receiverData.push({id: "USER_1", text: "user1"});
//		receiverData.push({id: "USER_2", text: "user2"});
//		receiverData.push({id: "USER_3", text: "user3"});
		
		
		
		/*
		$.each($(".select2-container"), function (i, n) {
	        $(n).next().show().fadeTo(0, 0).height("0px").css("left", "auto"); // make the original select visible for validation engine and hidden for us
	        $(n).prepend($(n).next());
	        $(n).delay(500).queue(function () {
	            $(this).removeClass("validate[required]"); //remove the class name from select2 container(div), so that validation engine dose not validate it
	            $(this).dequeue();
	        });
	    });
	    */
		
	};
	
	//ë°›ëŠ”ì´ì •ë³´ ìž…ë ¥ë°•ìŠ¤
	wehrm.ui.setReceiverInputAjax = function(target, callbackFn) {
		$(target).select2({
			multiple: true,
	        minimumInputLength: 2,
	        maximumInputLength: 20,
			ajax: {
	            url: "/pc_receiver_r001.jct",
	            dataType: 'json',
	            data: function(term, page) {
	                return {
	                	"_JSON_":encodeURIComponent(JSON.stringify({"INQ_KEYWORD":term}))
	                };
	            },
	            results: function(dat) {
	            	
	            	var receiverData = [];
	            	
	            	$.each(dat.USER_REC, function(i, v) {
	        			// receiverData.push({id: "USER_" + v.USER_NO, text: "[ê°œì¸]" + v.USER_NM});
	        			
	        			var label;
	        			
	        			if(/\@J$/.test(v.USER_NO)) {
	        				label = "[ì§ì›]";
	        			}
	        			else if(/\@Y$/.test(v.USER_NO)) {
	        				label = "[ì—°ë½ì²˜]";
	        			}
	        			else {
	        				label= _extLang.privates;
	        			}
	        			
	        			receiverData.push({id: "USER_" + v.USER_NO, text: label + v.USER_NM});
	        		});
	        		
	        		$.each(dat.GROUP_REC, function(i, v) {
	        			//receiverData.push({id: "GROUP_" + v.GROUP_NO, text: "[ê·¸ë£¹]" + v.GROUP_NM});
	        			
	        			var label;
	        			
	        			if(/\@J$/.test(v.GROUP_NO)) {
	        				label = "[ì§ì›ê·¸ë£¹]";
	        			}
	        			else if(/\@Y$/.test(v.GROUP_NO)) {
	        				label = "[ì—°ë½ì²˜ê·¸ë£¹]";
	        			}
	        			else {
	        				label= _extLang.group;
	        			}
	        			
	        			receiverData.push({id: "GROUP_" + v.GROUP_NO, text:  label  + v.GROUP_NM});
	        		});
	            	
	                return {
	                    results: receiverData
	                };
	                
	                
	                if(callbackFn) callbackFn(receiverData);
	            }
	        },
	        initSelection: function(element, callback) {
	        	var data = $(target).select2("data");
	        	
	        	callback(data);
	        	
	        	/*
                
                
                $(element.val().split(",")).each(function(i, v) {
//                    var item = this.split(':');
                    data.push({
                        id: this,
                        text: this
                    });
                });
                callback(data);
                */
            }
		});
		
		
//		$(target).select2("readonly", true);
		
		/*
		var receiverData = [];
		
		var jexAjax = jex.createAjaxUtil("pc_receiver_r001");
		jexAjax.execute(function(dat) {
			
			$.each(dat.USER_REC, function(i, v) {
				// receiverData.push({id: "USER_" + v.USER_NO, text: "[ê°œì¸]" + v.USER_NM});
				
				var label;
				
				if(/\@J$/.test(v.USER_NO)) {
					label = "[ì§ì›]";
				}
				else if(/\@Y$/.test(v.USER_NO)) {
					label = "[ì—°ë½ì²˜]";
				}
				else {
					label= _extLang.privates;
				}
				
				receiverData.push({id: "USER_" + v.USER_NO, text: label + v.USER_NM});
			});
			
			$.each(dat.GROUP_REC, function(i, v) {
				//receiverData.push({id: "GROUP_" + v.GROUP_NO, text: "[ê·¸ë£¹]" + v.GROUP_NM});
				
				var label;
				
				if(/\@J$/.test(v.GROUP_NO)) {
					label = "[ì§ì›ê·¸ë£¹]";
				}
				else if(/\@Y$/.test(v.GROUP_NO)) {
					label = "[ì—°ë½ì²˜ê·¸ë£¹]";
				}
				else {
					label= _extLang.group;
				}
				
				receiverData.push({id: "GROUP_" + v.GROUP_NO, text:  label  + v.GROUP_NM});
			});
			
			
			
		});
		*/
		
//		receiverData.push({id: "GROUP_1", text: "group1"});
//		receiverData.push({id: "GROUP_2", text: "group2"});
//		receiverData.push({id: "GROUP_3", text: "group3"});
//		receiverData.push({id: "USER_1", text: "user1"});
//		receiverData.push({id: "USER_2", text: "user2"});
//		receiverData.push({id: "USER_3", text: "user3"});
		
		
		
		/*
		$.each($(".select2-container"), function (i, n) {
	        $(n).next().show().fadeTo(0, 0).height("0px").css("left", "auto"); // make the original select visible for validation engine and hidden for us
	        $(n).prepend($(n).next());
	        $(n).delay(500).queue(function () {
	            $(this).removeClass("validate[required]"); //remove the class name from select2 container(div), so that validation engine dose not validate it
	            $(this).dequeue();
	        });
	    });
	    */
		
		
	};

	
	
	wehrm.ui.setSingleFileUploader = function(target, json) {
		
		var url = "/upload";
		
		if(json.allowedExts) {
			url += "?allowedExts=" + json.allowedExts;
		}

		$(target).attr("placeholder", "íŒŒì¼ì„ ì„ íƒí•˜ì„¸ìš”.");
		//$(target).attr("type", "file");
		$(target).attr("name", "files[]");
		$(target).attr("data-url", "/upload");
		
		//change ì´ë²¤íŠ¸ ì„¤ì •
		$(json.keyTarget).bind("change", function() {
			$(target).parent().find(".generated").remove();
			
			if(jex.isNull($(json.keyTarget).val())) {
	//			$(target).show();
	//			$(target).prev("input").prev().remove();
	//			$(target).prev("input").remove();
			}
			else {
	//			$(target).before('<span class="input-group-btn generated"><button type="button" class="btn"><i class="glyphicon glyphicon-remove"></i></button></span><input class="form-control generated" type="text" value="'+$(json.keyTarget).val()+'" readonly />');
	//			$(target).hide();
				
				//ì´ˆê¸°í™” ì„¤ì •
	//			$(target).parent().find("button:has(i.glyphicon-remove)").bind("click", function() {
	//				//$(target).show();
	//				//$(this).remove();
	//				$(json.keyTarget).val("");
	//				$(json.keyTarget).trigger('change');
	//			});
			}
		});
		
		$(target).fileupload({
			forceIframeTransport: true,
	        dataType: 'json',
	        done: function (e, data) {
	        	if(data.result["COMMON_HEAD"]) {
	        		if(data.result["COMMON_HEAD"]["ERROR"]) {
	        			alert(data.result["COMMON_HEAD"]["MESSAGE"]);
	        			wehrm.ui.destroyProgressBar();
	        			return;
	        		}
	        	}
	        	
	        	$.getJSON("/upload?cmd=save", function(data) {
	        		if(jex.isError(data)) {
	        			alert(data["COMMON_HEAD"]["MESSAGE"]);
	        			wehrm.ui.destroyProgressBar();
	        			return;
	        		}
	        		
	        		if(json.onAfterUpload) {
	        			json.onAfterUpload(data[0]);
	        		}
	        		else {
		        		if(json.keyTarget) {
			        		$(json.keyTarget).attr("data-changed", "Y");
			        		$(json.keyTarget).trigger('change');
		        		}
		        		
	//	        		$(target).prev("input").remove();
	//	        		$(target).before('<input class="form-control generated" type="text" value="'+data[0].fileName+'" readonly />');
	        		}
	        		
		        	$.getJSON("/upload?cmd=clear", function(data) {
		        	});
		        	
		        	wehrm.ui.destroyProgressBar();
	        	});
	        },
	        progressall: function (e, data) {
	//        	var progress = parseInt(data.loaded / data.total * 100, 10);
	//            $('#progress .progress-bar').css(
	//                'width',
	//                progress + '%'
	//            );
	        },
	        beforeSend: function (event, files, index, xhr, handler, callBack) {
	        	wehrm.ui.createProgressBar();
	        },
	        fail: function(){
	            jex.error("ì„œë²„ì™€ í†µì‹  ì¤‘ ë¬¸ì œê°€ ë°œìƒí–ˆìŠµë‹ˆë‹¤.");
	        }
	        /*
	        dropZone: $('#dropzone')
	        */
	    }).bind('fileuploadsubmit', function (e, data) {
	        // The example input, doesn't have to be part of the upload form:
	        //var uploader = $('#uploader');
	        //data.formData = {uploader: uploader.val()};        
	    });
			
		//span ì œê±°
		$(target).prev("span").remove();
	};
	wehrm.ui.setFileUpload = function(formId, action,requestParam,callbackFn){
		var url = '';
		
//		var iframe = '<iframe name="postiframe" id="postiframe" style="display: none"></iframe>';
		//bizpay.ui.createProgressBar();
		
		var form = document.getElementById(formId);
		
		url = action+"?callbackFn="+callbackFn+"&"+requestParam;
			
		form.setAttribute("action", url);

		form.target ="postiframe";
		wehrm.ui.submitForm(form);
	};	
	wehrm.ui.submitForm = function(form){
		try {
			form.submit();
		} catch (e) {
			setTimeout(function () { wehrm.ui.submitForm(form); }, 50);
		}
	};
	//wehrm.ui.setFileUpload = function(target, json) {
	//
	//		$(target).nextAll("a.btn-search").click(function() {
	//			var input = {};
	//			input["ORG_NO"] = "ORG_NO";
	//			
	//			wehrm.popup.photoupload(input, function(dat) {
	//				$(json.keyTarget).val(dat.ORG_NO);
	//				$(target).val(dat.FileName);
	//				$(json.keyTarget).trigger('change');
	//			});
	//		});
	//};
	
	//@@ check date input
	wehrm.ui.validateDate = function(elem) {
		var strDate=$(elem).val();
		if(strDate=="") return true;
		if(moment(strDate, "YYYY-MM-DD").isValid()==false){
			jex.warning("The date format is invalid.");
			$(elem).val("").focus();
		}
	};
	
	//@@ singleDatePicker
	wehrm.ui.setSingleDate = function(target,json){
		if(json.startDate == null){
			json.startDate = moment().format('YYYY-MM-DD');
		}
		if(json.minYear == null){
			json.minYear = "1950";
		}
		if(json.buttonImage == null || json.buttonImage == "false" || json.buttonImage == ''){	
			json.buttonImage = '';
		} else {
			json.buttonImage = "both";
		}
		var _target="";
		var arrSeltor = target.split(",");
		$.each(arrSeltor,function(i){
			if(arrSeltor.length-1 == i){
				_target += "#"+arrSeltor[i];
	            return;
	        }
			_target += "#"+arrSeltor[i]+",";	
		});
		
		$(_target).datepicker({
			showOn:json.buttonImage,
			buttonImage: '../img/ico/ico_calendar.png',
		    buttonImageOnly: true,
			dateFormat: 'yy-mm-dd',
			buttonText : '',
			changeYear: true,
			changeMonth: true,
			yearRange: json.minYear+":" + new Date("2020").getFullYear(),
			maxDate : moment().format('YYYY-MM-DD'),
			setDate : json.startDate
		});
		if(json.displayDate == null || json.displayDate == true){
			$(_target).val(json.startDate);
		}
		 
	};
	
	//@@ Year and Date only
	wehrm.ui.setYearMonthPicker = function(target, json){
		if(!json) var json = {};
		if(json.startDate == null){
			json.startDate = moment().format('YYYY-MM');
		}
		
		$(target).datepicker( {
	        changeMonth: true,
	        changeYear: true,
	        showButtonPanel: true,
	        dateFormat: 'yy-mm',
	        setDate : json.startDate,
	        onClose: function(dateText, inst) { 
	            var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
	            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
	            $(this).datepicker('setDate', new Date(year, month, 1));
	        }
	    }).mask("9999-99");
		$(target).val(json.startDate);
	};
	
	
//	start display 27.02.2015 
wehrm.ui.setMonthPicker = function(target, json) {
		
		$(target).datepicker({
			changeMonth: true, 
			changeYear: true,
			showButtonPanel: true,
			dateFormat: "yy-mm",
			/*dateFormat: "yy-mm-dd",*/
			onClose: function() {
				var iMonth = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
				var iYear = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
				$(this).datepicker('setDate', new Date(iYear, iMonth, 1));
			},
			onChangeMonthYear: function(year, month, inst) { 
				/*$(target).val(moment(new Date(year, month - 1, 1)).format("YYYY-MM-DD"));*/
				$(target).val(moment(new Date(year, month - 1, 1)).format("YYYY-MM"));
//				$(this).datepicker("hide");
	        },
	        beforeShowDay: function(date) {
	        	return false;
	        }
	        
		});
		
		$(target).mask("9999-99");
		/*$(target).mask("9999-99-99");*/ 
		$(target).prop("readonly", true);
		$(target).val(moment().format("YYYY-MM"));
		/*$(target).val(moment().format("YYYY-MM-DD"));*/
		// $(target).after("&nbsp;<a href=\"javascript:\"><img src=\"/themes/original/img/ico/ico_calendar.gif\" alt=\"Search\" /></a>");
		
		$(target).nextAll("a").click(function() {
			$(target).focus();
		});
		var startDate;
		if(json){
			if(json.startDate) startDate = json.startDate;
			if(startDate) {
				$(target).val(startDate.format("YYYY-MM"));
			}
		}
//		$(target).val(moment().format("YYYY-MM"));
//		$(target).css("width", "67px");
//		$(target).prop("readonly", true);
//		$(target).MonthPicker();
	};
	// end display 27.02.2015
	
	wehrm.ui.createProgressBar = function(json) {
		
		$("#progressbar").remove();
		$("body").append("<div id=\"progressbar\" style=\"display: none;\"><div class=\"progress-label\"></div></div>");
		
		$("#progressbar").progressbar({
			value: false,
			change: function() {
				$(".progress-label", "#progressbar").text( $("#progressbar").progressbar( "value" ) + "%" );
		    },
		    complete: function() {
		    	$(".progress-label", "#progressbar").text("Complete!");
	//	    	$(".progress-label", "#progressbar").text("100%");
		    },
		    create: function(event, ui) {
		    	$(".progress-label", "#progressbar").text("");
		    	
		    	$.blockUI({
					message: $("#progressbar")
				});
		    }
	    });

		$.blockUI({
			message: $("#progressbar")
		});
		
		if(!json) json = {};
//		if(!json.interval) json.interval = 500;
		
		/*
		var timer = function() {
			wehrm.session.load(function(dat) {
				var percent = parseInt(jex.null2Str(dat["PROGRESSBAR_PERCENT"], "0"), 10);
				
				if(percent > 0 && percent < 100) {
					$("#progressbar").progressbar( "option", {
						value: percent
			        });
				}
	//				else {
	//					$(target).progressbar( "option", {
	//						value: 0
	//			        });
	//				}
			});
		};
		
		wehrm.ui.progressBarTimer = setInterval(timer, json.interval);
		 */
	};
	

	
	
	wehrm.ui.destroyProgressBar = function() {
		//clearInterval(wehrm.ui.progressBarTimer);
//		$("#progressbar").progressbar("destroy");
		$.unblockUI();
		$("#progressbar").remove();
	};
	
	wehrm.ui.setProgressBar = function(json) {
		$("#progressbar").progressbar( "option", json);
	};
	
	wehrm.ui.validationEngineOptions = {
		binded: false,
		showOneMessage: true,
		promptPosition: "topLeft",
		autoHidePrompt: true,
		autoHideDelay: 1000000
	};
	
	/// date
	wehrm.ui.setDateRangePicker = function(target, json) {
		var $rangeStart = $(target).find(".range-start");
		var $rangeEnd = $(target).find(".range-end");
		
		$(target).find("a").click(function() {
			$(this).prev().focus();
		});
		
		$(json.keyTarget).bind("change", function() {
			if(jex.isNull($(this).val())) {
	//			$(target).prev("span").remove();
			}
			else {
	//			$(target).before('<span class="input-group-btn"><button type="button" class="btn"><i class="glyphicon glyphicon-remove"></i></button></span>');
				
				//ì´ˆê¸°í™” ì„¤ì •
	//			$(target).parent().find("button:has(i.glyphicon-remove)").bind("click", function() {
	//				$(target).val("");
	//				$(json.keyTarget).val("");
	//				$(json.keyTarget).trigger('change');
	//			});
			}
		});
		
	//	$(target).attr("readonly", true);
		
		if(json.timePicker == true) {
			
			$rangeStart.datetimepicker({
				onClose: function( selectedDate ) {
	//				$rangeEnd.datepicker( "option", "minDate", selectedDate );
				},
				onSelect: function (dateText, inst) {
					var rangeStartText = dateText;
					var rangeEndText = $rangeEnd.val();
					
					if(jex.isNull(rangeEndText)) rangeEndText = "9999-12-31 23:59:59";
					
					$(json.keyTarget).val(moment(rangeStartText, "YYYY-MM-DD HH:mm").format("YYYYMMDDHHmm") + "00," + moment(rangeEndText, "YYYY-MM-DD HH:mm").format("YYYYMMDDHHmm") + "59");
				},
				timeFormat: 'HH:mm',
				numberOfMonths: 3
			});
	
			$rangeEnd.datetimepicker({
				onClose: function( selectedDate ) {
	//				$rangeStart.datepicker( "option", "maxDate", selectedDate );
				},
				onSelect: function (dateText, inst) {
					var rangeStartText = $rangeStart.val();
					var rangeEndText = dateText;
					if(jex.isNull(rangeStartText)) rangeStartText = "1970-01-01 00:00:00";
					

					$(json.keyTarget).val(moment(rangeStartText, "YYYY-MM-DD HH:mm").format("YYYYMMDDHHmm") + "00," + moment(rangeEndText, "YYYY-MM-DD HH:mm").format("YYYYMMDDHHmm") + "59");
				},
				timeFormat: 'HH:mm',
				numberOfMonths: 3
			});
			
			var startDate;
			var endDate;
			
			if(json.startDate) startDate = json.startDate;
			if(json.endDate) endDate = json.endDate;
			
			if(startDate) {
				$rangeStart.val(startDate.format("YYYY-MM-DD HH:mm"));
			}
			
			if(endDate) {
				$rangeEnd.val(endDate.format("YYYY-MM-DD HH:mm"));
			}
			
			if(startDate && endDate) {
				$(json.keyTarget).val(moment($rangeStart.val(), "YYYY-MM-DD HH:mm").format("YYYYMMDDHHmm") + "00," + moment($rangeEnd.val(), "YYYY-MM-DD HH:mm").format("YYYYMMDDHHmm") + "59");
			}
			
			$rangeStart.mask("9999-99-99 99:99");
			$rangeEnd.mask("9999-99-99 99:99");
			
	//		$rangeStart.datepicker( "option", "maxDate", new Date() );
	//		$rangeEnd.datepicker( "option", "maxDate", new Date() );
		}
		else {
			
			$rangeStart.datepicker({
				onClose: function( selectedDate ) {
					$rangeEnd.datepicker( "option", "minDate", selectedDate );
				},
				onSelect: function (dateText, inst) {
					var rangeStartText = dateText;
					var rangeEndText = $rangeEnd.val();
					
					if(jex.isNull(rangeEndText)) rangeEndText = "9999-12-31";
					
					$(json.keyTarget).val(moment(rangeStartText, "YYYY-MM-DD").fomat("YYYYMMDD") + "," + moment(rangeEndText, "YYYY-MM-DD").format("YYYYMMDD"));
				},
				numberOfMonths: 3
			});
	
			$rangeEnd.datepicker({
				onClose: function( selectedDate ) {
					$rangeStart.datepicker( "option", "maxDate", selectedDate );
				},
				onSelect: function (dateText, inst) {
					var rangeStartText = $rangeStart.val();
					var rangeEndText = dateText;
					if(jex.isNull(rangeStartText)) rangeStartText = "1970-01-01";
					
					$(json.keyTarget).val(moment(rangeStartText, "YYYY-MM-DD").format("YYYYMMDD") + "," + moment(rangeEndText, "YYYY-MM-DD").format("YYYYMMDD"));
				},
				numberOfMonths: 3
			});
			
			var startDate = moment();
			var endDate = moment();
			
			if(json.startDate) startDate = json.startDate;
			if(json.endDate) endDate = json.endDate;
			
			$rangeStart.val(startDate.format("YYYY-MM-DD"));
			$rangeEnd.val(endDate.format("YYYY-MM-DD"));
			$rangeStart.mask("9999-99-99");
			$rangeEnd.mask("9999-99-99");
			$(json.keyTarget).val(moment($rangeStart.val(), "YYYY-MM-DD").format("YYYYMMDD") + "," + moment($rangeEnd.val(), "YYYY-MM-DD").format("YYYYMMDD"));
			
			$rangeStart.datepicker( "option", "maxDate", moment().format("YYYY-MM-DD") );
			$rangeEnd.datepicker( "option", "maxDate", moment().format("YYYY-MM-DD") );
	
		}
	};
	
	/// end date
	wehrm.ui.setDateRangePicker1 = function(target, json){
//		console.log("target   ...>> ", target);
//		console.log("json   ...>> ", json);
		if(json.numberOfMonths == undefined){
			json.numberOfMonths = 1;
		}
		
		var $rangeStart 	= $(target).find(".range-start");
		var $rangeEnd 		= $(target).find(".range-end");
		
		$(target).find("a").click(function() {
			$(this).prev().focus();
		});
		
		$(json.keyTarget).bind("change", function() {
			if(jex.isNull($(this).val())) {
				//$(target).prev("span").remove();
			}
			else {
				//$(target).before('<span class="input-group-btn"><button type="button" class="btn"><i class="glyphicon glyphicon-remove"></i></button></span>');
				
				//ì´ˆê¸°í™” ì„¤ì •
				//$(target).parent().find("button:has(i.glyphicon-remove)").bind("click", function() {
				//$(target).val("");
				//$(json.keyTarget).val("");
				//$(json.keyTarget).trigger('change');
				//});
			}
		});
		
		//$(target).attr("readonly", true);
		
		if(json.timePicker == true) {
			$rangeStart.datetimepicker({
				onClose: function( selectedDate ) {
					//$rangeEnd.datepicker( "option", "minDate", selectedDate );
				},
				onSelect: function (dateText, inst) {
					var rangeStartText 	= dateText;
					var rangeEndText 	= $rangeEnd.val();
					
					if(jex.isNull(rangeEndText)) rangeEndText = "9999-12-31 23:59:59";
					
					$(json.keyTarget).val(moment(rangeStartText, "YYYY-MM-DD HH:mm").format("YYYYMMDDHHmm") + "00," + moment(rangeEndText, "YYYY-MM-DD HH:mm").format("YYYYMMDDHHmm") + "59");
				},
				timeFormat		: 'HH:mm',
				numberOfMonths	: json.numberOfMonths
			});
	
			
			$rangeEnd.datetimepicker({
				
				onClose: function( selectedDate ) {
					//$rangeStart.datepicker( "option", "maxDate", selectedDate );
				},
				onSelect: function (dateText, inst) {
					var rangeStartText 	= $rangeStart.val();
					var rangeEndText 	= dateText;
					
					if(jex.isNull(rangeStartText)) 
						rangeStartText = "1970-01-01 00:00:00";
					$(json.keyTarget).val(moment(rangeStartText, "YYYY-MM-DD HH:mm").format("YYYYMMDDHHmm") + "00," + moment(rangeEndText, "YYYY-MM-DD HH:mm").format("YYYYMMDDHHmm") + "59");
				},
				timeFormat		: 'HH:mm',
				numberOfMonths	: json.numberOfMonths
			});
			

			var startDate;
			var endDate;
			
			if(json.startDate) 
				startDate 	= json.startDate;
			if(json.endDate) 
				endDate 	= json.endDate;
			
			if(startDate) {
				$rangeStart.val(startDate.format("YYYY-MM-DD HH:mm"));
			}
			
			if(endDate) {
				$rangeEnd.val(endDate.format("YYYY-MM-DD HH:mm"));
			}
			
			if(startDate && endDate) {
				$(json.keyTarget).val(moment($rangeStart.val(), "YYYY-MM-DD HH:mm").format("YYYYMMDDHHmm") + "00," + moment($rangeEnd.val(), "YYYY-MM-DD HH:mm").format("YYYYMMDDHHmm") + "59");
			}
			
			$rangeStart.mask("9999-99-99 99:99");
			$rangeEnd.mask("9999-99-99 99:99");
			
	//		$rangeStart.datepicker( "option", "maxDate", new Date() );
	//		$rangeEnd.datepicker( "option", "maxDate", new Date() );
		}
		else {
			 $.datepicker.regional['ko'] = {
				
			    closeText: 'ë‹«ê¸°',
                prevText: 'ì´ì „ë‹¬',
                nextText: 'ë‹¤ìŒë‹¬',
                currentText: 'ì˜¤ëŠ˜',
               /* monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
                monthNamesShort: ['01','02','03','04','05','06','07','08','09','10','11','12'],*/
				monthNames: ['1ì›”','2ì›”','3ì›”','4ì›”','5ì›”','6ì›”','7ì›”','8ì›”','9ì›”','10ì›”','11ì›”','12ì›”'],
		        monthNamesShort: ['1ì›”','2ì›”','3ì›”','4ì›”','5ì›”','6ì›”','7ì›”','8ì›”','9ì›”','10ì›”','11ì›”','12ì›”'],
                dayNames: ['ì¼','ì›”','í™”','ìˆ˜','ëª©','ê¸ˆ','í† '],
                dayNamesShort: ['ì¼','ì›”','í™”','ìˆ˜','ëª©','ê¸ˆ','í† '],
                dayNamesMin: ['ì¼','ì›”','í™”','ìˆ˜','ëª©','ê¸ˆ','í† ']

             };
		     $.datepicker.setDefaults($.datepicker.regional['ko']);
		       
			$rangeStart.datepicker({
				dateFormat	: 'yy-mm-dd',
				changeYear	: true,
				changeMonth	: true,
				//yearRange: '1950:' + new Date("2020").getFullYear(),
				yearRange	: '1950:+0' , // Borey 2016-07-05
				maxDate : moment().format('YYYY-MM-DD'),
				setDate 	: json.startDate,
				onClose		: function( selectedDate ) {
					$rangeEnd.datepicker( "option", "minDate", selectedDate );
				},
				onSelect: function (dateText, inst) {
					var rangeStartText = dateText;
					var rangeEndText = $rangeEnd.val();
					$(this).removeClass("input_style1 fin");
						
					if(jex.isNull(rangeEndText)) rangeEndText = "9999-12-31";
				},
				numberOfMonths: json.numberOfMonths
			});
			

			$rangeEnd.datepicker({
				dateFormat	: 'yy-mm-dd',
				changeYear	: true,
				changeMonth	: true,
				yearRange	: '1950:' + new Date("2020").getFullYear(),
				//yearRange	: '1950:+0' , // Borey 2016-07-05
				minDate 	: json.startDate,
				maxDate		: new Date,
				setDate 	: json.endDate,
				onClose: function( selectedDate ) {
					var cloneSelectedDate = selectedDate;
					if(!selectedDate ){
						cloneSelectedDate = new Date;
					}
					$rangeStart.datepicker( "option", "maxDate", cloneSelectedDate );
				},
				onSelect: function (dateText, inst) {
					$(this).removeClass("input_style1 fin");
//					var rangeStartText = $rangeStart.val();
//					var rangeEndText = dateText;
//					if(jex.isNull(rangeStartText)) rangeStartText = "1970-01-01";
				
				},
				numberOfMonths: json.numberOfMonths
			});
		
			var startDate 	= moment();
			var endDate 	= moment();
			if(json.startDate) 
				startDate = json.startDate;
			if(json.endDate) 
				endDate = json.endDate;
			
			$rangeStart.val(startDate);
			$rangeEnd.val(endDate);
			
//			$rangeStart.mask("9999-99-99");
//			$rangeEnd.mask("9999-99-99");
//			$(json.keyTarget).val(moment($rangeStart.val(), "YYYY-MM-DD").format("YYYYMMDD") + "," + moment($rangeEnd.val(), "YYYY-MM-DD").format("YYYYMMDD"));
//			
//			$rangeStart.datepicker( "option", "maxDate", moment().format("YYYY-MM-DD") );
//			
//			if(wehrm.string.cnts_Null2Void(json.maxDate, "none") == "none"){
//				$rangeEnd.datepicker( "option", "maxDate", moment().format("YYYY-MM-DD") );	
//			}
//			if(minEndDate != null){
//				//$rangeEnd.val(startDate.format("YYYY-MM-DD"));
//				$rangeEnd.datepicker( "option", "minDate", minEndDate.format("YYYY-MM-DD"));	
//				$rangeEnd.val(endDate.format("YYYY-MM-DD"));
//				
//			}
			
		}
	};
	/// end date	
	wehrm.ui.setUiComponent = function(target, json) {
		
		if(!json) json = {};
		
		if(json.component == "select") {
			var _target = $(target);
			var _select = _target.find("select");
			var _selected = _target.find("a:first > span");
			
			_target.find("[data-generated='li']").remove();
			
			//fill option html
			var optionHtml = "";
			
			$.each(_target.find("select > option"), function(i, v) {
				optionHtml += "<li data-generated=\"li\"><a href=\"javascript:\" data-url_link = \""+$(this).data("url_link")+"\" data-value=\""+$(this).val()+"\" data-index=\""+i+"\">"+$(this).text()+"</a></li>";
			});
			
			_selected.text(_select.find("option:selected").text());
//			else {
//				if(i == 0) {
//					_selected.text($(this).text());
//				}
//			}
			
			var _thisUl = _target.find("ul");
			
			_thisUl.append(optionHtml);
			
			//ì´ë¯¸ ì´ˆê¸°í™”ëœ ì»´í¬ë„ŒíŠ¸ì´ë©´
			if(_target.attr("data-generated") == "component") {
			}
			else {
				_target.attr("data-generated", "component");
				
				//toggle select ui
				_target.find("a.field_style:first").click(function() {
					$(this).focus();
					_thisUl.toggle();
					
				});
				
				
				/*
				_target.find("a.field_style:first").blur(function() {
					
					
				//	_thisUl.toggle();
					
					
					_thisUl.slideUp();
					//alert(1);
					
				});
				*/
				
				//blur comboBox
//			_target.find("a.field_style:first").blur(function() {
//				_thisUl.hide();
//				
//			});
//	
//	
//			_this.find("*").blur(function() {
//			});
//			
//			$("body").focus(function() {
//				_thisUl.slideUp("fast");
//			});
//								
				//select event
				_target.find("ul > li[data-generated]").click(function() {
					_target.find("select > option:eq("+$(this).find("a").data("index")+")").prop("selected", true);
					_selected.text($(this).text());
					_select.trigger("change");
					$(this).focus();
					_thisUl.toggle();
				});	
				
	//			if(json.defaultValue) {
	//				_target.find("li > a[data-value='"+json.defaultValue+"']").trigger("click");
					
	//			}
			}
			
		}
	};
	
	
	wehrm.ui.initPhotoNavigation = function(target) {
		var imageCount = $(target).find(".thumb_row ul li").length;
		var imageBoxWidth = 100;
		var spaceWidth = 5;
		var width = 0;

		if(imageCount > 0) {
			width = ((imageBoxWidth + spaceWidth) * imageCount) - 5;
			$(target).find("#prev, #next").show();
		}
		else {
			$(target).find("#prev, #next").hide();
		}
		
		$(target).find(".thumb_row ul").css("width", width);
		
		var containerWidth = $(target).find(".thumb_row").width();
		var contentWidth = $(target).find(".thumb_row ul").width();
		
		// contentWidthê°€ containerWidthë³´ë‹¤ ì»¤ì§€ë©´
		var contentLeft = parseInt($(target).find(".thumb_row ul").css("left").replace(/px/, ""), 10);
		var contentRight = contentLeft + contentWidth;
		
		//ì™¼ìª½ìœ¼ë¡œ ì´ë™í•  ì´ë¯¸ì§€ê°€ ìžˆìœ¼ë©´
		if(contentLeft < 0) {
			//ì™¼ìª½ìœ¼ë¡œ ì´ë™ ë²„íŠ¼ìœ¼ë¡œ í™œì„±í™”
			$(target).find("#prev img").attr("src","../img/btn/btn_prev_thum_on.png");
			
			if(!wehrm.ui.photoNavidationPrevBinded) {
				$(target).find("#prev").bind("click", function() {
					wehrm.ui.moveToLeftPhotoNavigation(target);
				});
				
				wehrm.ui.photoNavidationPrevBinded = true;
			}
		}
		else {
			$(target).find("#prev img").attr("src","../img/btn/btn_prev_thum.png");
			
			if(wehrm.ui.photoNavidationPrevBinded) {
				$(target).find("#prev").unbind("click");
				wehrm.ui.photoNavidationPrevBinded = false;
			}
		}
		
		//ì˜¤ëŠ˜ìª½ìœ¼ë¡œ ì´ë™í•  ì´ë¯¸ì§€ê°€ ìžˆìœ¼ë©´
		if(contentRight > containerWidth) {
			$(target).find("#next img").attr("src","../img/btn/btn_next_thum_on.png");
			
			if(!wehrm.ui.photoNavigationNextBinded) {
				$(target).find("#next").bind("click", function() {
					wehrm.ui.moveToRightPhotoNavidation(target);
				});
				wehrm.ui.photoNavigationNextBinded = true;
			}
		}
		else {
			$(target).find("#next img").attr("src","../img/btn/btn_next_thum.png");
			
			if(wehrm.ui.photoNavigationNextBinded) {
				$(target).find("#next").unbind("click");
				wehrm.ui.photoNavigationNextBinded = false;
			}
		}
	};

	wehrm.ui.moveToLeftPhotoNavigation = function(target) {
		var containerWidth = $(target).find(".thumb_row").width();
		var contentWidth = $(target).find(".thumb_row ul").width();
		var contentLeft = parseInt($(".thumb_row ul").css("left").replace(/px/, ""), 10);
		var contentRight = contentLeft + contentWidth;

		//ì™¼ìª½ìœ¼ë¡œ ì›€ì§ì¼ìˆ˜ ìžˆëŠ” í”½ì…€ = 0 - contentLeft
		var distance = 0 - contentLeft;
		
		if(distance > 0) {
			//ê±°ë¦¬ê°€ 50pxë³´ë‹¤ í¬ë©´
			if(distance >= 50) {
				//50px ì´ë™
				$(target).find(".thumb_row ul").css("left", contentLeft + 50);
			}
			else {
				$(target).find(".thumb_row ul").css("left", 0);
			}
		}
		
		wehrm.ui.initPhotoNavigation(target);
	};

	wehrm.ui.moveToRightPhotoNavidation = function(target) {
		var containerWidth = $(target).find(".thumb_row").width();
		var contentWidth = $(target).find(".thumb_row ul").width();
		var contentLeft = parseInt($(".thumb_row ul").css("left").replace(/px/, ""), 10);
		var contentRight = contentLeft + contentWidth;
		
		//ì˜¤ë¥¸ìª½ìœ¼ë¡œ ì›€ì§ì¼ìˆ˜ ìžˆëŠ” í”½ì…€ = contentRight - containerWidth
		var distance = contentRight - containerWidth;
		
		if(distance > 0) {
			//ê±°ë¦¬ê°€ 50pxë³´ë‹¤ í¬ë©´
			if(distance >= 50) {
				//50px ì´ë™
				$(target).find(".thumb_row ul").css("left", contentLeft - 50);
			}
			else {
				//containerWidth - contentWidth ì´ë™
				$(target).find(".thumb_row ul").css("left", containerWidth - contentWidth);
			}
		}
		
		wehrm.ui.initPhotoNavigation(target);
	};
	
	
	//@@ covertTo BigNumber
	wehrm.ui.convertToBigNumber = function(data){
		var rs = new BigNumber(data);
		return rs;
	};

		
	
	//@@ Create pagination
	/**
	 * íŽ˜ì´ì§•ì²˜ë¦¬
	 * @param  div_id		íŽ˜ì´ì§• í‘œì‹œí•  ìš”ì†Œ id
	 * @param  callback		íŽ˜ì´ì§• í‘œì‹œ í›„ ì‹¤í–‰ë  í•¨ìˆ˜
	 * @param  curPageNo	í˜„ìž¬íŽ˜ì´ì§€ ë²ˆí˜¸ 
	 * @param  totPage		ì „ì²´íŽ˜ì´ì§€ ë²ˆí˜¸ 
	 */
	// set profile user
	 wehrm.ui.setUserProfile = function(){
		var data = wehrm.ui.getBsunList(); 
		st = "";
		str ="";
		for(var i=0; i<data.length; i++){
			st += '<li value=' + data[i].BSUN_CD + '><a href="javascript:">' + data[i].BSNN_NM + '</a></li>';	 
			str += '<option class="sClass" value=' + data[i].BSUN_CD + '>'+data[i].BSNN_NM+'</option>';
		}
		$("#combo_list").html(st);
		 
		$("select#busNoOption").html(str);
		// set profile image // 
		st_show = "";
		st_show += "<span>" + $("#combo_list  li a").first().text() + "</span>";
		st_show += "<a href='#none' id='combo_link'><img src='../img/btn/combo_link.png' alt='combo link'></a>";	
		$("#com_bsnn_nm").html(st_show);	
		
		$("#com_bsnn_nm span").attr("val",$("#bsun_cd").val());
		$("#com_bsnn_nm span").text($("#bsnn_nm").val());
	};

	//@@ when click iframe or parent of iframe will hide
	wehrm.ui.pageLimit = function(e) {
		if(!$(e.target).parents("#combo_style").hasClass("combo_style")){
			$("#pagBlck").hide();
		}
	};
	
	//@@ when click iframe or parent of iframe will hide
	wehrm.ui.comboCompany = function(e) {
		if(!$(e.target).parents("#comboWrap").hasClass("combo_style_wrap")){
			$("#comboWrap").find("a").removeClass('btn_combo_up');
			$("#comboBlck").hide();
		}
	};
	
	//@@ get system date
	wehrm.ui.getSystemDate = function(str) {
		return moment().format(str);
	};
	
	wehrm.ui.getSiteUrl = function(wsvId,url){
		url = (url == undefined)?"":"?"+url;
		parent.window.location.href = "/"+wsvId+".act"+url;
	};
	
	wehrm.ui.redireHashTag = function(wsvId,url){
		url = (url == undefined)?"":"#"+url;
		parent.window.location.href = "/"+wsvId+".act"+url;
	};
	
	wehrm.ui.sendDirectTo = function(url){
		window.location.href = url;
	};
	wehrm.ui.formateDate = function(str){
		if(jex.isNull(str)){
			return;
		}
		var year = str.substring(0,4);
		var month = str.substring(4,6);
		var day = str.substring(6,8);
		return year+"-"+month+"-"+day;
	};
	wehrm.ui.formatDateTime = function(str){
		if(jex.isNull(str)){
			return;
		}
		var year = str.substring(0,4);
		var month = str.substring(4,6);
		var day = str.substring(6,8);
		var hour = str.substring(8,10);
		var mm = str.substring(10,12);
		var ss = str.substring(12,14);
		return year+"-"+month+"-"+day+" "+hour+":"+mm+":"+ss;
	};
	
	
	wehrm.ui.bbFileUpload = function(callbackFn, file_type, max_file, max_size){
		var input = {
			FILE_TYPE: file_type,
			MAX_FILE: max_file,
			MAX_SIZE: max_size
		};
		top.wehrm.popup.openPopup("fileupload_0001_01", input, callbackFn, 90); //add top on 20160719
	};
	
	// 160620
	wehrm.ui.windowOpen = function (formId, options) {
		options = options || {};
		var target = options.target || 'my-target';
		var width = parseInt(options.width || 950);
		var height = parseInt(options.height || 800);
		var top = (screen.height / 2) - (height / 2); 
		var left = (screen.width / 2) - (width / 2);
		var winObj = window.open("", target, "left=" + left + ",top=" + top + ",width=" + width + ",height=" + height 
				+ ",toolbar=no,menubar=no,location=no,scrollbars=yes,status=no,resizable=no");
		try {
			winObj.blur();
			winObj.focus();
		} catch (e) {}
		var frm = document.getElementById(formId);
		if (!!frm) {
			frm.method = "post";
			frm.target = target;
			if (!!options.action)
				frm.action = options.action;
			frm.submit();
		}
		frm.target = "";
	};

	wehrm.ui.approvalPopup = function(jsonData, formId) {
//		var apiUrl = 'http://approval.webcashcorp.com:82/appr_dtl_0005.act';
		var apiUrl = wehrm.ui.bizplayApprovalBaseUrl + "appr_dtl_0005.act";
		formId = formId || 'approvalApp';
		wehrm.ui.apiForm(jsonData, apiUrl, formId);
		wehrm.ui.windowOpen(formId);
	};
	
	wehrm.ui.greenMessagePopup = function(jsonData, formId) {
//		var apiUrl = 'https://gmessage.appplay.co.kr/pop_gbox_pc_6010.act';
		var apiUrl = wehrm.ui.bizplayGreenMessageBaseUrl + "pop_gbox_pc_6010.act";
		formId = formId || 'greenMessageApp';
		wehrm.ui.apiForm(jsonData, apiUrl, formId);
		wehrm.ui.windowOpen(formId);
	};
	
	wehrm.ui.rptWindowPopup = function(jsonData, actionUrl ,formId) {
		formId = formId || 'frmRPTPopup';
		wehrm.ui.apiForm(jsonData, actionUrl, formId);
		wehrm.ui.windowOpen(formId);
	};
	
	wehrm.ui.apiForm = function(jsonData, apiUrl, formId) {
		var $form = $('<form></form>');
		formId = formId || 'apiForm';
		$(document).find('#' + formId).remove();
		$.each(jsonData, function(i,e){
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
			'action': apiUrl,
			'method': 'POST'
		});
		$form.appendTo('body');
	};

	
};


/*2016-07-04 Houng Borey*/ 
 
wehrm.ui.fnDateFormateToYYYY_MM_DD = function(id, name, size, type, curObj){ 
	var orgin_date 	= "";
	if(type == "jexMsg"){
		orgin_date 		= $(curObj).val();
		if((orgin_date.length == 8) && (Number(orgin_date))){
			if(moment(orgin_date,'YYYYMMDD', true).isValid()){
				if(wehrm.ui.fnCheckYearInRang(curObj, orgin_date)){
					$(curObj).val(moment(orgin_date).format('YYYY-MM-DD'));
					$(curObj).removeClass("fin");
				}else{
					$(curObj).val("");
					parent.jex.warning(name +" ìžë¦¿ìˆ˜(8)ë¥¼ í™•ì¸í•˜ì„¸ìš”.");
					$(curObj).addClass("input_style1 fin");
					$(curObj).focus();
				}
				
			}else{
				$(curObj).val("");
				parent.jex.warning(name +" ìžë¦¿ìˆ˜(8)ë¥¼ í™•ì¸í•˜ì„¸ìš”.");
				$(curObj).addClass("input_style1 fin");
				$(curObj).focus();
			}
			
		}else{ 
			if(orgin_date.length == 10){
				if(moment(orgin_date,'YYYY-MM-DD', true).isValid()){
					if(wehrm.ui.fnCheckYearInRang(curObj, orgin_date)){
						$(curObj).val(moment(orgin_date).format('YYYY-MM-DD'));
						$(curObj).removeClass("fin");
					}else{
						$(curObj).val("");
						parent.jex.warning(name +" ìžë¦¿ìˆ˜(8)ë¥¼ í™•ì¸í•˜ì„¸ìš”.");
						$(curObj).addClass("input_style1 fin");
						$(curObj).focus();
					}
				}else{
					$(curObj).val("");
					parent.jex.warning(name +" ìžë¦¿ìˆ˜(8)ë¥¼ í™•ì¸í•˜ì„¸ìš”.");
					$(curObj).addClass("input_style1 fin");
					$(curObj).focus();
				}
			} 
		}
	}else{
		orgin_date 		= $(id).val();
		if((orgin_date.length == 8) && (Number(orgin_date))){
			if(moment(orgin_date,'YYYYMMDD', true).isValid()){
				if(wehrm.ui.fnCheckYearInRang(curObj, orgin_date)){
					$(id).val(moment(orgin_date).format('YYYY-MM-DD'));
					$(id).parent().parent().removeClass("fin");
				}else{
					$(id).val("");
					showPrintInfoMsg("", name +" ìžë¦¿ìˆ˜(8)ë¥¼ í™•ì¸í•˜ì„¸ìš”.", size);
					$(id).parent().parent().attr("class", "input_style1 fin");
					$(id).focus();
				}
			}else{
				$(id).val("");
				showPrintInfoMsg("", name +" ìžë¦¿ìˆ˜(8)ë¥¼ í™•ì¸í•˜ì„¸ìš”.", size);
				$(id).parent().parent().attr("class", "input_style1 fin");
				$(id).focus();
			}
			
		}else{
			if(orgin_date.length == 10){
				if(moment(orgin_date,'YYYY-MM-DD', true).isValid()){
					if(wehrm.ui.fnCheckYearInRang(curObj, orgin_date)){
						$(id).val(moment(orgin_date).format('YYYY-MM-DD'));
						$(id).parent().parent().removeClass("fin");
					}else{
						$(id).val("");
						showPrintInfoMsg("", name +" ìžë¦¿ìˆ˜(8)ë¥¼ í™•ì¸í•˜ì„¸ìš”.", size);
						$(id).parent().parent().attr("class", "input_style1 fin");
						$(id).focus();
					}
				}else{
					$(id).val("");
					showPrintInfoMsg("", name +" ìžë¦¿ìˆ˜(8)ë¥¼ í™•ì¸í•˜ì„¸ìš”.", size);
					$(id).parent().parent().attr("class", "input_style1 fin");
					$(id).focus();
				}
			}
		}
	}
};

wehrm.ui.fnFormateDateYyyyMmDd = function(date){
	var orgin_date 	= date;
	var yyyy 		= "";	
	var mm			= "";	
	var dd 			= "";	
	
	if(orgin_date.length == 8){
		yyyy 		= orgin_date.substring(0,4);
		mm			= orgin_date.substring(4,6);
		dd 			= orgin_date.substring(6,8);
		return yyyy + '-' + mm + '-' + dd;
		
	}else if(orgin_date.length == 10){
		yyyy 		= orgin_date.substring(0,4);
		mm			= orgin_date.substring(5,7);
		dd 			= orgin_date.substring(8,10);
		return yyyy + '-' + mm + '-' + dd;
	}else{
		
	}
};



wehrm.ui.fnCheckYearInRang	= function(curObj, OrigDate ){
	var yearList 	= [];
	var origYear 	= "";
	origYear		= OrigDate;
	$(".ui-datepicker-year option").each(function(){
		yearList.push($(this).val());
		
	});
	
	if(origYear.length == 8 || origYear.length == 10){
		return wehrm.ui.isInArray(origYear.substring(0, 4), yearList);
	}
};

wehrm.ui.isInArray  = function(value, array) {
	  return array.indexOf(value) > -1;
};

wehrm.ui.hrYear =  function(target){
	var ajex=jex.createAjaxUtil("hr_year_cmb_set_r001");
	
	ajex.setErrTrx(false);
	ajex.execute(function(data) {
		if(data.OUT_REC.length > 0){
			for(i=0; i<data.OUT_REC.length; i++){
				$(target).append('<li><a href="javascript:">'+data["OUT_REC"][i]["YEAR_TXT"]+'</a></li>');
			}
		}
	});
	
};

wehrm.ui.layerPopupIframe = function(iframeSrc, iframeOption, callback){
    iframeOption = iframeOption || {};
    var width = iframeOption.width || 950;
    var height = iframeOption.height || 600;
    var iframeId = iframeOption.id || 'layerPopupIframe';

    var tags = [
        '<div id="_' + iframeId + '" class="layer" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; z-index:100;">',
        '  <div class="bg" style="position:absolute; top:0; left:0; width:100%; height:100%; background:#000; opacity:.5; filter:alpha(opacity=50);"></div>',
        '  <div id="' + iframeId + '" class="pop-layer" style="display:block; position:absolute; top:50%; left:50%; width:' + width + 'px; height:' + height + 'px;  background-color:#fff; border: 0px solid #3571B5; z-index: 10;">',
        '  <div class="pop-container"><div class="pop-conts">',
        '    <iframe id="'+iframeId+'" src="' + iframeSrc + '" scrolling="no" frameborder="0" marginheight="0" marginwidth="0" style="width:100%;min-height:600px;border:0px;"></iframe>',
        '  </div></div></div>',
        '</div>',
    ];

    $(document).find('#_' + iframeId).remove();
    $('body').append(tags.join(''));

    $(".layer iframe").load(function(){
        var temp = $('#' + iframeId);
        var bg = temp.prev().hasClass('bg');

        var $width = temp.outerWidth();
        var $height = temp.outerHeight();

        if(bg){
            $('.layer').fadeIn();
        } else {
            temp.fadeIn();
        }

        if ($width < $(document).width() ) {
            temp.css('margin-left', '-' + ($width/2) + 'px');
        } else {
            temp.css('left', '0px');
        }

        if ($height < $(document).height() ){
            temp.css('margin-top', '-' + ($height/2) + 'px');
        } else {
            temp.css('top', '0px');
        }
        
        var layerIframe = $(this).contents();
        
        layerIframe.find('.btn_popclose').on('click', function(){
        	$('.layer').fadeOut();
        	$('#_' + iframeId).remove();
        });
        
        layerIframe.find('#btnclose').on('click', function(){
        	$('.layer').fadeOut();
        	$('#_' + iframeId).remove();
        });
        
        layerIframe.find('#closePopup').on('click', function(){
        	$('.layer').fadeOut();
        	$('#_' + iframeId).remove();
        });
        
        layerIframe.find('#confirmBtn').on('click', function(){
        	$('.layer').fadeOut();
        	$('#_' + iframeId).remove();
        });
        
        var contentHeight = layerIframe.height();
		$(this).height(contentHeight-1);
        
        if (typeof callback == 'function') {
        	callback($(this), layerIframe);        	
        }
    });
};

wehrm.ui.layerPopupIframeClose = function(iframeId){
	var id = iframeId || 'layerPopupIframe';
	$('.layer').fadeOut();
	parent.$('#_' + id).remove();
};

//set input to input number only
wehrm.ui.inputIntOnly = function(selector){
	$(selector).keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
             // Allow: Ctrl+C
            (e.keyCode == 67 && e.ctrlKey === true) ||
             // Allow: Ctrl+X
            (e.keyCode == 88 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
	
};
wehrm.ui.clearFileUpload = function(selector){
	var elemUploadFile = document.getElementById(selector);
	elemUploadFile.onclick = function () {
	    this.value = null;
	};
	
};
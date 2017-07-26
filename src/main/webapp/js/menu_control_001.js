var _this;
var menu_control_001={};
var edithtml='';

$(document).ready(function(){
	menu_control_001.init();
	menu_control_001.listMenu();	
	$(document).on("click", ".btn_folder_plus",function(e){
		$('.tree_layerpop').hide();
		$(this).parent().find('.tree_layerpop').show();	
	});
	$(document).on("click", "#btCancelAdd",function(e){
		menu_control_001.listMenu();	
	});
	$(document).on("click", "#btAdd",function(e){
		menu_control_001.addMenu(this);
	});
	
	$(document).on("click", "#btRemove",function(e){
		menu_control_001.removeMenuTree(this);
	});
	$(document).on("click", "#tbUpdat",function(e){
		menu_control_001.addMenu(this,1);	
	});
	$(document).on("click", "#tbCancel",function(e){
		$(this).parent().find('span').show();
		$(this).parents('tr').find('.btn_folderset').show();
		$(this).parent().find('a,input').remove();
		$(this).parents('tr').find('.btn_folderset').show();
	});
	$(document).on("click", "#btUpdate",function(e){
		$(this).parents('tr').find('span').hide();
		$(this).parents('tr').find('.btn_folderset').hide();
		$(this).parents('tr').find('.depset_layer').hide();
	
		$(this).parents('tr').find('#editMenu').addClass('update');
		$(this).parents('tr').find('#editMenu').append(menu_control_001.updateMenu(this));	
	});
	$(document).on("mouseleave", ".tree_layerpop", function(){
		$(".tree_layerpop").hide();
	});
	$(document).on("mouseleave", ".depset_layer", function(){
		$(".depset_layer").hide();
	});
	
	$(document).on("click", "#btaddImg", function(){
		var input={};
		input["randname"]= $(this).parents("tr").find("#randname").val();
		input["catgid"]=  $(this).parents("tr").find("#catgid").val();
		input["pid"]=     $(this).parents("tr").find("#pid").val();
		
	//	wehrm.popup.openPopup("popup_uploadimg_002");
		wehrm.popup.openPopup("popup_uploadimg_002",input, function(data){
			callbackFn(data);
    	});
	});
	//add main
	$(document).on("click", "#addMain",function(e){
		var input={};
		input.lvl =        $(this).parents('tr').find("#lvl").attr("value");
		input.parentid =   $(this).parents('tr').find("#parentid").val();
		input.usercd =     $(this).parents('tr').find("#usercd").val();
		input.vscatgid =   $(this).parents('tr').find("#vscatgid").val();
		
		 $(this).parents().find("#edit").remove();
		 $(this).parents('tr').after(menu_control_001.editTrHtml(input));
    });
	//add sub
	$(document).on("click", "#addSub",function(e){
		var input={};
		input.lvl = parseInt($(this).parents('tr').find("#lvl").attr("value"))+1;
		input.parentid = $(this).parents('tr').find("#catgid").val();
		input.usercd   = $(this).parents('tr').find("#usercd").val();
		input.vscatgid =   $(this).parents('tr').find("#vscatgid").val();
		 $(this).parents().find("#edit").remove();
		 $(this).parents('tr').after(menu_control_001.editTrHtml(input));
   });
	//setting
   $(document).on("click", ".btn_folderset",function(e){
		$(this).parents().find("#edit").remove();
		$(this).parent().find('.depset_layer').show();
   });
});
menu_control_001.init=function(){	
	
}
menu_control_001.listMenu=function(){
	$.ajax({
    	type   : 'GET',
	    url    : "/category/list",
	    cache  : true,
	    
	})
    .done(function(dat) {
    	var tbody = $(".list_table tbody");
    	var html = "";
    	tbody.html('');
    	console.log(dat);
    	$.each(dat.OUT_REC, function(i,v){
    			html += '<tr>                                                                 ';
    			html += ' <td class="t_center brd_r">									      ';
    			html += '		<div class="ly_po">											  ';
    			html += '			<a class="btn_folder_plus" id="btnAddMenu">Add</a>		  ';
    			html += '           <input type="hidden" id= "lvl" value="'+ v.lvl +'"/>      ';
    			html += '           <input type="hidden" id= "catgid" value="'+v.catgid +'"/> ';
    			html += '           <input type="hidden" id= "nmeng" value="'+v.nm_eng +'"/>  ';
    			html += '           <input type="hidden" id= "nmkh" value="'+v.nm_kh +'"/>  ';
    			html += '           <input type="hidden" id= "pid" value="'+v.pid    +'"/>    ';
    			html += '           <input type="hidden" id= "usercd" value="'+v.usercd +'"/> ';
    			html += '           <input type="hidden" id= "parentid" value="'+v.parentid +'"/> ';
    			html += '           <input type="hidden" id= "vscatgid" value="'+v.vscatgid +'"/> ';
    			html += '           <input type="hidden" id= "fullengname" value="'+v.fullengname +'"/> ';
    			html += '           <input type="hidden" id= "fullkhname" value="'+v.fullkhname +'"/> ';
    			html += '           <input type="hidden" id= "randname" value="'+v.randname +'"/> ';
				html += '			<!-- layer popup -->									';
				html += '			<div class="tree_layerpop" style="display:none;">		';
    			html += '				<ul>												';
    			if( v.lvl == '1'){
    				html += '					<li><a id="addMain">Add Main</a></li>		';
    			}
    			html += '				<li><a id="addSub">Add Sub</a></li>			';
    			html += '				</ul>											    ';
    			html += '			</div>												    ';
    			html += '			<!-- //layer popup -->								 	';
    			html += '		</div>												     	';
    			html += '	</td>														    ';
    			
    			html += '	<td class="t_left"><div class="dp'+v.lvl+'" id="editMenu"><span class="ico_treefolder">'+v.lvl+'</span> <span class="txt">'+ v.nm_eng+'</span></div></td>';
    			html += '	<td class="t_right"><a class="txt_d">'+v.parentid+'</a></td>		     ';
    			html += '	<td class="t_left"><a class="txt_d off">'+v.lvl+'</a></td>				 ';
    			html += '	<td class="t_left"><a class="txt_d off">'+v.usercd+'</a></td>			 ';
    			
    			html += '	<td class="t_center">												     ';
    			html += '		<div style="position:relative;">									 ';
    			html += '			<a class="btn_folderset" title="설정"></a>					     ';
    			html += '			<!-- layer -->											         ';
    			html += '			<div class="depset_layer" style="display:none;">				 ';
    			html += '				<ul>											             ';
    			html += '					<li class="first"><a id="btUpdate">Update</a></li>		 ';
    			html += '					<li><a id="btRemove">Remove</a></li>					 ';
    			html += '					<li><a id="btaddImg">Add image</a></li>					 ';
    			html += '				</ul>											             ';
    			html += '			</div>												             ';
    			html += '			<!-- //layer -->										         ';
    			html += '		</div>													             ';
    			html += '	</td>                                                                    ';
    			html += '	</tr>                                                                    ';
          })
          
          if(dat.OUT_REC.length == 0){
        	  var  html =' <tr>                                                                   '; 
        	       html+=' <td class="t_center brd_r">								              ';
        	    /* edithtml+='	<div class="ly_po">									              ';
        	     edithtml+='		<a class="btn_folder_plus">추가</a>						      ';
        	     edithtml+='		<!-- layer popup -->								          ';
        	     edithtml+='		<div class="tree_layerpop" style="display:none;">		      ';
        	     edithtml+='			<ul>									                  ';
        	     edithtml+='				<li><a>동일 수준의 부서로 추가</a></li>					      ';
        	     edithtml+='				<li><a>하위 부서로 추가</a></li>					          ';
        	     edithtml+='			</ul>									                  ';
        	     edithtml+='		</div>										                  ';
        	     edithtml+='		<!-- //layer popup -->								          ';
        	     edithtml+='	</div>											                  ';*/
        	       html+=' </td>											                      ';
        	       html+=' <td class="t_left">									                  ';
        	       html+='     <div class="dp1">									              ';
        	       html+='            <span class="ico_treefolder"></span> 		                  ';
        	       html+='            <input type="hidden" id="catgid" value="1">                 ';
        	       html+='            <input type="hidden" id="vscatgid" value="1">               ';
        	       html+='            <input type="text" id="txtnmeng" style="width:150px;">&nbsp;';
        	       html+='            <input type="text" id="txtnmkh" style="width:150px;">&nbsp; ';
        	       html+='		    <a id="btAdd"><img src="../img/btn/btn_s_ok.png" alt="저장"></a>';
        	       html+='		    <a id="btCancelAdd" style="margin-left:2px;"><img src="../img/btn/btn_s_cnl.png" alt="취소"></a> ';
        	       html+='	     </div>										                    ';
        	       html+='	 </td>											                    ';
        	       html+=' <td class="t_right"><a class="txt_d" id="parentid"></a></td>         ';
        	       html+=' <td class="t_left"><a class="txt_d off" id="lvl" value="1">1</a></td>	        ';
        	       html+=' <td class="t_left"><a class="txt_d off" id="usercd"></a></td>	    ';
        	       html+=' <td class="t_center">									            ';
        	       html+='	<div style="position:relative;">							        ';
        	       html+='		<a class="btn_folderset" title="설정"></a>					    ';
        	       html+='		<!-- layer -->									                ';
        	       html+='		<div class="depset_layer" style="display:none;">				';
        	       html+='			<ul>									                    ';
        	       html+='				<li class="first"><a>부서명 수정</a></li>				    ';
        	       html+='				<li><a>부서 이동</a></li>						            ';
        	       html+='				<li><a>부서 삭제</a></li>						            ';
        	       html+='			</ul>									                    ';
        	       html+='		</div>										                    ';
        	       html+='		<!-- //layer -->								                ';
        	       html+='	 </div>											                    ';
        	       html+=' </td>											                     ';
        	       html+=' </tr>                                                                 ';  
               
			}
    	
            html += "<tr class='bg' id=\"dvsn_no\">";
    	    html += "<td class=\"t_center\"><input name=\"LEVEL\" type=\"hidden\" value=\"0\"></td>";
    		html += "<td class=\"t_left\"><div class=\"dp0\"><span class=\"ico_treefolder\"></span> <span class=\"txt\">부서 미지정</span></div></td>";
    		html += "<td class=\"t_left\"></td>";
    		html += "<td class=\"t_left un\"><a id=\"unSelectedCnt\" class=\"txt_d\" onclick=\"openMemberset('');\">0</a></td>";
    		html += "<td class=\"t_left\"></td>";
    		html += "<td class=\"t_left\">&nbsp;</td>";
    		html += "</tr>";
     
  	tbody.html(html);
  	$("#CNT").text(dat.TOTAL);
   })
	
};
menu_control_001.editTrHtml = function(input){
	 var edithtml='';
	
		if(input.lvl!='1'){
			parentid = input.parentid ;
		}
     edithtml+=' <tr id="edit">                                                       '; 
     edithtml+=' <td class="t_center brd_r">								          ';
     edithtml+= '           <input type="hidden" id= "lvl" value="'+ input.lvl +'"/>  ';
     edithtml+= '           <input type="hidden" id= "vscatgid" value="'+ input.vscatgid +'"/>';
     
    /* edithtml+='	<div class="ly_po">									              ';
     edithtml+='		<a class="btn_folder_plus">추가</a>						      ';
     edithtml+='		<!-- layer popup -->								          ';
     edithtml+='		<div class="tree_layerpop" style="display:none;">		      ';
     edithtml+='			<ul>									                  ';
     edithtml+='				<li><a>동일 수준의 부서로 추가</a></li>					      ';
     edithtml+='				<li><a>하위 부서로 추가</a></li>					          ';
     edithtml+='			</ul>									                  ';
     edithtml+='		</div>										                  ';
     edithtml+='		<!-- //layer popup -->								          ';
     edithtml+='	</div>											                  ';*/
     edithtml+=' </td>											                      ';
     edithtml+=' <td class="t_left">									              ';
     edithtml+='     <div class="dp'+input.lvl+'">									  ';
     edithtml+='            <span class="ico_treefolder">'+input.lvl+'</span> 		  ';
     edithtml+='            <input type="text" id="txtnmeng" style="width:150px;">&nbsp;';
     edithtml+='            <input type="text" id="txtnmkh" style="width:150px;">&nbsp;';
     edithtml+='		    <a id="btAdd"><img src="../img/btn/btn_s_ok.png" alt="저장"></a>';
     edithtml+='		    <a id="btCancelAdd" style="margin-left:2px;"><img src="../img/btn/btn_s_cnl.png" alt="취소"></a> ';
     edithtml+='	     </div>										                    ';
     edithtml+='	 </td>											                    ';
     edithtml+=' <td class="t_right"><a class="txt_d" id="parentid">'+parentid+'</a></td>';
     edithtml+=' <td class="t_left"><a class="txt_d off" id="lvl">'+input.lvl+'</a></td>			';
     edithtml+=' <td class="t_left"><a class="txt_d off" id="usercd">'+input.usercd+'</a></td>	    ';
     edithtml+=' <td class="t_center">									                ';
     edithtml+='	<div style="position:relative;">							        ';
     edithtml+='		<a class="btn_folderset" title="설정"></a>					    ';
     edithtml+='		<!-- layer -->									                ';
     edithtml+='		<div class="depset_layer" style="display:none;">				';
     edithtml+='			<ul>									                    ';
     edithtml+='				<li class="first"><a>부서명 수정</a></li>				    ';
     edithtml+='				<li><a>부서 이동</a></li>						            ';
     edithtml+='				<li><a>부서 삭제</a></li>						            ';
     edithtml+='			</ul>									                    ';
     edithtml+='		</div>										                    ';
     edithtml+='		<!-- //layer -->								                ';
     edithtml+='	 </div>											                    ';
     edithtml+=' </td>											                        ';
     edithtml+=' </tr>                                                                  ';  
		
	return edithtml;
};
menu_control_001.updateMenu = function(obj){
	$(obj).parents().find('depset_layer').hide(); //레이어 hide
	 var nmeng = $(obj).parents('tr').find("#nmeng").val();
	 var nmkh  = $(obj).parents('tr').find("#nmkh").val();
	 
     var html   =' <input type="text" id="txtnmeng" style="width:150px;" value="'+ nmeng +'">	                  ';
         html  +=' <input type="text" id="txtnmkh" style="width:150px;" value="'+ nmkh + '">                      ';
         html  +=' <a id="tbUpdat" ><img src="../img/btn/btn_s_ok.png" alt="저장"></a>		                  ';
         html  +=' <a id="tbCancel" style="margin-left:2px;"><img src="../img/btn/btn_s_cnl.png" alt="취소"></a>';
	return html;
}
menu_control_001.addMenu= function(data,type){
	var csrfHeader = $("meta[name='_csrf_header']").attr("content");
	var csrfToken = $("meta[name='_csrf']").attr("content");
	var input={};
	if(type ==1){
		input["catgid"]      = $(data).parents("tr").find('#catgid').val();
	}
	input["vscatgid"]    = $(data).parents("tr").find('#vscatgid').val();
	input["nm_eng"]      = $(data).parents("tr").find('#txtnmeng').val();
	input["nm_kh"]       = $(data).parents("tr").find('#txtnmkh').val();
	input["lvl"]         = $(data).parents("tr").find('#lvl').val();
	input["parentid"]    = $(data).parents("tr").find('#parentid').text();
	input["pid"]         = '';
	input["usercd"]      = $(data).parents("tr").find('#usercd').text();
	 $.ajax({
	        type   : 'POST',
	    	url    : '/category/save',
	    	cache: false,
            dataType: 'json',
	    	contentType: 'application/json',
	        async: false,
	        beforeSend: function(xhr) {
	            xhr.setRequestHeader(csrfHeader, csrfToken);
	        },
	        data:JSON.stringify(input),
	    	success :function(result){
	    		menu_control_001.listMenu();
	    	 }
		   })
};	
menu_control_001.removeMenuTree= function(data){
	/*var csrfHeader = $("meta[name='_csrf_header']").attr("content");
	var csrfToken = $("meta[name='_csrf']").attr("content");*/
	var input={};
	input["catgid"]      = $(data).parents("tr").find('#catgid').val();
	 $.ajax({
	        type   : 'GET',
	    	url    : 'category/remove',
	    	cache: false,
            dataType: 'json',
	    	contentType: 'application/json',
	        async: true,
	       /* beforeSend: function(xhr) {
	            xhr.setRequestHeader(csrfHeader, csrfToken);
	        },*/
	        data:input,
	    	success :function(result){
	    		menu_control_001.listMenu();
	    	 }
		   })
	
};
//sort json
function sortByKey(array, key) {
return array.sort(function(a, b) {
    var x = a[key]; var y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
});
}
//call back
function callbackFn(data){
	if(data.IS_TRUE){
		menu_control_001.listMenu();
	}	
}

//empl_0004_01.js
	
	
	
	

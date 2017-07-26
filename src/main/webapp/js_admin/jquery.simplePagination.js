(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-60937238-1', 'auto');
  ga('send', 'pageview');
  
 /**
* 코드 가져오기 공통 함수
* @param cdList - 조회할 코드 ID 배열
* @param lngg   - 언어(없을 경우 KOR)
* @return rsltList - 조회한 코드 데이터 리스트
*/
function drawTablePaing( div_id, callback, curPageNo, totPage,input_page_size) {
	var page_size = 10; //표시할 페이지 수
	
	if(input_page_size)
	{
		page_size = input_page_size;
	}
	else
	{
		page_size = 10;
	}
	
	
	var currentPage  = (curPageNo)?curPageNo:1;
	if(parseInt(currentPage) < 1) currentPage = 1;
	if(parseInt(currentPage) > parseInt(totPage)) currentPage = totPage;
	var currentBlock = Math.ceil(currentPage/page_size);
	var firstPage     = currentBlock*page_size-page_size+1;
	var lastPage      = currentBlock*page_size;
	
	$("#"+div_id).children().remove();
	
	var firstHtml = "<a id='paging_first' href='javascript:' class='btn_pag_cntr first'><span class='blind'>first</span></a>";
	var prevHtml  = "<a id='paging_pre' href='javascript:' class='btn_pag_cntr prev'><span class='blind'>previous</span></a>";
	var nextHtml  = "<a id='paging_next' href='javascript:' class='btn_pag_cntr next'><span class='blind'>next</span></a>";
	var lastHtml  = "<a id='paging_last' href='javascript:' class='btn_pag_cntr last'><span class='blind'>last</span></a>";
	var pageHtml  = "<span class='pag_num'>";
	
	if(totPage > 0){
	
		for(var i = firstPage; i <= lastPage && i <= totPage;  i++){
			
			if(currentPage == i){
				pageHtml += "<a class='on'>"+i+"</a>";
			}else{ 
				pageHtml += "<a>"+i+"</a>";				
			}
			
		} 	
		pageHtml += " </span>";
		
		$("#"+div_id).append(firstHtml);
		$("#"+div_id).append(prevHtml);
		$("#"+div_id).append(pageHtml);
		$("#"+div_id).append(nextHtml);
		$("#"+div_id).append(lastHtml);
		
		if(currentPage>10){ //enable first arrow // enable prev arrow
			$("#paging_first").addClass("on");
			$("#paging_pre").addClass("on");
		}
		
		//if(totPage-currentPage>=5){
		if(totPage-lastPage > 0){ // enable last arrow // enable next arrow 
			$("#paging_last").addClass("on");
			$("#paging_next").addClass("on");
		}
	}else{
		pageHtml += " <a class='on'>1</a></span>";
		
		$("#"+div_id).append(firstHtml);
		$("#"+div_id).append(prevHtml);
		$("#"+div_id).append(pageHtml);
		$("#"+div_id).append(nextHtml);
		$("#"+div_id).append(lastHtml);
	}
	
	
	$("#"+div_id).find("#paging_first").click(function(){
		
		if($(this).hasClass("on")==false){ return false;}
		
		if($.isFunction(callback)){
			callback(1);
		}
	});
	$("#"+div_id).find("#paging_pre").click(function(){
		
		if($(this).hasClass("on")==false){ return false;}
		
		currentBlock--;
		currentPage = currentBlock*page_size-page_size+1;
		if(currentPage < 0) currentPage = 1;
		
		if($.isFunction(callback)){
		
			callback(currentPage);
		}
	});
	$("#"+div_id).find("#paging_next").click(function(){
		
		if($(this).hasClass("on")==false){ return false;}
		
		currentBlock++;
		currentPage = currentBlock*page_size-page_size+1;
		
		
		if(currentPage > totPage){
			currentPage = totPage;
		}
		
		if($.isFunction(callback)){
		
			callback(currentPage);
		}
	});
	$("#"+div_id).find("#paging_last").click(function(){
		
		if($(this).hasClass("on")==false){ return false;}
		
		if($.isFunction(callback)){		
			callback(totPage);
		}
	});
	$("#"+div_id).find(".pag_num a").click(function(){
		
		if($(this).hasClass("on")==true){ return false;}
		
		currentPage = $(this).html();
		
		if($.isFunction(callback)){
		
			callback(currentPage);
		}
	});
}
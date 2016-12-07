$(document).ready(function(){

	$('.form').find('input, textarea').on('keyup blur focus', function (e) {
		var $this = $(this),
      	label = $this.prev('label');

	  	if (e.type === 'keyup') {
			if ($this.val() === '') {
				label.removeClass('active highlight');
			} else {
        		label.addClass('active highlight');
        	}
			} else if (e.type === 'blur') {
	  				if( $this.val() === '' ) {
	  				label.removeClass('active highlight'); 
	  		} else {
	  				label.removeClass('highlight');   
	  		}   
    		} else if (e.type === 'focus') {
      
    			if( $this.val() === '' ) {
    				label.removeClass('highlight'); 
					} 
    			else if( $this.val() !== '' ) {
    				label.addClass('highlight');
				}
    		}

		});

		$('.tab a').on('click', function (e) {
			e.preventDefault();
  
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
  
				target = $(this).attr('href');

				$('.tab-content > div').not(target).hide();
  
				$(target).fadeIn(600);
  

	     });
		
		$('#btsign_up').on('click', function (e) {
			ftsign_up();
		
		});

});

function ftsign_up(){
			var csrfHeader = $("meta[name='_csrf_header']").attr("content");
			var csrfToken = $("meta[name='_csrf']").attr("content");
			
			var input={};

			input["firstname"] = $("#firstname").val();
			input["lastname"]  = $("#lastname").val();
			input["email"]     = $("#email").val();
			input["password"]  = $("#password").val();
			  $.ajax({
			    	type   : 'POST',
			    	url    :  '/users/sign_up',
			    	cache: false,
			        async: false,
			        
			        beforeSend: function(xhr) {
			            xhr.setRequestHeader(csrfHeader, csrfToken);
			        },
			        data:input,
			    	success :function(result){
			    		alert(result);
			    		ListAll();
			    	 }
				   })
}



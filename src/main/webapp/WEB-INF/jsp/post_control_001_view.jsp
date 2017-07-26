<!DOCTYPE html>
<html >
<head>
  <meta charset='UTF-8'>
  <title>Multi Step Form with Progress Bar using jQuery and CSS3</title>
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css'>
      <link rel='stylesheet' href='/css/post.css'>
     
</head>
<body>
 <!-- multistep form -->
<form id='msform'>
  <!-- progressbar -->
  <ul id='progressbar'>
    <li class='active'>Select category</li>
    <li>Information Product</li>
    <li>Upload pictures</li>
	<li>Set your Address</li>
  </ul>
  <!-- fieldsets -->
  <fieldset id='form0'>
    <h2 class='fs-title'>Select category </h2>
    <h3 class='fs-subtitle'>This is step 1</h3>
<nav id='primary_nav_wrap'>
<ul>
 <li class='current-menu-item'><a href='' class='next'>Vehicle</a></li>
   	 <li class='current-menu-item'><a href='#'> Buy and Sell</a>
      <ul>
      	 <li class='next'><a href='#' class='next'>Phone Tablet</a></li>
      	 <li class='next'><a href='#' class='next'>Phone Accessary</a></li>
      	 <li class='next'><a href='#' class='next'>Phone number</a></li>
      	 <li class='next'><a href='#'>Computers</a>
         <ul>
           <li class='next'><a href='#'  class='next'>Deep Menu 1</a></li>
           <li class='next'><a href='#'  class='next'>Deep Menu 2</a></li>
         </ul>
         </li>
         <li class='next'><a  class='next' href='#'>Sub Menu 5</a></li>
     </ul>
  </li>
  <li class='current-menu-item'><a href='#'>House & Land</a>
    <ul>
      <li><a href='#'>for Sale</a>
		   <ul>
              <li><a href='#'  class='next'>House</a></li>
              <li><a href='#'  class='next'>Apartment</a></li>
              <li><a href='#'  class='next'>Land</a></li>
			  <li><a href='#'  class='next'>Properties</a></li>
           </ul>
	  </li>
      <li class='dir hasChild'><a href='#'>For rent</a>
	        <ul>
	          <li class='dir'><a href='#'  class='next'>House</a></li>
              <li class='dir'><a href='#'  class='next'>Apartment</a></li>
              <li class='dir'><a href='#'  class='next'>Land</a></li>
			  <li class='dir'><a href='#'  class='next'>Properties</a></li>
			 </ul>
			  
	  </li>
    </ul>
  </li>
  <li class='current-menu-item'><a href='#'>Clothes & Fashion Accessary</a>
    <ul>
      <li class='dir hasChild'><a href='#'>Woman</a>
			<ul>
				<li class='dir'><a href='#' class='next'>Bloouse</a></li>
				<li class='dir'><a href='#' class='next'>One piece</a></li>
				<li class='dir'><a href='#' class='next'>T-shirt</a></li>
				<li class='dir'><a href='#' class='next'>Jeans</a></li>
				<li class='dir'><a href='#' class='next'>Bag</a></li>
				<li class='dir'><a href='#' class='next'>Jewry</a></li>
				<li class='dir'><a href='#' class='next'>Others</a></li>
			</ul>
	  </li>
	  <li class='dir hasChild'><a href='#'> Man</a>
			<ul>
				<li class='dir'><a href='#' class='next'>Trouser</a></li>
				<li class='dir'><a href='#' class='next'>shirts</a></li>
				<li class='dir'><a href='#' class='next'>T-shirt</a></li>
				<li class='dir'><a href='#' class='next'>Jeans</a></li>
				<li class='dir'><a href='#' class='next'>Jogger</a></li>
				<li class='dir'><a href='#' class='next'>Bag</a></li>
				<li class='dir'><a href='#' class='next'>>Watch</a></li>
				<li class='dir'><a href='#' class='next'>Others</a></li>
			</ul>
	  
	  </li>
	  <li class='dir'><a href='#'>children</a>
        <ul>
          <li><a href='#' class='next'>Category 1</a></li>
          <li><a href='#' class='next'>Category 2</a></li>
          <li><a href='#' class='next'>Category 3</a></li>
          <li><a href='#' class='next'>Category 4</a></li>
          <li><a href='#' class='next'>Category 5</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li class='current-menu-item'><a href='#'>Menu 4</a></li>
  <li class='current-menu-item'><a href='#'>Menu 5</a></li>
  <li class='current-menu-item'><a href='#'>Menu 6</a></li>
  </ul>
</nav>

  </fieldset>
  <fieldset id='form1'>
    <h2 class='fs-title'>INFORMATION PRODUCT</h2>
    <h3 class='fs-subtitle'>Fill product's information below!</h3>
	<table >
		<tr>
	       <td>Category <span>*</span></td>
           <td><input type='text' name='Category' placeholder='Category'  disabled /> </td>
		</tr>  
		<tr>
	       <td>Title <span> * </span></td>
            <td><input type='text' name='facebook' placeholder='title' /> </td>
		</tr>  
		<tr>
	        <td>Price <span> *</span> </label> </td>
            <td><input type='text' name='gplus' placeholder='price'/></td>
		 </tr>
		<tr>
		    <td>Description <span> *</span> </td>	
            <td><textarea name='address' rows='5' placeholder='Descript about your product information' ></textarea></td>
		 </tr> 
		 
	</table>
	<td><input type='button' name='previous' class='previous action-button' value='Previous' /> </td>
    <input type='button' name='next' class='next action-button' value='Next' />
  </fieldset>
  <fieldset id='form2'>
    <h2 class='fs-title'>Upload Original Picture</h2>
    <h3 class='fs-subtitle'>Be layolty to !</h3>
      <div id="results">
	  </div>
	 <div class="fileform" type="form" action="*">   
     </div>
     <div id="upload">Upload more</div>  
	
	
    <input type='button' name='previous' class='previous action-button' value='Previous' />
    <input type='button' name='next' class='next action-button' value='Next' />
  </fieldset>
 
  <fieldset id='form3'>
    <h2 class='fs-title'>Fill Your Contact</h2>
    <h3 class='fs-subtitle'>It's important for buyer!</h3>
    <table >
		<tr>
	       <td>Name <span>*</span></td>
           <td><input type='text' name='Category' placeholder='your name'  visible='true'/> </td>
		</tr>  
		<tr>
	       <td>Phone <span> * </span></td>
            <td><input type='text' name='facebook' placeholder='availible contact number' /> </td>
		</tr>  
		<tr>
	        <td>Country <span> *</span> </label> </td>
            <td><input type='text' name='gplus' placeholder='country'/></td>
		 </tr>
		 <tr>
	        <td>State<span> *</span> </label> </td>
            <td>
			   <form name=myform >
				<select name='state' placeholder='Your Location'>
					<option name=one value=one> one </option>
					<option name=two value=two> two </option>
					<option name=three value=three> three </option>
					<option name=three value=three selected> three </option>
				</select>
				</form>
			</td>
		</tr>
		<tr>
		    <td>Address <span> *</span> </td>	
            <td><textarea name='address' rows='5' placeholder='Your detail address' ></textarea></td>
		</tr> 
		<tr>
			<td><input id='save_contact' type='checkbox' checked='true' value='1'></td>
			<td>Save contact!</td>
		</tr>
	</table>
	 
    <input type='button' name='previous' class='previous action-button' value='Previous' />
    <input type='submit' name='submit' class='submit action-button' value='Finish' />
  </fieldset>
  
</form>
      <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
      <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js'></script>
      <script src="/js/post_control_001.js"></script>

        <script>
        $(function() {
            var makeInput = function() {
              return $('<input type="file" accept="image/jpeg, image/gif, image/png" name="files[]" style="opacity:0;">');
            };

            $('#upload').click(function() {
              var hookInput = makeInput();
              var id = 'i' + parseInt((new Date)/1000);
              hookInput.attr('id', id);
              $('.fileform').append(hookInput);
              $('#' + id).click();
              $(hookInput).on('change', setImage);
            });

            function setImage() {
              for (var i = 0; i < this.files.length; i++) {
                var id = $(this).attr('id');
                var file = this.files[i];
                fr = new FileReader();
                fr.onload = function(e) {
                    var img = $('<img>');
                    img.attr('src', e.target.result);
                    img.css('height', '160px');
                    $('#results').append(img);
                    $(img).on('click', {id: id}, removeImage);
                };
                fr.readAsDataURL(file);
                if ($('#results').children().length > 5) {
                  $('#upload').css('background', '#ddd');
                  $('#upload').unbind();
                }
              }
            }
            function removeImage(e) {
              $(this).remove();
              $('#' + e.data.id).remove();
            }
        });
        </script>

</body>
</html>

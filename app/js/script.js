	$(document).ready(function() {


		/* product detail slider begin */
		var itemCount= $('.slider-container ul li').length;
		height=itemCount*50;

		var  position=$('.slider-container ul').position();

		
	

		$('.up').click(function(){
			if ($('.up').attr("data")!= "false") {

				position=$('.slider-container ul').position();
				degisken=position.top;
				degisken+=268;

				$( ".slider-container ul" ).animate({
				  top: degisken + "px"
				}, 500 );

				$(this).removeClass('active');
				$('.down').addClass('active');

				$('.down').attr("data",true);
				$('.up').attr("data",false);
			}
		});

		$('.down').click(function(){
			if ($('.down').attr("data")!= "false") {
				var  position=$('.slider-container ul').position();
				degisken=position.top;
				degisken-=268;

				$( ".slider-container ul" ).animate({
				  top: degisken + "px"
				}, 500 );

				$(this).removeClass('active');
				$('.up').addClass('active');

				$('.down').attr("data",false);
				$('.up').attr("data",true);
			}
		});		



		$('.thumb-div').click(function(event) {

			var imageId=$(this).attr("data-id");

			var imagePath= $("#" + imageId).prop('src');


			$("#image-large-back").attr("src", imagePath);
			$("#image-large-back").fadeTo( 500, 1.0 );


			setTimeout(function(){
  				$("#image-large-back").fadeTo( 100, 0 );
  				$("#image-large-front").attr("src", imagePath);
			}, 300);

			
			$('.thumb-div').removeClass("thumb-div-active");
			$(this).addClass("thumb-div-active");

		});
		/* product detail slider end */


		/*color choice begin*/
		var radioColor= $('.radio-color');

		radioColor.click(function() {
			var colorValue;
			colorValue= $(this).val();
			$("#color-choiced").html(colorValue);
			$('.radio-color-top').removeClass("radio-active");

			var colorSelected= $(this).attr("data-color");

			$("#" + colorSelected).addClass('radio-active')	
			
		});
		/*color choice end*/

		/*tabs begin*/

			$(".tab-content:not(:first-child)").hide();

			$(".tab-title").click(function() {
				$(".tab-title").removeClass('active');
				$(this).addClass('active');
				var tabID=$(this).attr("data");
				
				$(".tab-content").hide();
				$( "#" + tabID).show();

			});
		/*tabs end*/

		/*range price begin*/
		$( "#data-range" ).slider({
		  range: true,
		  min: 0,
		  max: 10000,
		  values: [ 100, 5000 ],
		  slide: function( event, ui ) {
		    $( "#data-amount" ).val(  ui.values[ 0 ] + " - " + ui.values[ 1 ] );
		  }
		});
		$( "#data-amount" ).val( "" + $( "#data-range" ).slider( "values", 0 ) +
		  " - " + $( "#data-range" ).slider( "values", 1 ) );

		/*-------------------------------------------------*/

		$( "#ses-range" ).slider({
		  range: true,
		  min: 0,
		  max: 10000,
		  values: [ 100, 4000 ],
		  slide: function( event, ui ) {
		    $( "#ses-amount" ).val(  ui.values[ 0 ] + " - " + ui.values[ 1 ] );
		  }
		});
		$( "#ses-amount" ).val( "" + $( "#ses-range" ).slider( "values", 0 ) +
		  " - " + $( "#ses-range" ).slider( "values", 1 ) );		
		/*range price end*/



		/*select kulüp başla*/

			$('.select-kulup').click(function(){
			  $('.select-kulup  .options').slideToggle();
			  $('.select-kulup .options .option').click(function(){
			    var selectItem=$(this).text();
			    $('.select-kulup p').text(selectItem);
			  })
			});

		/*select kulüp end*/


		/*tarife begin*/
			$('.ui.accordion').accordion();
		/*tarife end*/



		/*slider begin*/
		$('.slider-oneri').bxSlider({
		  slideWidth: 315,
		  minSlides: 2,
		  maxSlides: 3,
		  slideMargin: 10
		});


		$('.slider-markalar').bxSlider({
		  slideWidth: 150,
		  slideHeight: 65,
		  minSlides: 2,
		  maxSlides: 6,
		  slideMargin: 10
		});
		/*slider*/

		/*coutdown begin*/
		$('.times').countdown('2016/09/01', function(event) {
		  $("#gun").html(event.strftime('%D'));
		  $("#saat").html(event.strftime('%H'));
		  $("#dakika").html(event.strftime('%M'));
		  $("#saniye").html(event.strftime('%S'));
		});
		/*coutdown end*/



	});
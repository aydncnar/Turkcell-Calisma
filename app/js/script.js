	$(document).ready(function() {


		/* product detail slider begin */
		var itemCount= $('.slider-container ul li').length;
		height=itemCount*50;

		var  position=$('.slider-container ul').position();

		$('.up').click(function(){
				position=$('.slider-container ul').position();
				degisken=position.top;
				degisken+=250;

				$( ".slider-container ul" ).animate({
				  top: degisken + "px"
				}, 1500 );
		});

		$('.down').click(function(){
			var  position=$('.slider-container ul').position();
			degisken=position.top;
			degisken-=250;

			$( ".slider-container ul" ).animate({
			  top: degisken + "px"
			}, 1500 );
		});		

		$('.slider-container ul li img').click(function(){
			var a= $(this).prop('src');
			$(".img-product-large").attr("src", a)

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
var common = {
	init: function() {
		common.main();
		common.owl();
	},
	main: function(){

		// $('.menu-trigger').click(function(event){
		// 	event.preventDefault();
		// 	$('nav').addClass('open');
		// })
		// $('.nav-close').click(function(event){
		// 	event.preventDefault();
		// 	$('nav').removeClass('open');
		// })
		
		var bLazy = new Blazy({});

		
		$('.tel-trigger').mask("+380(99) 999-99-99");

		$('.call-popup').click(function(event){
			event.preventDefault();
			var popup  = '#' + $(this).attr('data-popup');
			$('.popup-wrapper').removeClass('active');
			$(popup).addClass('active');
		});
		$('.anchor').click(function(event){
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 2000);
			$('header').removeClass('open');
		});

		$('.bnf-trigger').click(function(event){
			event.preventDefault();
			$('.popup .popup-info-wrapper').find('.popup-info').remove();
			$(this).closest('.bnf-cnt').find('.popup-info').clone().appendTo( '.popup .popup-info-wrapper');
			$('#benefitsPopup').addClass('active');
		});

		$('.popup-close').click(function(event){
			event.preventDefault();
			$('.popup-wrapper').removeClass('active');
		});


		$('.more-trigger').click(function(event){
			event.preventDefault();
			// var bLazy = new Blazy();

			var dataOpen = $(this).attr('data-open');
			var dataHidden = $(this).attr('data-hidden');

			if($(this).hasClass('hidden') == true){
				if($(this).find('.more-trigger-cnt').html() == dataHidden){
					$(this).removeClass('hidden').find('.more-trigger-cnt').text(dataOpen);
				}
				$(this).closest('.more-cnt-wrap').find('.more-cnt').removeClass('hidden');
			}else {
				if($(this).find('.more-trigger-cnt').html() == dataOpen){
					$(this).addClass('hidden').find('.more-trigger-cnt').text(dataHidden);
				}
				$(this).closest('.more-cnt-wrap').find('.more-cnt').addClass('hidden');
			}
		});



	},
	owl: function(){
		$('.reviews-slider').owlCarousel({
			items:1,
			autoHeight:true, 
			dots: true,
			nav: false
		});
		$('.shares-slider').owlCarousel({
			items:1,
			autoHeight:true, 
			dots: true,
			nav: false
		});
	},
};

(function() {
	common.init();
}());

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
		
		// var bLazy = new Blazy({});

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



	},
	owl: function(){
		
	},
};

(function() {
	common.init();
}());

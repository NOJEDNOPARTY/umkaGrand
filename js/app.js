var common = {
	init: function() {
		common.main();
		common.owl();
		common.submit();
	},
	main: function(){

		jQuery(function($){
			$(document).mouseup(function (e){ 
				var div = $(".menu-wrap");
				if (!div.is(e.target) // если клик был не по нашему блоку
					&& div.has(e.target).length === 0) { // и не по его дочерним элементам
					$('header').removeClass('open');
					$('body').removeClass('hidden2');
				}
				var popup = $(".popup");
				if (!popup.is(e.target) 
					&& popup.has(e.target).length === 0) { 
					$('.popup-wrapper').removeClass('active');
					$('body').removeClass('hidden');
				}
			});
		});

		$('.menu-trigger').click(function(event){
			event.preventDefault();
			$('header').addClass('open');
			$('body').addClass('hidden2');
			var bLazy = new Blazy({});
		})
		$('.menu-close-trigger').click(function(event){
			event.preventDefault();
			$('header').removeClass('open');
			$('body').removeClass('hidden2');
		})
		
		var bLazy = new Blazy({});

		
		$('.tel-trigger').mask("+380(99) 999-99-99");

		$('.call-popup').click(function(event){
			event.preventDefault();
			var popup  = '#' + $(this).attr('data-popup');
			$('.popup-wrapper').removeClass('active');
			$('body').addClass('hidden');
			$(popup).addClass('active');
		});
		$('.anchor').click(function(event){
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 2000);
			$('header').removeClass('open');
			$('body').removeClass('hidden2');
		});

		$('.bnf-trigger').click(function(event){
			event.preventDefault();
			$('body').addClass('hidden');
			$('.popup .popup-info-wrapper').find('.popup-info').remove();
			$(this).closest('.bnf-cnt').find('.popup-info').clone().appendTo( '.popup .popup-info-wrapper');
			$('#benefitsPopup').addClass('active');
		});

		$('.popup-close').click(function(event){
			event.preventDefault();
			$('.popup-wrapper').removeClass('active');
			$('body').removeClass('hidden');
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
				
				var bLazy = new Blazy({});
			}else {
				if($(this).find('.more-trigger-cnt').html() == dataOpen){
					$(this).addClass('hidden').find('.more-trigger-cnt').text(dataHidden);
				}
				$(this).closest('.more-cnt-wrap').find('.more-cnt').addClass('hidden');
			}
		});


		var headerH = $('header').outerHeight();

		function fixedHead(headerH) {
			var header = headerH;
			if($(window).scrollTop() > header) {
				$('header').addClass('fixed');
				$('body').css({'margin-top':header})
			}else {
				$('header').removeClass('fixed');
				$('body').css({'margin-top': 0})
			}
		};
		fixedHead(headerH);


		$(window).resize(function() {
			var headerH = $('header').outerHeight();
			fixedHead(headerH);
			var bLazy = new Blazy({});
		});
		$(window).scroll(function() {
			fixedHead(headerH);
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
	submit: function(){
		
		// $('.popup input[type="submit"]').click(function(event){
		// 	event.preventDefault();
		// 	var formItem = $(this).closest('.popup').find('.form-field');
		// 	var error = false;
		// 	$( formItem ).each(function() {
		// 		var item = $(this);
		// 		if(item.val() == '') {
		// 			error = true;
		// 		}else {item.addClass('error-layout');}
		// 	});
		// 	if(error == true) {
		// 		formItem.addClass('error')
		// 		setTimeout(function(){
		// 			formItem.removeClass('error')
		// 		}, 4000)
		// 	}else {
		// 		$('.popup-wrapper').removeClass('active');
		// 		$('#thanksPopup').addClass('active')
		// 		var bLazy = new Blazy({});
		// 	}
		// });


		$("form").submit(function(event){
			event.preventDefault();
			formField = $(this).find(".form-field")
			
			formField.each(function(){
				var thisEl = $(this);
				if (! thisEl.val().length) {
					thisEl.addClass('error')
					setTimeout(function(){
						thisEl.removeClass('error')
					}, 3000)
					thisEl.addClass('form-error')
				}else { thisEl.removeClass('form-error')}
			});	
			if(formField.hasClass('form-error') == false){
				$('.popup-wrapper').removeClass('active');
				$('#thanksPopup').addClass('active')
				var bLazy = new Blazy({});
			}
		});

	}
};

(function() {
	common.init();
}());

"use strict";

window.addEventListener('load', function () {
	(function($, window, document){

		$(document).ready(function(){
			var $collect_carousel = $('#collect-carousel'),
				$collect_text = $('#collect-text'),
				$toggle_carousel = $('[data-action="toggle-section-carousel"]'),
				$responsive_toggle = $('.collect-header-responsive');

			$collect_carousel.carousel({
				interval: false
			});

			$toggle_carousel.click(function () {
				var img_number = parseInt($(this).attr('data-img'));

				$collect_carousel.carousel(img_number);
			});

			$collect_carousel.swiperight(function() {
				$(this).carousel('prev');
			});

			$collect_carousel.swipeleft(function() {
				$(this).carousel('next');
			});

			$collect_carousel.on('slid.bs.carousel', function() {
				var img_number = parseInt($collect_carousel.find('div.active').index()),
					text = $('.collect-header-images-inner:eq(' + img_number + ')').find('span').text();

				$responsive_toggle.find('li').each(function () {
					$(this).removeClass('active');
				});

				$responsive_toggle.find('li:eq(' + img_number + ')').addClass('active');

				$collect_text.text(text + ' (' + (img_number + 1) + '/4)');
			});
		});

	})(jQuery, window, document);
});
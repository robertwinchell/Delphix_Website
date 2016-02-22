"use strict";

window.addEventListener('load', function () {
	(function ($, window, document) {

		$(document).ready(function () {
			$(window).bind('scroll', function() {
				var homepage_item = $('#homepage-demo-animation'),
					homepage_bottom = homepage_item.offset().top + homepage_item.outerHeight(),
					window_bottom = $(window).scrollTop() + $(window).height(),
					opacity = 0,
					dynamic_opacity = (window_bottom - homepage_bottom) / (window_bottom) * 10;

				if (homepage_bottom > window_bottom) {
					opacity = 0;
				}

				if (homepage_bottom < window_bottom) {
					if (dynamic_opacity >= 1) {
						opacity = 1
					} else {
						opacity = dynamic_opacity;
					}
				}

				homepage_item.css('opacity', opacity);
			});
		});

	})(jQuery, window, document);

});



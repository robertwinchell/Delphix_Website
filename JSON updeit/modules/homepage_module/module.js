"use strict";

window.addEventListener('load', function () {
    (function($, window, document) {
        $(document).ready(function() {
            var simplicity = {
                "tab": 1,
                "resources": [{
                    "image": "/images/news_image_1.png",
                    "title": "Random text 1",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis.",
                    "short": "Self-serve 1000% higher quality data",
                    "link": "#",
                    "showOrder": 2
                }, {
                    "image": "/images/news_image_2.png",
                    "title": "Random text 2",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis.",
                    "short": "Designed for DevOps",
                    "link": "#",
                    "showOrder": 1
                }, {
                    "image": "/images/news_image_3.png",
                    "title": "Random text 3",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis.",
                    "short": "On target. On budget. On-demand.",
                    "link": "#",
                    "showOrder": 4
                },{
                    "image": "/images/news_image_4.png",
                    "title": "Random text 4",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis.",
                    "short": "90% better data security",
                    "link": "#",
                    "showOrder": 3
                }]
            };

            var accelerate = {
                 "tab": 2,
                "resources": [{
                    "image": "/images/news_image_1.png",
                    "title": "Random text 1",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis.",
                    "short": "Self-serve 1000% higher quality data",
                    "link": "#",
                    "showOrder": 2
                }, {
                    "image": "/images/news_image_2.png",
                    "title": "Random text 2",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis.",
                    "short": "Designed for DevOps",
                    "link": "#",
                    "showOrder": 1
                }, {
                    "image": "/images/news_image_3.png",
                    "title": "Random text 3",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis.",
                    "short": "On target. On budget. On-demand.",
                    "link": "#",
                    "showOrder": 3
                }, {
                    "image": "/images/news_image_4.png",
                    "title": "Random text 4",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis.",
                    "short": "90% better data security",
                    "link": "#",
                    "showOrder": 4
                }]
            };

            var transform = {
                "tab": 3,
                "resources": [{
                    "image": "/images/news_image_1.png",
                    "title": "Random text 1",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis.",
                    "short": "Self-serve 1000% higher quality data",
                    "link": "#",
                    "showOrder": 2
                }, {
                    "image": "/images/news_image_2.png",
                    "title": "Random text 2",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis.",
                    "short": "Designed for DevOps",
                    "link": "#",
                    "showOrder": 1
                }, {
                    "image": "/images/news_image_3.png",
                    "title": "Random text 3",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis.",
                    "short": "On target. On budget. On-demand.",
                    "link": "#",
                    "showOrder": 3
                }, {
                    "image": "/images/news_image_4.png",
                    "title": "Random text 4",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis.",
                    "short": "90% better data security",
                    "link": "#",
                    "showOrder": 4
                }, {
                    "image": "/images/news_image_5.png",
                    "title": "Random text 5",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis.",
                    "short": "90% better data security",
                    "link": "#",
                    "showOrder": 5
                }]
            };

            var $target = $('#homepage-list'), count;

            function isScrolledIntoView(elem) {
                var $elem = $(elem);
                var $window = $(window);

                var docViewTop = $window.scrollTop();
                var docViewBottom = docViewTop + $window.height();

                var elemTop = $elem.offset().top;
                var elemBottom = elemTop + $elem.height();

                return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
            }

            function isTargetVisible() {
                var $elem = $target;
                var $window = $(window);

                var docViewTop = $window.scrollTop();
                var docViewBottom = docViewTop + $window.height();

                var elemTop = $elem.offset().top;
                var elemBottom = elemTop + $elem.height();
                var elemMiddle = elemTop + ($elem.height() / 3);

                return (elemMiddle <= docViewBottom);
            }

            function refreshScroll() {
                var lastScroll = 0;
                $target.attr('data-visible', 0);

                $(window).scroll(function(e) {
                    var st = $(this).scrollTop();

                    if (st > lastScroll){
                        if (isTargetVisible()) {
                            if ($target.attr('data-visible') == 0) {
                                $('.list-item').each(function(i, el) {
                                    var showItem = $(el).attr('data-show');

                                    setTimeout(function () {
                                        $(el).addClass('show-scroll-in');
                                    }, (showItem - 1) * 800);
                                });

                                $target.attr('data-visible', 1);
                            }
                        }
                    }

                    lastScroll = st;
                });
            }


            function loadJSON(data) {
                $target.html('');
                count = 0;
                    if(data.tab == 1){
                        $('#sub-header-text').text('Delphix streamlines the data provisioning process so you can serve growing app team requests in real time. No bottlenecks. No delays. Just self-service access in minutes.');
                    }
                    if(data.tab == 2){
                        $('#sub-header-text').text('Klaatu Barada N... Necktie... Neckturn... Nickel... Its an N word, its definitely an "N" word! Klaatu... Barada... N...');
                    }
                 if(data.tab == 3){
                        $('#sub-header-text').text('I\'m a reasonable guy. But, I\'ve just experienced some very unreasonable things. ');
                    }

                var old = $target.attr('data-items');

                $(data.resources).each(function(i, v) {
                    $target.append("<div class=\"list-item show-scroll\" data-show=\""+ v.showOrder+"\"><div class=\"inner-img\" style=\"background-image: url("+v.image+");\"><span class=\"list-block-text\"><div class=\"list-block-toggler\" data-action=\"block-toggle\"></div><div class=\"list-block-inner\"><span class=\"list-block-title\">"+ v.title+"</span><span class=\"list-block-short\">"+ v.short+"</span><a href=\""+ v.link+"\" class=\"list-block-button\">View</a><span class=\"list-block-main\">"+ v.text+"</span></div></span></div>");
                    count++;
                });

                $target.removeClass('homepage-list-set-' + old);

                $target.addClass('homepage-list-set-' + count);
                $target.attr('data-items', count);

                refreshScroll();
            }



            loadJSON(simplicity);
            refreshScroll();

            $('body').on('click', 'span[data-action="homepage-tab"]:not(.active)', function() {
                var tab = $(this).attr('data-tab');

                $('span[data-action="homepage-tab"]').each(function() {
                    $(this).removeClass('active');
                });

                $(this).addClass('active');

                if (tab == 'simplicity') {
                    loadJSON(simplicity);
                }

                if (tab == 'accelerate') {
                    loadJSON(accelerate);
                }

                if (tab == 'transform') {
                    loadJSON(transform);
                }
            });

            if ($(window).width() < 1280) {
                $('.list-item').each(function(i) {
                    var block = $(this).find('.list-block-text');

                    block.height(block.parent().height() - 50);
                    block.addClass('toggled');
                });
            }

            $('body').on('mouseenter', 'div[data-action="block-toggle"]', function () {
                var block = $(this).parent();

                if (block.hasClass('toggled')) {
                    
                    block.animate({
                        "height": "80px"
                    }, function() {
                        block.removeClass('toggled');
                    });
                } else {
                    block.animate({
                        "height": (block.parent().height() - 50) + "px"
                    }, function() {
                        block.addClass('toggled');
                    });
                }
            });
        });
    })(jQuery, window, document);
});
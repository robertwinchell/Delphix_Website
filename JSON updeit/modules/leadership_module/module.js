"use strict";

window.addEventListener('load', function () {
    (function ($, window, document) {
        var leadership_resources = {
            "categories": [{
                "id": "executive",
                "name": "Executive Team",
                "nameshort": "Executive",
                "active": 1
            }, {
                "id": "technical",
                "name": "Technical leadership",
                "nameshort": "Technical",
                "active": 0
            }, {
                "id": "directors",
                "name": "Board of directors",
                "nameshort": "Board",
                "active": 0
            }],
            "resources": [{
                "category": "executive",
                "title": "Executive Team",
                "active": 1,
                "people": [{
                    "row1": [{
                        "image": "/images/board_1.png",
                        "title": "Executive team",
                        "desc": "Delphix bridges the DevOps data gap.",
                        "link": "#"
                    }, {
                        "image": "/images/board_2.png",
                        "title": "Technical leadership",
                        "desc": "Powerful resources to transform your development",
                        "link": "#"
                    }, {
                        "image": "/images/board_3.png",
                        "title": "Board of directors",
                        "desc": "What is DevOps, exactly? 2,831 experts weigh in.",
                        "link": "#"
                    }],
                    "row2": [{
                        "image": "",
                        "title": "",
                        "desc": "",
                        "link": ""
                    }, {
                        "image": "/images/board_2.png",
                        "title": "Technical leadership",
                        "desc": "Powerful resources to transform your development",
                        "link": "#"
                    }, {
                        "image": "",
                        "title": "",
                        "desc": "",
                        "link": ""
                    }]
                }]
            }, {
                "category": "technical",
                "title": "Technical leadership",
                "active": 0,
                "people": [{
                    "row1": [{
                        "image": "/images/board_1.png",
                        "title": "Executive team",
                        "desc": "Delphix bridges the DevOps data gap.",
                        "link": "#"
                    }, {
                        "image": "/images/board_2.png",
                        "title": "Technical leadership",
                        "desc": "Powerful resources to transform your development",
                        "link": "#"
                    }, {
                        "image": "/images/board_3.png",
                        "title": "Board of directors",
                        "desc": "What is DevOps, exactly? 2,831 experts weigh in.",
                        "link": "#"
                    }],
                    "row2": [{
                        "image": "/images/board_1.png",
                        "title": "Executive team",
                        "desc": "Delphix bridges the DevOps data gap.",
                        "link": "#"
                    }, {
                        "image": "/images/board_2.png",
                        "title": "Technical leadership",
                        "desc": "Powerful resources to transform your development",
                        "link": "#"
                    }, {
                        "image": "/images/board_3.png",
                        "title": "Board of directors",
                        "desc": "What is DevOps, exactly? 2,831 experts weigh in.",
                        "link": "#"
                    }]
                }]
            }, {
                "category": "directors",
                "title": "Board of directors",
                "active": 0,
                "people": [{
                    "row1": [{
                        "image": "/images/board_1.png",
                        "title": "Executive team",
                        "desc": "Delphix bridges the DevOps data gap.",
                        "link": "#"
                    }, {
                        "image": "/images/board_2.png",
                        "title": "Technical leadership",
                        "desc": "Powerful resources to transform your development",
                        "link": "#"
                    }, {
                        "image": "/images/board_3.png",
                        "title": "Board of directors",
                        "desc": "What is DevOps, exactly? 2,831 experts weigh in.",
                        "link": "#"
                    }],
                    "row2": [{
                        "image": "/images/board_1.png",
                        "title": "Executive team",
                        "desc": "Delphix bridges the DevOps data gap.",
                        "link": "#"
                    }, {
                        "image": "/images/board_2.png",
                        "title": "Technical leadership",
                        "desc": "Powerful resources to transform your development",
                        "link": "#"
                    }, {
                        "image": "/images/board_3.png",
                        "title": "Board of directors",
                        "desc": "What is DevOps, exactly? 2,831 experts weigh in.",
                        "link": "#"
                    }]
                }]
            }]
        };

        $(window).ready(function () {
            var $body = $('body'),
                clickable_tabs = 'span[data-action="leadership-tab"]:not(.active)',
                all_tabs = 'span[data-action="leadership-tab"]',
                $module = $('.leadership-module'),
                $tabs = $('.leadership-tabs');

            function init() {
                loadBoards();
                loadTabs();
            }

            function loadBoards() {
                $(leadership_resources.resources).each(function(i, v) {
                    $module.append(generateBoardHtml(v));
                });
            }

            function generateBoardHtml(data) {
                var active_text, active_style;
                (data.active == 1) ? active_text = ' active' : active_text = '';
                (data.active == 1) ? active_style = '' : active_style = ' style="display: none;"';

                return  "<div class=\"board"+active_text+"\" id=\""+data.category+"\" "+active_style+">" +
                         "<span class=\"board-title h5-alt\">"+data.title+"</span>" +
                        "<div class=\"container\">" +
                        generateRowsHtml(data) +
                        "</div>" +
                        "</div>";
            }

            function generateRowsHtml(data) {
                var return_text;

                $(data.people).each(function (i, v) {
                    return_text = "<div class=\"row\">";

                    $(v.row1).each(function(i, v) {
                        return_text +=  generateCardsHtml(v);
                    });

                    return_text += "</div>";

                    return_text += "<div class=\"row\">";

                    $(v.row2).each(function(i, v) {
                        return_text +=  generateCardsHtml(v);
                    });

                    return_text += "</div>";
                });

                return return_text;
            }

            function generateCardsHtml(data) {
                if (!data.title.trim()) {
                    return  "<div class=\"card col-md-4\">" +
                            "</div>";
                } else {
                    return  "<div class=\"card col-md-4\">" +
                            "<div class=\"card-img\">" +
                            "<img src=\"" + data.image + "\" alt=\"" + data.title + "\">" +
                            "</div>" +
                            "<span class=\"card-title\">" + data.title + "</span>" +
                            "<span class=\"card-desc\">" + data.desc + "</span>" +
                            "<a href=\"" + data.link + "\" class=\"card-link\">Get the guide</a>" +
                            "</div>";
                }
            }

            function loadTabs() {
                $(leadership_resources.categories).each(function (i, v) {
                    $tabs.append(generateTabHtml(v));
                });
            }

            function generateTabHtml(data) {
                var active_class;

                (data.active == 1) ? active_class = ' class="active"' : active_class = '';

                return "<span data-action=\"leadership-tab\" class=\"leadership-tab-width tab-display-long\" data-tab=\""+data.id+"\" "+active_class+">"+data.name+"</span> <span data-action=\"leadership-tab\" class=\"leadership-tab-width tab-display-short\" data-tab=\""+data.id+"\" "+active_class+">"+data.nameshort+"</span>";
            }

            function change_to_id(id) {
                var $active = $('.board.active');
                $active.fadeOut(400, function() {
                    var $target = $('#' + id);

                    $target.addClass('active');
                    $target.fadeIn(400);
                });

                $active.removeClass('active');
            }

            init();

            $body.on('click', clickable_tabs, function() {
                var tab = $(this).attr('data-tab');

                $(all_tabs).each(function() {
                    $(this).removeClass('active');
                });

                $(this).addClass('active');

                change_to_id(tab);
            });
        });

    })(jQuery, window, document);
});
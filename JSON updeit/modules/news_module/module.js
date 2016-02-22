"use strict";

window.addEventListener('load', function () {
    (function($, window, document) {
        $(document).ready(function() {
            $.get('/api/news.php', function(d) {
                var resource_listing_news = d;

                var div = $("<div class=\"container\">").appendTo("#list_news");

                var lastShowID = 7;
                var allShowID = 0;

                $(resource_listing_news.news).each(function(index, item) {
                    var col_class, col_image, col_image_size;
                    if (index == 0) {
                        col_class = "col-md-12";
                        col_image_size = "width=\"598\" height=\"410\"";
                    } else {
                        col_class = "col-md-6";
                        col_image_size = "width=\"256\" height=\"306\"";
                    }

                    if ((index + 1) <= 7) {
                        if (item.image == '') {
                            div.append("<a href=\"" + item.path + "\">" +
                                "<div data-tile-id=\"" + item.id + "\" class=\"tiles " + col_class + "\">" +
                                "<div class=\"inner-tiles\">" +
                                "<div class=\"tile-no-image\">" +
                                "<span class=\"tile-category\">" + item.category + "</span>" +
                                "<span class=\"tile-date\">" + item.date + "</span>" +
                                "<span class=\"tile-title\">" + item.title + "</span>" +
                                "<p class=\"tile-description\">" + item.description + "</p>" +
                                "<span class=\"tile-link\">See the data <span class=\"glyphicon glyphicon-circle-arrow-right\" aria-hidden=\"true\"></span></span>" +
                                "</div>" +
                                "</div>" +
                                "</div>" +
                                "</a>");
                        } else {
                            div.append("<a href=\"" + item.path + "\">" +
                                "<div data-tile-id=\"" + item.id + "\" class=\"tiles " + col_class + "\">" +
                                "<div class=\"inner-tiles\">" +
                                "<div class=\"tile-left\">" +
                                "<img " + col_image_size + " src=\"" + item.image + "\">" +
                                "</div>" +
                                "<div class=\"tile-right\">" +
                                "<span class=\"tile-category\">" + item.category + "</span>" +
                                "<span class=\"tile-date\">" + item.date + "</span>" +
                                "<span class=\"tile-title\">" + item.title + "</span>" +
                                "<p class=\"tile-description\">" + item.description + "</p>" +
                                "<span class=\"tile-link\">See the data <span class=\"glyphicon glyphicon-circle-arrow-right\" aria-hidden=\"true\"></span></span>" +
                                "</div>" +
                                "</div>" +
                                "</div>" +
                                "</a>");
                        }

                        /*if ((index + 1) == 5) {
                            div.append("<div class=\"int-tile-social col-md-12\">" +
                                "<div class=\"col-md-4\"><span class=\"int-social-title\">Facebook</span><span class=\"int-social-description\">Data Masking for Better Security and stuff</span><span class=\"int-social-name\">@alejandro.cruz</span><i class=\"fa fa-facebook\"></i></div>" +
                                "<div class=\"col-md-4\"><span class=\"int-social-title\">Twitter</span><span class=\"int-social-description\">#hammertime for Better Security in is</span><span class=\"int-social-name\">@alejandro.cruz</span><i class=\"fa fa-twitter\"></i></div>" +
                                "<div class=\"col-md-4\"><span class=\"int-social-title\">LinkedIn</span><span class=\"int-social-description\">\"Data Masking for a Better Security\"</span><span class=\"int-social-name\">@alejandro.cruz</span><i class=\"fa fa-linkedin\"></i></div>" +
                                "</div>");
                        }*/
                    } else {
                        if (item.image == '') {
                            div.append("<a href=\"" + item.path + "\">" +
                                "<div style=\"display: none;\" data-tile-id=\"" + item.id + "\" class=\"tiles " + col_class + "\">" +
                                "<div class=\"inner-tiles\">" +
                                "<div class=\"tile-no-image\">" +
                                "<span class=\"tile-category\">" + item.category + "</span>" +
                                "<span class=\"tile-date\">" + item.date + "</span>" +
                                "<span class=\"tile-title\">" + item.title + "</span>" +
                                "<p class=\"tile-description\">" + item.description + "</p>" +
                                "<span class=\"tile-link\">See the data <span class=\"glyphicon glyphicon-circle-arrow-right\" aria-hidden=\"true\"></span></span>" +
                                "</div>" +
                                "</div>" +
                                "</div>" +
                                "</a>");
                        } else {
                            div.append("<a href=\"" + item.path + "\">" +
                                "<div style=\"display: none;\" data-tile-id=\"" + item.id + "\" class=\"tiles " + col_class + "\">" +
                                "<div class=\"inner-tiles\">" +
                                "<div class=\"tile-left\">" +
                                "<img " + col_image_size + " src=\"" + item.image + "\">" +
                                "</div>" +
                                "<div class=\"tile-right\">" +
                                "<span class=\"tile-category\">" + item.category + "</span>" +
                                "<span class=\"tile-date\">" + item.date + "</span>" +
                                "<span class=\"tile-title\">" + item.title + "</span>" +
                                "<p class=\"tile-description\">" + item.description + "</p>" +
                                "<span class=\"tile-link\">See the data <span class=\"glyphicon glyphicon-circle-arrow-right\" aria-hidden=\"true\"></span></span>" +
                                "</div>" +
                                "</div>" +
                                "</div>" +
                                "</a>");
                        }
                    }

                    allShowID++;
                });

                var $targetCategory = $('#targetCategory_news');
                $targetCategory.append("<span class=\"filter-item-dp-item\" data-target=\"category_news\">All</span>");
                $(resource_listing_news.categories).each(function(index, item) {
                    $targetCategory.append("<span class=\"filter-item-dp-item\" data-target=\"category_news\">" + item + "</span>");
                });

                var $targetDate = $('#targetDate_news'),
                    $dateItem = $('#date-item-news'),
                    $list = $('#list_news'),
                    $date = $('#date_news'),
                    $handlerDate = $('#handlerDate_news');
                $targetDate.datepicker({
                    changeMonth: true,
                    changeYear: true,
                    //dateFormat: 'MM yy',
                    onClose: function(date) {

                    },
                    onChangeMonthYear: function(year, month) {

                        var monthA = new Array();
                        monthA[0] = "January";
                        monthA[1] = "February";
                        monthA[2] = "March";
                        monthA[3] = "April";
                        monthA[4] = "May";
                        monthA[5] = "June";
                        monthA[6] = "July";
                        monthA[7] = "August";
                        monthA[8] = "September";
                        monthA[9] = "October";
                        monthA[10] = "November";
                        monthA[11] = "December";

                        $date.text('Date:  ' + monthA[month - 1] + ', ' + year);
                        $targetDate.fadeOut('fast');

                        filter_items();
                    }
                });

                $targetDate.hide();

                $handlerDate.click(function() {
                    if ($targetDate.is(':visible')) {
                        $targetDate.css('display', 'none');
                        $date.parent().parent().removeClass('filter-item-drop');
                    } else {
                        $targetDate.css('display', 'block');
                        $date.parent().parent().addClass('filter-item-drop');
                    }
                });

                $('span[data-action="load-more"]').click(function() {
                    var beforeLastShowID = lastShowID;
                    lastShowID = lastShowID + 7;

                    var div = $('#list_news > div.container');
                    $(resource_listing_news.news).each(function(index, item) {
                        if (((index + 1) <= lastShowID) && ((index + 1) > beforeLastShowID)) {
                            $('.tiles[data-tile-id="' + item.id + '"]').slideDown("normal");
                        }
                    });

                    if (lastShowID >= allShowID) {
                        $('#loadMore_news').css('display', 'none');
                    }
                });

                $('body').on('click', '#category-div-news', function() {
                    if ($(this).find('.filter-item-dp').hasClass('dp-show')) {
                        $(this).find('.filter-item-dp').removeClass('dp-show')
                        $('#category-div-news').removeClass('filter-item-drop')
                    } else {
                        $(this).find('.filter-item-dp').addClass('dp-show')
                        $('#category-div-news').addClass('filter-item-drop')
                    }
                });

                //Close the dropdowns
                $('body').click(function(e) {
                    var container = $('.filter-item');
                    var dateContainer = $('#targetDate_news');

                    if (!container.is(e.target) && container.has(e.target).length === 0) {
                        $(this).find('.filter-item-dp').each(function(i) {
                            if ($(this).hasClass('dp-show')) {
                                $(this).removeClass('dp-show');
                                $('#category-div-news').removeClass('filter-item-drop')
                            }
                        });

                        $(this).find('#targetDate_news').each(function() {
                            $(this).css('display', 'none');
                            $('#date-item-news').removeClass('filter-item-drop')
                        });
                    }
                });

                $('body').on('click', '.filter-item-dp-item', function() {
                    var target = $(this).attr('data-target');

                    if ($(this).text() == 'All') {
                        $('#' + target).text('Category');
                    } else {
                        $('#' + target).text($(this).text());
                    }

                    filter_items();
                });

                $('#keyword_news').on('input', function() {
                    filter_items();
                });

                $('#filterSubmit').click(function() {
                    filter_items();
                });

                function filter_items() {
                    var category = $('#category_news').text();
                    var date = $('#date_news').text();
                    var keyword = $('#keyword_news').val();
                    var div = $('#list_news > div.container');
                    var extraurl = '?';

                    var categoryCustom = false,
                        dateCustom = false,
                        keywordCustom = false;
                    if (category != "Category") {
                        categoryCustom = true;

                        extraurl += 'category=' + encodeURIComponent(category) + '&';
                    }

                    if (date != "Date") {
                        dateCustom = true;

                        var monthA = new Array();
                        monthA["January"] = 1;
                        monthA["February"] = 2;
                        monthA["March"] = 3;
                        monthA["April"] = 4;
                        monthA["May"] = 5;
                        monthA["June"] = 6;
                        monthA["July"] = 7;
                        monthA["August"] = 8;
                        monthA["September"] = 9;
                        monthA["October"] = 10;
                        monthA["November"] = 11;
                        monthA["December"] = 12;

                        date = date.split('Date: ')[1];

                        date = date.substring(0, date.indexOf(','));

                        date = date.replace(/^\s+|\s+$/g, "");

                        extraurl += 'date=' + encodeURIComponent(monthA[date]) + '&';
                    }

                    if (keyword != "") {
                        keywordCustom = true;

                        extraurl += 'keyword=' + encodeURIComponent(keyword) + '&';
                    }

                    if (categoryCustom || dateCustom || keywordCustom) {
                        $('#loadMore_news').css('display', 'none');
                         $('#date-item-news').removeClass('filter-item-drop')
                        //$('.int-tile-social').slideUp("normal");

                        div.find('div').slideUp("normal");

                        setTimeout(function() {
                            div.html('');

                            $.get('/api/news.php' + extraurl, function(f) {
                                var filter_resources = f;

                                $(filter_resources.news).each(function(index, item) {
                                    var col_class, col_image, col_image_size;
                                    col_class = "col-md-6";
                                    col_image_size = "width=\"256\" height=\"306\"";

                                    if (item.image == '') {
                                        div.append("<a href=\"" + item.path + "\">" +
                                            "<div tile-wait=\"create\" style=\"display: none;\" data-tile-id=\"" + item.id + "\" class=\"tiles " + col_class + "\">" +
                                            "<div class=\"inner-tiles\">" +
                                            "<div class=\"tile-no-image\">" +
                                            "<span class=\"tile-category\">" + item.category + "</span>" +
                                            "<span class=\"tile-date\">" + item.date + "</span>" +
                                            "<span class=\"tile-title\">" + item.title + "</span>" +
                                            "<p class=\"tile-description\">" + item.description + "</p>" +
                                            "<span class=\"tile-link\">See the data <span class=\"glyphicon glyphicon-circle-arrow-right\" aria-hidden=\"true\"></span></span>" +
                                            "</div>" +
                                            "</div>" +
                                            "</div>" +
                                            "</a>");
                                    } else {
                                        div.append("<a href=\"" + item.path + "\">" +
                                            "<div tile-wait=\"create\" style=\"display: none;\" data-tile-id=\"" + item.id + "\" class=\"tiles " + col_class + "\">" +
                                            "<div class=\"inner-tiles\">" +
                                            "<div class=\"tile-left\">" +
                                            "<img " + col_image_size + " src=\"" + item.image + "\">" +
                                            "</div>" +
                                            "<div class=\"tile-right\">" +
                                            "<span class=\"tile-category\">" + item.category + "</span>" +
                                            "<span class=\"tile-date\">" + item.date + "</span>" +
                                            "<span class=\"tile-title\">" + item.title + "</span>" +
                                            "<p class=\"tile-description\">" + item.description + "</p>" +
                                            "<span class=\"tile-link\">See the data <span class=\"glyphicon glyphicon-circle-arrow-right\" aria-hidden=\"true\"></span></span>" +
                                            "</div>" +
                                            "</div>" +
                                            "</div>" +
                                            "</a>");
                                    }
                                });

                                div.find('div').slideDown("normal");

                                if ($('.tiles').length == 0) {
                                    div.html("<span class=\"not_found\">No resource found matching that criteria</span>");
                                }
                            });
                        }, 400);
                    } else {
                        $('span[data-action="load-more"]').css('display', 'inline-block');
                        //$('.int-tile-social').slideDown("normal");

                        lastShowID = 7;
                        allShowID = 0;

                        div.find('div').slideUp("normal");

                        setTimeout(function() {
                            div.html('');

                            $(resource_listing_news.news).each(function(index, item) {
                                var col_class, col_image, col_image_size;
                                if (index == 0) {
                                    col_class = "col-md-12";
                                    col_image_size = "width=\"598\" height=\"410\"";
                                } else {
                                    col_class = "col-md-6";
                                    col_image_size = "width=\"256\" height=\"306\"";
                                }

                                if ((index + 1) <= 7) {
                                    if (item.image == '') {
                                        div.append("<a href=\"" + item.path + "\">" +
                                            "<div tile-wait=\"create\" style=\"display: none;\" data-tile-id=\"" + item.id + "\" class=\"tiles " + col_class + "\">" +
                                            "<div class=\"inner-tiles\">" +
                                            "<div class=\"tile-no-image\">" +
                                            "<span class=\"tile-category\">" + item.category + "</span>" +
                                            "<span class=\"tile-date\">" + item.date + "</span>" +
                                            "<span class=\"tile-title\">" + item.title + "</span>" +
                                            "<p class=\"tile-description\">" + item.description + "</p>" +
                                            "<span class=\"tile-link\">See the data <span class=\"glyphicon glyphicon-circle-arrow-right\" aria-hidden=\"true\"></span></span>" +
                                            "</div>" +
                                            "</div>" +
                                            "</div>" +
                                            "</a>");
                                    } else {
                                        div.append("<a href=\"" + item.path + "\">" +
                                            "<div tile-wait=\"create\" style=\"display: none;\" data-tile-id=\"" + item.id + "\" class=\"tiles " + col_class + "\">" +
                                            "<div class=\"inner-tiles\">" +
                                            "<div class=\"tile-left\">" +
                                            "<img " + col_image_size + " src=\"" + item.image + "\">" +
                                            "</div>" +
                                            "<div class=\"tile-right\">" +
                                            "<span class=\"tile-category\">" + item.category + "</span>" +
                                            "<span class=\"tile-date\">" + item.date + "</span>" +
                                            "<span class=\"tile-title\">" + item.title + "</span>" +
                                            "<p class=\"tile-description\">" + item.description + "</p>" +
                                            "<span class=\"tile-link\">See the data <span class=\"glyphicon glyphicon-circle-arrow-right\" aria-hidden=\"true\"></span></span>" +
                                            "</div>" +
                                            "</div>" +
                                            "</div>" +
                                            "</a>");
                                    }

                                    /*if ((index + 1) == 5) {
                                        div.append("<div tile-wait=\"create\" style=\"display: none;\" class=\"int-tile-social col-md-12\">" +
                                            "<div class=\"col-md-4\"><span class=\"int-social-title\">Facebook</span><span class=\"int-social-description\">Data Masking for Better Security and stuff</span><span class=\"int-social-name\">@alejandro.cruz</span><i class=\"fa fa-facebook\"></i></div>" +
                                            "<div class=\"col-md-4\"><span class=\"int-social-title\">Twitter</span><span class=\"int-social-description\">#hammertime for Better Security in is</span><span class=\"int-social-name\">@alejandro.cruz</span><i class=\"fa fa-twitter\"></i></div>" +
                                            "<div class=\"col-md-4\"><span class=\"int-social-title\">LinkedIn</span><span class=\"int-social-description\">\"Data Masking for a Better Security\"</span><span class=\"int-social-name\">@alejandro.cruz</span><i class=\"fa fa-linkedin\"></i></div>" +
                                            "</div>");
                                    }*/
                                } else {
                                    if (item.image == '') {
                                        div.append("<a href=\"" + item.path + "\">" +
                                            "<div style=\"display: none;\" style=\"display: none;\" data-tile-id=\"" + item.id + "\" class=\"tiles " + col_class + "\">" +
                                            "<div class=\"inner-tiles\">" +
                                            "<div class=\"tile-no-image\">" +
                                            "<span class=\"tile-category\">" + item.category + "</span>" +
                                            "<span class=\"tile-date\">" + item.date + "</span>" +
                                            "<span class=\"tile-title\">" + item.title + "</span>" +
                                            "<p class=\"tile-description\">" + item.description + "</p>" +
                                            "<span class=\"tile-link\">See the data <span class=\"glyphicon glyphicon-circle-arrow-right\" aria-hidden=\"true\"></span></span>" +
                                            "</div>" +
                                            "</div>" +
                                            "</div>" +
                                            "</a>");
                                    } else {
                                        div.append("<a href=\"" + item.path + "\">" +
                                            "<div style=\"display: none;\" style=\"display: none;\" data-tile-id=\"" + item.id + "\" class=\"tiles " + col_class + "\">" +
                                            "<div class=\"inner-tiles\">" +
                                            "<div class=\"tile-left\">" +
                                            "<img " + col_image_size + " src=\"" + item.image + "\">" +
                                            "</div>" +
                                            "<div class=\"tile-right\">" +
                                            "<span class=\"tile-category\">" + item.category + "</span>" +
                                            "<span class=\"tile-date\">" + item.date + "</span>" +
                                            "<span class=\"tile-title\">" + item.title + "</span>" +
                                            "<p class=\"tile-description\">" + item.description + "</p>" +
                                            "<span class=\"tile-link\">See the data <span class=\"glyphicon glyphicon-circle-arrow-right\" aria-hidden=\"true\"></span></span>" +
                                            "</div>" +
                                            "</div>" +
                                            "</div>" +
                                            "</a>");
                                    }
                                }

                                allShowID++;
                            });

                            div.find('div[tile-wait="create"]').slideDown("normal");
                        }, 400);
                    }
                }
            });
        });
    })(jQuery, window, document);
});

"use strict";

window.addEventListener('load', function () {
    (function($, window, document) {

        var resource_listing_resources = {
            "categories": ["Application Development", "DevOps", "Test Data Management", "Data Masking", "Backup", "ERP Upgrades", "Cloud Migration"],
            "types": ["turpis", "dolor", "finibus"],
            "resources": [{
                "id": 1,
                "title": "Data as a Service: Accelerating Application Projects",
                "source": "Vivamus",
                "description": "In the 2015 Magic Quadrant for Structured Data Archiving and Application Retirement",
                "categories": ["DevOps", "Test Data Management"],
                "type": "turpis",
                "image": "\/images\/resource_teaser_1.jpg",
                "link": "#"
            }, {
                "id": 2,
                "title": "Quisque eget",
                "source": "Mauris",
                "description": "Aliquam scelerisque semper ipsum",
                "categories": ["ERP Upgrades", "Cloud Migration"],
                "type": "dolor",
                "image": "\/images\/resource_teaser_2.jpg",
                "link": "#"
            }, {
                "id": 3,
                "title": "Next-Generation Test Data Management",
                "source": "Duis",
                "description": "Quantifying DevOps benefits to drive successes",
                "categories": ["Backup", "ERP Upgrades"],
                "type": "finibus",
                "image": "\/images\/resource_teaser_3.jpg",
                "link": "#"
            }, {
                "id": 4,
                "title": "Quisque tincidunt",
                "source": "Cras",
                "description": "Proin a varius elit vestibulum nec fringilla est.",
                "categories": ["Application Development", "DevOps"],
                "type": "turpis",
                "image": "\/images\/resource_teaser_4.jpg",
                "link": "#"
            }, {
                "id": 5,
                "title": "DevOps Data Threats",
                "source": "Vivamus",
                "description": "Does faster development imperil data security?",
                "categories": ["DevOps", "Test Data Management"],
                "type": "turpis",
                "image": "\/images\/resource_teaser_1.jpg",
                "link": "#"
            }, {
                "id": 6,
                "title": "Quisque eget",
                "source": "Mauris",
                "description": "Aliquam scelerisque semper ipsum",
                "categories": ["ERP Upgrades", "Cloud Migration"],
                "type": "dolor",
                "image": "\/images\/resource_teaser_2.jpg",
                "link": "#"
            }, {
                "id": 7,
                "title": "SAP Consolidation: Merge with Caution",
                "source": "Duis",
                "description": "Data is the Difference Between Success And Failure",
                "categories": ["Backup", "ERP Upgrades"],
                "type": "finibus",
                "image": "\/images\/resource_teaser_3.jpg",
                "link": "#"
            }, {
                "id": 8,
                "title": "Quisque tincidunt",
                "source": "Cras",
                "description": "Proin a varius elit vestibulum nec fringilla est.",
                "categories": ["Application Development", "DevOps"],
                "type": "turpis",
                "image": "\/images\/resource_teaser_4.jpg",
                "link": "#"
            }, {
                "id": 9,
                "title": "Next-Generation Masking For Business Security",
                "source": "Vivamus",
                "description": "Protect Sensitive Information with Data Masking at Speed and Scale ",
                "categories": ["DevOps", "Test Data Management"],
                "type": "turpis",
                "image": "\/images\/resource_teaser_1.jpg",
                "link": "#"
            }, {
                "id": 10,
                "title": "Quisque eget",
                "source": "Mauris",
                "description": "Aliquam scelerisque semper ipsum",
                "categories": ["ERP Upgrades", "Cloud Migration"],
                "type": "dolor",
                "image": "\/images\/resource_teaser_2.jpg",
                "link": "#"
            }, {
                "id": 11,
                "title": "Donec nec nibh",
                "source": "Duis",
                "description": "Nullam vitae magna mollis, cursus tellus quis, aliquam diam",
                "categories": ["Backup", "ERP Upgrades"],
                "type": "finibus",
                "image": "\/images\/resource_teaser_3.jpg",
                "link": "#"
            }, {
                "id": 12,
                "title": "Quisque tincidunt",
                "source": "Cras",
                "description": "Proin a varius elit vestibulum nec fringilla est.",
                "categories": ["Application Development", "DevOps"],
                "type": "turpis",
                "image": "\/images\/resource_teaser_4.jpg",
                "link": "#"
            }, {
                "id": 13,
                "title": "Mauris egestas",
                "source": "Vivamus",
                "description": "Pellentesque nec ex eu arcu tempor lobortis",
                "categories": ["DevOps", "Test Data Management"],
                "type": "turpis",
                "image": "\/images\/resource_teaser_1.jpg",
                "link": "#"
            }, {
                "id": 14,
                "title": "Quisque eget",
                "source": "Mauris",
                "description": "Aliquam scelerisque semper ipsum",
                "categories": ["ERP Upgrades", "Cloud Migration"],
                "type": "dolor",
                "image": "\/images\/resource_teaser_2.jpg",
                "link": "#"
            }, {
                "id": 15,
                "title": "Donec nec nibh",
                "source": "Duis",
                "description": "Nullam vitae magna mollis, cursus tellus quis, aliquam diam",
                "categories": ["Backup", "ERP Upgrades"],
                "type": "finibus",
                "image": "\/images\/resource_teaser_3.jpg",
                "link": "#"
            }, {
                "id": 16,
                "title": "Quisque tincidunt",
                "source": "Cras",
                "description": "Proin a varius elit vestibulum nec fringilla est.",
                "categories": ["Application Development", "DevOps"],
                "type": "turpis",
                "image": "\/images\/resource_teaser_4.jpg",
                "link": "#"
            }, {
                "id": 17,
                "title": "Mauris egestas",
                "source": "Vivamus",
                "description": "Pellentesque nec ex eu arcu tempor lobortis",
                "categories": ["DevOps", "Test Data Management"],
                "type": "turpis",
                "image": "\/images\/resource_teaser_1.jpg",
                "link": "#"
            }, {
                "id": 18,
                "title": "Quisque eget",
                "source": "Mauris",
                "description": "Aliquam scelerisque semper ipsum",
                "categories": ["ERP Upgrades", "Cloud Migration"],
                "type": "dolor",
                "image": "\/images\/resource_teaser_2.jpg",
                "link": "#"
            }, {
                "id": 19,
                "title": "Donec nec nibh",
                "source": "Duis",
                "description": "Nullam vitae magna mollis, cursus tellus quis, aliquam diam",
                "categories": ["Backup", "ERP Upgrades"],
                "type": "finibus",
                "image": "\/images\/resource_teaser_3.jpg",
                "link": "#"
            }, {
                "id": 20,
                "title": "Quisque tincidunt",
                "source": "Cras",
                "description": "Proin a varius elit vestibulum nec fringilla est.",
                "categories": ["Application Development", "DevOps"],
                "type": "turpis",
                "image": "\/images\/resource_teaser_4.jpg",
                "link": "#"
            }, {
                "id": 21,
                "title": "Mauris egestas",
                "source": "Vivamus",
                "description": "Pellentesque nec ex eu arcu tempor lobortis",
                "categories": ["DevOps", "Test Data Management"],
                "type": "turpis",
                "image": "\/images\/resource_teaser_1.jpg",
                "link": "#"
            }, {
                "id": 22,
                "title": "Quisque eget",
                "source": "Mauris",
                "description": "Aliquam scelerisque semper ipsum",
                "categories": ["ERP Upgrades", "Cloud Migration"],
                "type": "dolor",
                "image": "\/images\/resource_teaser_2.jpg",
                "link": "#"
            }, {
                "id": 23,
                "title": "Donec nec nibh",
                "source": "Duis",
                "description": "Nullam vitae magna mollis, cursus tellus quis, aliquam diam",
                "categories": ["Backup", "ERP Upgrades"],
                "type": "finibus",
                "image": "\/images\/resource_teaser_3.jpg",
                "link": "#"
            }, {
                "id": 24,
                "title": "Quisque tincidunt",
                "source": "Cras",
                "description": "Proin a varius elit vestibulum nec fringilla est.",
                "categories": ["Application Development", "DevOps"],
                "type": "turpis",
                "image": "\/images\/resource_teaser_4.jpg",
                "link": "#"
            }, {
                "id": 25,
                "title": "Mauris egestas",
                "source": "Vivamus",
                "description": "Pellentesque nec ex eu arcu tempor lobortis",
                "categories": ["DevOps", "Test Data Management"],
                "type": "turpis",
                "image": "\/images\/resource_teaser_1.jpg",
                "link": "#"
            }, {
                "id": 26,
                "title": "Quisque eget",
                "source": "Mauris",
                "description": "Aliquam scelerisque semper ipsum",
                "categories": ["ERP Upgrades", "Cloud Migration"],
                "type": "dolor",
                "image": "\/images\/resource_teaser_2.jpg",
                "link": "#"
            }, {
                "id": 27,
                "title": "Donec nec nibh",
                "source": "Duis",
                "description": "Nullam vitae magna mollis, cursus tellus quis, aliquam diam",
                "categories": ["Backup", "ERP Upgrades"],
                "type": "finibus",
                "image": "\/images\/resource_teaser_3.jpg",
                "link": "#"
            }, {
                "id": 28,
                "title": "Quisque tincidunt",
                "source": "Cras",
                "description": "Proin a varius elit vestibulum nec fringilla est.",
                "categories": ["Application Development", "DevOps"],
                "type": "turpis",
                "image": "\/images\/resource_teaser_4.jpg",
                "link": "#"
            }, {
                "id": 29,
                "title": "Mauris egestas",
                "source": "Vivamus",
                "description": "Pellentesque nec ex eu arcu tempor lobortis",
                "categories": ["DevOps", "Test Data Management"],
                "type": "turpis",
                "image": "\/images\/resource_teaser_1.jpg",
                "link": "#"
            }, {
                "id": 30,
                "title": "Quisque eget",
                "source": "Mauris",
                "description": "Aliquam scelerisque semper ipsum",
                "categories": ["ERP Upgrades", "Cloud Migration"],
                "type": "dolor",
                "image": "\/images\/resource_teaser_2.jpg",
                "link": "#"
            }, {
                "id": 31,
                "title": "Donec nec nibh",
                "source": "Duis",
                "description": "Nullam vitae magna mollis, cursus tellus quis, aliquam diam",
                "categories": ["Backup", "ERP Upgrades"],
                "type": "finibus",
                "image": "\/images\/resource_teaser_3.jpg",
                "link": "#"
            }, {
                "id": 32,
                "title": "Quisque tincidunt",
                "source": "Cras",
                "description": "Proin a varius elit vestibulum nec fringilla est.",
                "categories": ["Application Development", "DevOps"],
                "type": "turpis",
                "image": "\/images\/resource_teaser_4.jpg",
                "link": "#"
            }]
        }

        $(document).ready(function() {
            var div = $("<div class=\"container\">").appendTo("#list_resources");

            var lastShowID = 12;

            var allShowID = 0;

            $(resource_listing_resources.resources).each(function(index, item) {
                if ((index + 1) <= 12) {
                    div.append("<a href=\"" + item.link + "\">" +
                        "<div data-tile-id=\"" + item.id + "\" class=\"tiles col-md-4\">" +
                        "<div class=\"tile-top\">" +
                        "<img src=\"" + item.image + "\" alt=\"" + item.title + "\">" +
                        "</div>" +
                        "<div class=\"tile-bottom\">" +
                        "<span class=\"tile-source\">" + item.source + "</span>" +
                        "<span class=\"tile-title\">" + item.title + "</span>" +
                        "<p class=\"tile-description\">" + item.description + "</p>" +
                        "<span class=\"tile-link\">Call to Action here <span class=\"glyphicon glyphicon-circle-arrow-right\" aria-hidden=\"true\"></span></span>" +
                        "</div>" +
                        "</div>" +
                        "</a>");
                } else {
                    div.append("<a href=\"" + item.link + "\">" +
                        "<div style=\"display: none;\" data-tile-id=\"" + item.id + "\" class=\"tiles col-md-4\">" +
                        "<div class=\"tile-top\">" +
                        "<img src=\"" + item.image + "\" alt=\"" + item.title + "\">" +
                        "</div>" +
                        "<div class=\"tile-bottom\">" +
                        "<span class=\"tile-source\">" + item.source + "</span>" +
                        "<span class=\"tile-title\">" + item.title + "</span>" +
                        "<p class=\"tile-description\">" + item.description + "</p>" +
                        "<span class=\"tile-link\">Call to Action here <span class=\"glyphicon glyphicon-circle-arrow-right\" aria-hidden=\"true\"></span></span>" +
                        "</div>" +
                        "</div>" +
                        "</a>");
                }

                allShowID++;
            });

            var $targetCategory = $('#targetCategory_resources');
            $targetCategory.append("<span class=\"filter-item-dp-item\" data-target=\"category_resources\">All</span>");
            var $targetType = $('#targetType_resources');
            $targetType.append("<span class=\"filter-item-dp-item\" data-target=\"type_resources\">All</span>");

            $(resource_listing_resources.categories).each(function(index, item) {
                $targetCategory.append("<span class=\"filter-item-dp-item\" data-target=\"category_resources\">" + item + "</span>");
            });

            $(resource_listing_resources.types).each(function(index, item) {
                $targetType.append("<span class=\"filter-item-dp-item\" data-target=\"type_resources\">" + item + "</span>");
            });

            $('span[data-action="load-more"]').click(function() {
                var beforeLastShowID = lastShowID;
                lastShowID = lastShowID + 12;

                var div = $('#list_resources > div.container');
                $(resource_listing_resources.resources).each(function(index, item) {
                    if (((index + 1) <= lastShowID) && ((index + 1) > beforeLastShowID)) {
                        $('.tiles[data-tile-id="' + item.id + '"]').slideDown("normal");
                    }
                });

                if (lastShowID >= allShowID) {
                    $('#loadMore_resources').css('display', 'none');
                }
            });

            $('body').on('click', '#category-div', function() {
                if ($(this).find('.filter-item-dp').hasClass('dp-show')) {
                    $(this).find('.filter-item-dp').removeClass('dp-show')
                    $('#category-div').removeClass('filter-item-drop')

                } else {
                    $(this).find('.filter-item-dp').addClass('dp-show')
                    $('#category-div').addClass('filter-item-drop')
                }
            });

            $('body').on('click', '#type-div', function() {
                if ($(this).find('.filter-item-dp').hasClass('dp-show')) {
                    $(this).find('.filter-item-dp').removeClass('dp-show')
                    $('#type-div').removeClass('filter-item-drop')

                } else {
                    $(this).find('.filter-item-dp').addClass('dp-show')
                    $('#type-div').addClass('filter-item-drop')
                }
            });

            $('body').click(function(e) {
                var container = $('.filter-item');

                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    $(this).find('.filter-item-dp').each(function(i) {
                        if ($(this).hasClass('dp-show')) {
                            $(this).removeClass('dp-show');
                            $('.filter-item').removeClass('filter-item-drop')
                        }
                    });
                }
            });

            $('body').on('click', '.filter-item-dp-item', function() {
                var target = $(this).attr('data-target');

                if ($(this).text() == 'All' && target == 'category_resources') {
                    $('#' + target).text('Category');
                } else {
                    if ($(this).text() == 'All' && target == 'type_resources') {
                        $('#' + target).text('Type');
                    } else {
                        $('#' + target).text($(this).text());
                    }
                }

                filter_items();
            });

            $('#keyword_resources').on('input', function() {
                filter_items();
            });

            $('#filterSubmit').click(function() {
                filter_items();
            });

            function filter_items() {
                var category = $('#category_resources').text();
                var type = $('#type_resources').text();
                var keyword = $('#keyword_resources').val();
                var div = $('#list_resources > div.container');
                var hidden = true;

                if ($('#list_resources .not_found').length) {
                    $('#list_resources .not_found').css('display', 'none');
                }

                $(resource_listing_resources.resources).each(function(index, item) {
                    var categoryCustom = false,
                        typeCustom = false,
                        keywordCustom = false,
                        found = 0;

                    if (category != "Category") {
                        categoryCustom = true;
                        found++;

                        if ($.inArray(category, item.categories) == -1) {
                            div.find('.tiles[data-tile-id="' + item.id + '"]').attr('data-tile-wait', 'delete');
                            found--;
                            return true;
                        }
                    }

                    if (type != "Type") {
                        typeCustom = true;
                        found++;

                        if (type != item.type) {
                            div.find('.tiles[data-tile-id="' + item.id + '"]').attr('data-tile-wait', 'delete');
                            found--;
                            return true;
                        }
                    }

                    if (keyword != "") {
                        keywordCustom = true;
                        found++;

                        if ((item.title.toLowerCase().indexOf(keyword.toLowerCase()) == -1) && (item.description.toLowerCase().indexOf(keyword.toLowerCase()) == -1)) {
                            div.find('.tiles[data-tile-id="' + item.id + '"]').attr('data-tile-wait', 'delete');
                            found--;
                            return true;
                        }
                    }

                    div.find('.tiles[data-tile-id="' + item.id + '"]').attr('data-tile-wait', 'create');

                    if (categoryCustom || typeCustom || keywordCustom) {
                        $('#loadMore_resources').css('display', 'none');

                        if (found > 0) {
                            hidden = false;
                        }
                    } else {
                        $('#loadMore_resources').css('display', 'inline-block');

                        if ((index + 1) <= 12) {
                            div.find('.tiles[data-tile-id="' + item.id + '"]').attr('data-tile-wait', 'create');
                        } else {
                            div.find('.tiles[data-tile-id="' + item.id + '"]').attr('data-tile-wait', 'delete');
                        }

                        lastShowID = 12;

                        hidden = false;
                    }
                });

                div.find('.tiles[data-tile-wait="delete"]').attr('data-tile-wait', '').slideUp("normal");

                setTimeout(function() {
                    div.find('.tiles[data-tile-wait="create"]').attr('data-tile-wait', '').slideDown("normal");
                }, 400);

                if (hidden) {
                    if ($('.not_found').length) {
                        div.find('.not_found').css('display', 'block');
                    } else {
                        div.append("<span class=\"not_found\">No resource found matching that criteria</span>");
                    }
                }
            }
        });

    })(jQuery, window, document);
});

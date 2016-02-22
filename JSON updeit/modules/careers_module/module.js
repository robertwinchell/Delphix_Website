"use strict";

window.addEventListener('load', function() {
    (function($, window, document) {
        var career_listing = {
            "departments": ["Finance & Administration", "Engineering", "Sales"],
            "officeLocations": ["Menlo Park, CA (HQ)", "San Francisco, CA", "New York City, NY"],
            "careers": [{
                "id": 1,
                "title": "Accounts Payable Clerk",
                "department": "Finance & Administration",
                "officeLocation": "Menlo Park, CA (HQ)",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 2,
                "title": "Senior Member of Technical Staff - Performance (Technical Lead)",
                "department": "Engineering",
                "officeLocation": "Menlo Park, CA (HQ)",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 3,
                "title": "Senior Member of Technical Staff - Distributed Systems",
                "department": "Engineering",
                "officeLocation": "San Francisco, CA",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 4,
                "title": "Regional Sales Manager - New York (Financial Services)",
                "department": "Sales",
                "officeLocation": "New York City, NY",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 5,
                "title": "Accounts Payable Clerk",
                "department": "Finance & Administration",
                "officeLocation": "Menlo Park, CA (HQ)",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 6,
                "title": "Senior Member of Technical Staff - Performance (Technical Lead)",
                "department": "Engineering",
                "officeLocation": "Menlo Park, CA (HQ)",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 7,
                "title": "Senior Member of Technical Staff - Distributed Systems",
                "department": "Engineering",
                "officeLocation": "San Francisco, CA",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 8,
                "title": "Regional Sales Manager - New York (Financial Services)",
                "department": "Sales",
                "officeLocation": "New York City, NY",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 9,
                "title": "Accounts Payable Clerk",
                "department": "Finance & Administration",
                "officeLocation": "Menlo Park, CA (HQ)",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 10,
                "title": "Senior Member of Technical Staff - Performance (Technical Lead)",
                "department": "Engineering",
                "officeLocation": "Menlo Park, CA (HQ)",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 11,
                "title": "Senior Member of Technical Staff - Distributed Systems",
                "department": "Engineering",
                "officeLocation": "San Francisco, CA",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 12,
                "title": "Regional Sales Manager - New York (Financial Services)",
                "department": "Sales",
                "officeLocation": "New York City, NY",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 13,
                "title": "Accounts Payable Clerk",
                "department": "Finance & Administration",
                "officeLocation": "Menlo Park, CA (HQ)",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 14,
                "title": "Senior Member of Technical Staff - Performance (Technical Lead)",
                "department": "Engineering",
                "officeLocation": "Menlo Park, CA (HQ)",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 15,
                "title": "Senior Member of Technical Staff - Distributed Systems",
                "department": "Engineering",
                "officeLocation": "San Francisco, CA",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 16,
                "title": "Regional Sales Manager - New York (Financial Services)",
                "department": "Sales",
                "officeLocation": "New York City, NY",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 17,
                "title": "Accounts Payable Clerk",
                "department": "Finance & Administration",
                "officeLocation": "Menlo Park, CA (HQ)",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 18,
                "title": "Senior Member of Technical Staff - Performance (Technical Lead)",
                "department": "Engineering",
                "officeLocation": "Menlo Park, CA (HQ)",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 19,
                "title": "Senior Member of Technical Staff - Distributed Systems",
                "department": "Engineering",
                "officeLocation": "San Francisco, CA",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 20,
                "title": "Regional Sales Manager - New York (Financial Services)",
                "department": "Sales",
                "officeLocation": "New York City, NY",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 21,
                "title": "Accounts Payable Clerk",
                "department": "Finance & Administration",
                "officeLocation": "Menlo Park, CA (HQ)",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 22,
                "title": "Senior Member of Technical Staff - Performance (Technical Lead)",
                "department": "Engineering",
                "officeLocation": "Menlo Park, CA (HQ)",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 23,
                "title": "Senior Member of Technical Staff - Distributed Systems",
                "department": "Engineering",
                "officeLocation": "San Francisco, CA",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 24,
                "title": "Regional Sales Manager - New York (Financial Services)",
                "department": "Sales",
                "officeLocation": "New York City, NY",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 25,
                "title": "Accounts Payable Clerk",
                "department": "Finance & Administration",
                "officeLocation": "Menlo Park, CA (HQ)",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 26,
                "title": "Senior Member of Technical Staff - Performance (Technical Lead)",
                "department": "Engineering",
                "officeLocation": "Menlo Park, CA (HQ)",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 27,
                "title": "Senior Member of Technical Staff - Distributed Systems",
                "department": "Engineering",
                "officeLocation": "San Francisco, CA",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 28,
                "title": "Regional Sales Manager - New York (Financial Services)",
                "department": "Sales",
                "officeLocation": "New York City, NY",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 29,
                "title": "Accounts Payable Clerk",
                "department": "Finance & Administration",
                "officeLocation": "Menlo Park, CA (HQ)",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 30,
                "title": "Senior Member of Technical Staff - Performance (Technical Lead)",
                "department": "Engineering",
                "officeLocation": "Menlo Park, CA (HQ)",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 31,
                "title": "Senior Member of Technical Staff - Distributed Systems",
                "department": "Engineering",
                "officeLocation": "San Francisco, CA",
                "link": "\/gated_resource_pdf"
            }, {
                "id": 32,
                "title": "Regional Sales Manager - New York (Financial Services)",
                "department": "Sales",
                "officeLocation": "New York City, NY",
                "link": "\/gated_resource_pdf"
            }]
        }

        $(document).ready(function() {
            var div = $("<div class=\"container\">").appendTo("#list_careers");

            var lastShowID = 12;

            var allShowID = 0;
            var backgroundCounter = 2;
            $(career_listing.careers).each(function(index, item) {
                var background = "";
                if (backgroundCounter == 3) {
                    background = "tile-dark";
                    if (backgroundCounter > 2) {
                        backgroundCounter = 1;
                    }
                } else {
                    background = "tile-light";
                    if (backgroundCounter > 2) {
                        backgroundCounter = 1;
                    }
                }
                if ((index + 1) <= 12) {
                    div.append("<a href=\"" + item.link + "\">" +
                        "<div data-tile-id=\"" + item.id + "\" class=\"tiles col-md-4\">" +
                        "<div class=\"inner-tiles " + background + "\">" +
                        "<span class=\"tile-department\">" + item.department + " / " + item.officeLocation + "</span>" +
                        "<span class=\"tile-title\">" + item.title + "</span>" +
                        "<span class=\"tile-link\">Learn more <span class=\"glyphicon glyphicon-circle-arrow-right\" aria-hidden=\"true\"></span></span>" +
                        "</div>" +
                        "</div>" +
                        "</a>");
                } else {
                    div.append("<a href=\"" + item.link + "\">" +
                        "<div style=\"display: none;\" data-tile-id=\"" + item.id + "\" class=\"tiles col-md-4\">" +
                        "<div class=\"inner-tiles " + background + "\">" +
                        "<span class=\"tile-department\">" + item.department + " / " + item.officeLocation + "</span>" +
                        "<span class=\"tile-title\">" + item.title + "</span>" +
                        "<span class=\"tile-link\">Learn more <span class=\"glyphicon glyphicon-circle-arrow-right\" aria-hidden=\"true\"></span></span>" +
                        "</div>" +
                        "</div>" +
                        "</a>");

                }
                backgroundCounter++;



                allShowID++;
            });

            var $targetDepartment = $('#targetDepartment_careers');
            $targetDepartment.append("<span class=\"filter-item-dp-item\" data-target=\"department_careers\">All</span>");
            $(career_listing.departments).each(function(index, item) {
                $targetDepartment.append("<span class=\"filter-item-dp-item\" data-target=\"department_careers\">" + item + "</span>");
            });

            var $targetOfficeLocation = $('#targetOfficeLocation_careers');
            $targetOfficeLocation.append("<span class=\"filter-item-dp-item\" data-target=\"officeLocation_careers\">All</span>");
            $(career_listing.officeLocations).each(function(index, item) {
                $targetOfficeLocation.append("<span class=\"filter-item-dp-item\" data-target=\"officeLocation_careers\">" + item + "</span>");
            });

            $('span[data-action="load-more"]').click(function() {
                var beforeLastShowID = lastShowID;
                lastShowID = lastShowID + 12;

                var div = $('#list_careers > div.container');
                $(career_listing.careers).each(function(index, item) {
                    if (((index + 1) <= lastShowID) && ((index + 1) > beforeLastShowID)) {
                        $('.tiles[data-tile-id="' + item.id + '"]').slideDown("normal");
                    }
                });

                if (lastShowID >= allShowID) {
                    $('#loadMore_careers').css('display', 'none');
                }
            });

            $('body').on('click', '#department-div-careers', function() {
                if ($(this).find('.filter-item-dp').hasClass('dp-show')) {
                    $(this).find('.filter-item-dp').removeClass('dp-show')
                    $('#department-div-careers').removeClass('filter-item-drop')

                } else {
                    $(this).find('.filter-item-dp').addClass('dp-show')
                    $('#department-div-careers').addClass('filter-item-drop')
                }
            });

            $('body').on('click', '#location-div-careers', function() {
                if ($(this).find('.filter-item-dp').hasClass('dp-show')) {
                    $(this).find('.filter-item-dp').removeClass('dp-show')
                    $('#location-div-careers').removeClass('filter-item-drop')

                } else {
                    $(this).find('.filter-item-dp').addClass('dp-show')
                    $('#location-div-careers').addClass('filter-item-drop')
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

                if ($(this).text() == 'All' && target == 'department') {
                    $('#' + target).text('Department');
                } else {
                    if ($(this).text() == 'All' && target == 'officeLocation') {
                        $('#' + target).text('Office Location');
                    } else {
                        $('#' + target).text($(this).text());
                    }
                }

                filter_items();
            });

            function filter_items() {
                var department = $('#department_careers').text();
                var officeLocation = $('#officeLocation_careers').text();
                var div = $('#list_careers > div.container');
                var hidden = true;

                if ($('.not_found').length) {
                    $('.not_found').css('display', 'none');
                }

                $(career_listing.careers).each(function(index, item) {
                    var departmentCustom = false,
                        officeLocationCustom = false,
                        found = 0;
                    if (department != "Department") {
                        departmentCustom = true;
                        found++;

                        if (department != item.department) {
                            $('.tiles[data-tile-id="' + item.id + '"]').attr('data-tile-wait', 'delete');
                            found--;
                            return true;
                        }
                    }

                    if (officeLocation != "Office Location") {
                        officeLocationCustom = true;
                        found++;

                        if (officeLocation != item.officeLocation) {
                            $('.tiles[data-tile-id="' + item.id + '"]').attr('data-tile-wait', 'delete');
                            found--;
                            return true;
                        }
                    }

                    $('[data-tile-id="' + item.id + '"]').attr('data-tile-wait', 'create');

                    if (departmentCustom || officeLocationCustom) {
                        $('#loadMore_careers').css('display', 'none');

                        if (found > 0) {
                            hidden = false;
                        }
                    } else {
                        $('#loadMore_careers').css('display', 'inline-block');

                        if ((index + 1) <= 12) {
                            $('[data-tile-id="' + item.id + '"]').attr('data-tile-wait', 'create');
                        } else {
                            $('[data-tile-id="' + item.id + '"]').attr('data-tile-wait', 'delete');
                        }

                        lastShowID = 12;

                        hidden = false;
                    }
                });

                div.find('[data-tile-wait="delete"]').attr('data-tile-wait', '').slideUp("normal");

                setTimeout(function() {
                    div.find('[data-tile-wait="create"]').attr('data-tile-wait', '').slideDown("normal");
                }, 400);

                if (hidden) {
                    if ($('.not_found').length) {
                        $('.not_found').css('display', 'block');
                    } else {
                        div.append("<span class=\"not_found\">No job listings found matching your criteria</span>");
                    }
                }
            }
        });
    })(jQuery, window, document);
});

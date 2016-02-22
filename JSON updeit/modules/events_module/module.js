"use strict";

window.addEventListener('load', function () {
    var resource_listing_events = {
        "regions": ["Region 1", "Region 2", "Region 3", "Region 4", "Region 5", "Region 6"],
        "types": ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6"],
        "audience": ["Audience 1", "Audience 2", "Audience 3", "Audience 4", "Audience 5", "Audience 6"],
        "resources": [{
            "title": "Delphix Names the Winner of Its 2015 Annual Technology Scholarship for Women",
            "region": "Region 1",
            "text": "Kelsey D’Souza of Columbia University Awarded Educational Grant Honoring Women Coders; Jerica Huang of Cornell University Earns Honorable Mention",
            "image": "/images/cio.png",
            "type": "Category 1",
            "audience": "Audience 1",
            "date": "DEC 19, 2013",
            "link": "#"
        }, {
            "title": "Delphix Names the Winner of Its 2015 Annual Technology Scholarship for Women",
            "region": "Region 2",
            "text": "Kelsey D’Souza of Columbia University Awarded Educational Grant Honoring Women Coders; Jerica Huang of Cornell University Earns Honorable Mention",
            "image": "/images/gene_kim.png",
            "type": "Category 2",
            "audience": "Audience 2",
            "date": "DEC 19, 2013",
            "link": "#"
        }, {
            "title": "Delphix Names the Winner of Its 2015 Annual Technology Scholarship for Women",
            "region": "Region 3",
            "text": "Kelsey D’Souza of Columbia University Awarded Educational Grant Honoring Women Coders; Jerica Huang of Cornell University Earns Honorable Mention",
            "image": "/images/c10.png",
            "type": "Category 3",
            "audience": "Audience 3",
            "date": "DEC 19, 2013",
            "link": "#"
        }, {
            "title": "Delphix Names the Winner of Its 2015 Annual Technology Scholarship for Women",
            "region": "Region 4",
            "text": "Kelsey D’Souza of Columbia University Awarded Educational Grant Honoring Women Coders; Jerica Huang of Cornell University Earns Honorable Mention",
            "image": "/images/oaug.png",
            "type": "Category 4",
            "audience": "Audience 4",
            "date": "DEC 19, 2013",
            "link": "#"
        }, {
            "title": "Delphix Names the Winner of Its 2015 Annual Technology Scholarship for Women",
            "region": "Region 5",
            "text": "Kelsey D’Souza of Columbia University Awarded Educational Grant Honoring Women Coders; Jerica Huang of Cornell University Earns Honorable Mention",
            "image": "/images/mous.png",
            "type": "Category 5",
            "audience": "Audience 5",
            "date": "DEC 19, 2013",
            "link": "#"
        }, {
            "title": "Delphix Names the Winner of Its 2015 Annual Technology Scholarship for Women",
            "region": "Region 6",
            "text": "Kelsey D’Souza of Columbia University Awarded Educational Grant Honoring Women Coders; Jerica Huang of Cornell University Earns Honorable Mention",
            "image": "/images/ten.png",
            "type": "Category 6",
            "audience": "Audience 6",
            "date": "DEC 19, 2013",
            "link": "#"
        }, {
            "title": "Delphix Names the Winner of Its 2015 Annual Technology Scholarship for Women",
            "region": "Region 1",
            "text": "Kelsey D’Souza of Columbia University Awarded Educational Grant Honoring Women Coders; Jerica Huang of Cornell University Earns Honorable Mention",
            "image": "/images/cio.png",
            "type": "Category 1",
            "audience": "Audience 1",
            "date": "DEC 19, 2013",
            "link": "#"
        }, {
            "title": "Delphix Names the Winner of Its 2015 Annual Technology Scholarship for Women",
            "region": "Region 2",
            "text": "Kelsey D’Souza of Columbia University Awarded Educational Grant Honoring Women Coders; Jerica Huang of Cornell University Earns Honorable Mention",
            "image": "/images/gene_kim.png",
            "type": "Category 2",
            "audience": "Audience 2",
            "date": "DEC 19, 2013",
            "link": "#"
        }, {
            "title": "Delphix Names the Winner of Its 2015 Annual Technology Scholarship for Women",
            "region": "Region 3",
            "text": "Kelsey D’Souza of Columbia University Awarded Educational Grant Honoring Women Coders; Jerica Huang of Cornell University Earns Honorable Mention",
            "image": "/images/c10.png",
            "type": "Category 3",
            "audience": "Audience 3",
            "date": "DEC 19, 2013",
            "link": "#"
        }, {
            "title": "Delphix Names the Winner of Its 2015 Annual Technology Scholarship for Women",
            "region": "Region 4",
            "text": "Kelsey D’Souza of Columbia University Awarded Educational Grant Honoring Women Coders; Jerica Huang of Cornell University Earns Honorable Mention",
            "image": "/images/oaug.png",
            "type": "Category 4",
            "audience": "Audience 4",
            "date": "DEC 19, 2013",
            "link": "#"
        }, {
            "title": "Delphix Names the Winner of Its 2015 Annual Technology Scholarship for Women",
            "region": "Region 5",
            "text": "Kelsey D’Souza of Columbia University Awarded Educational Grant Honoring Women Coders; Jerica Huang of Cornell University Earns Honorable Mention",
            "image": "/images/mous.png",
            "type": "Category 5",
            "audience": "Audience 5",
            "date": "DEC 19, 2013",
            "link": "#"
        }, {
            "title": "Delphix Names the Winner of Its 2015 Annual Technology Scholarship for Women",
            "region": "Region 6",
            "text": "Kelsey D’Souza of Columbia University Awarded Educational Grant Honoring Women Coders; Jerica Huang of Cornell University Earns Honorable Mention",
            "image": "/images/ten.png",
            "type": "Category 6",
            "audience": "Audience 6",
            "date": "DEC 19, 2013",
            "link": "#"
        }, {
            "title": "Delphix Names the Winner of Its 2015 Annual Technology Scholarship for Women",
            "region": "Region 1",
            "text": "Kelsey D’Souza of Columbia University Awarded Educational Grant Honoring Women Coders; Jerica Huang of Cornell University Earns Honorable Mention",
            "image": "/images/cio.png",
            "type": "Category 1",
            "audience": "Audience 1",
            "date": "DEC 19, 2013",
            "link": "#"
        }, {
            "title": "Delphix Names the Winner of Its 2015 Annual Technology Scholarship for Women",
            "region": "Region 2",
            "text": "Kelsey D’Souza of Columbia University Awarded Educational Grant Honoring Women Coders; Jerica Huang of Cornell University Earns Honorable Mention",
            "image": "/images/gene_kim.png",
            "type": "Category 2",
            "audience": "Audience 2",
            "date": "DEC 19, 2013",
            "link": "#"
        }, {
            "title": "Delphix Names the Winner of Its 2015 Annual Technology Scholarship for Women",
            "region": "Region 3",
            "text": "Kelsey D’Souza of Columbia University Awarded Educational Grant Honoring Women Coders; Jerica Huang of Cornell University Earns Honorable Mention",
            "image": "/images/c10.png",
            "type": "Category 3",
            "audience": "Audience 3",
            "date": "DEC 19, 2013",
            "link": "#"
        }, {
            "title": "Delphix Names the Winner of Its 2015 Annual Technology Scholarship for Women",
            "region": "Region 4",
            "text": "Kelsey D’Souza of Columbia University Awarded Educational Grant Honoring Women Coders; Jerica Huang of Cornell University Earns Honorable Mention",
            "image": "/images/oaug.png",
            "type": "Category 4",
            "audience": "Audience 4",
            "date": "DEC 19, 2013",
            "link": "#"
        }, {
            "title": "Delphix Names the Winner of Its 2015 Annual Technology Scholarship for Women",
            "region": "Region 5",
            "text": "Kelsey D’Souza of Columbia University Awarded Educational Grant Honoring Women Coders; Jerica Huang of Cornell University Earns Honorable Mention",
            "image": "/images/mous.png",
            "type": "Category 5",
            "audience": "Audience 5",
            "date": "DEC 19, 2013",
            "link": "#"
        }, {
            "title": "Delphix Names the Winner of Its 2015 Annual Technology Scholarship for Women",
            "region": "Region 6",
            "text": "Kelsey D’Souza of Columbia University Awarded Educational Grant Honoring Women Coders; Jerica Huang of Cornell University Earns Honorable Mention",
            "image": "/images/ten.png",
            "type": "Category 6",
            "audience": "Audience 6",
            "date": "DEC 19, 2013",
            "link": "#"
        }]
    };

    (function($, window, document) {
        $(window).ready(function() {
            var maxTiles = 0,
                lastLoadedTiles = 0,
                $body = $('body'),
                $featuredTarget = $('#featured'),
                filters = '.inner-filter',
                $filters = $(filters),
                customDropdown = 'span[data-action="customDropdown"]',
                $date = $('#date-filter-events'),
                $dateFilter = $('.filter-date-events'),
                $tileList = $('#list_events'),
                $loadMore = $('#loadMore_events'),
                $notFound = $('#not-found');

            function init() {
                setMaxTiles();

                loadDropdowns();
                loadDate();
                loadTiles(false);
                loadMoreListener();
            }

            function setMaxTiles() {
                var count = 0;
                $(resource_listing_events.resources).each(function (i, v) {
                    count++;
                });

                maxTiles = count;
            }

            function loadDropdowns() {
                var $regionsDp = $('#region-filter-events .filter-dp'),
                    $typesDp = $('#type-filter-events .filter-dp'),
                    $audiencesDp = $('#audience-filter-events .filter-dp');

                $regionsDp.append(generateDpHtml("Region", "#region-filter-events"));
                $typesDp.append(generateDpHtml("Type", "#type-filter-events"));
                $audiencesDp.append(generateDpHtml("Audience", "#audience-filter-events"));

                $(resource_listing_events.regions).each(function(i, v) {
                    $regionsDp.append(generateDpHtml(v, "#region-filter-events"));
                });

                $(resource_listing_events.types).each(function(i, v) {
                    $typesDp.append(generateDpHtml(v, "#type-filter-events"));
                });

                $(resource_listing_events.audience).each(function(i, v) {
                    $audiencesDp.append(generateDpHtml(v, "#audience-filter-events"));
                });

                $body.on('click', customDropdown, function() {
                    var target = $(this).attr('data-target');

                    $(target).find('.filter-string').text($(this).text());

                    filterTiles();
                });

                $body.on('click', filters, function () {
                    this.sel = $(this);

                    if (this.sel.hasClass('active')) {
                        if (this.sel.attr('id') != 'date-filter-events') {
                            this.sel.removeClass('active');
                        }
                    } else {
                        $filters.each(function() {
                            $(this).removeClass('active');
                        });

                        this.sel.addClass('active');
                    }
                });

                $body.click(function(e) {
                    if (!$filters.is(e.target) && $filters.has(e.target).length === 0) {
                        $filters.each(function(i) {
                            $(this).removeClass('active');
                        });
                    }
                });
            }

            function generateDpHtml(text, target) {
                return "<span class=\"filter-dp-item\" data-action=\"customDropdown\" data-target=\""+target+"\">"+text+"</span>";
            }

            function loadDate() {
                $dateFilter.datepicker({
                    changeMonth: true,
                    changeYear: true,
                    onChangeMonthYear: function(year, month) {
                        var monthA = [
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December"
                        ];

                        $date.find('.filter-string').text('Date:  ' + monthA[month - 1] + ', ' + year);
                        $date.removeClass('active');

                        filterTiles();
                    }
                });
            }

            function loadTiles(mode) {
                $tileList.html('');

                lastLoadedTiles = 6;

                if (mode) {
                    setTimeout(function() {
                        hideShowLoadMore(true);
                    }, 500);
                } else {
                    hideShowLoadMore(true);
                }

                $(resource_listing_events.resources).each(function (i, v) {
                    if (i < lastLoadedTiles) {
                        $tileList.append(generateTileHtml(v, i, mode));
                    }
                });
            }

            function generateTileHtml(object, pos, wait) {
                var options = "";

                if (wait) {
                    options += "data-wait=\"create\" style=\"display: none;\"";
                }

                return "<a href=\""+object.link+"\">" +
                    "<div data-pos=\""+pos+"\" "+options+" class=\"tile col-md-4\">" +
                    "<div class=\"inner-tile\">" +
                    "<div class=\"tile-left\">" +
                    "<img src=\""+object.image+"\" alt=\""+object.title+"\">" +
                    "</div>" +
                    "<div class=\"tile-right\">" +
                    "<span class=\"tile-type\">"+object.type+"</span>" +
                    "<span class=\"tile-date\">"+object.date+"</span>" +
                    "<span class=\"tile-title\">"+object.title+"</span>" +
                    "<p class=\"tile-text\">"+object.text+"</p>" +
                    "<span class=\"tile-link\">See the data <span class=\"glyphicon glyphicon-circle-arrow-right\" aria-hidden=\"true\"></span></span>" +
                    "</div>" +
                    "</div>" +
                    "</div>";
            }

            function loadMoreListener() {
                $loadMore.click(function() {
                    loadMore();
                });
            }

            function loadMore() {
                var preLastLoadedTiles = lastLoadedTiles - 1;
                lastLoadedTiles += 6;

                $(resource_listing_events.resources).each(function (i, v) {
                    if (i < lastLoadedTiles && i > preLastLoadedTiles) {
                        $tileList.append(generateTileHtml(v, i, true));
                    }
                });

                showWaitTiles();

                if (lastLoadedTiles >= maxTiles) {
                    hideShowLoadMore(false);
                }
            }

            function hideShowLoadMore(option) {
                if (option) {
                    $loadMore.css('display', 'block');
                } else {
                    $loadMore.css('display', 'none');
                }
            }

            function showWaitTiles() {
                $('div[data-wait="create"]').each(function (i) {
                    $(this).slideDown('slow');

                    $(this).attr('data-wait', '');
                });
            }

            function hideWaitTiles() {
                $('div[data-wait="destroy"]').each(function (i) {
                    $(this).slideUp('slow');

                    $(this).attr('data-wait', '');
                });
            }

            function filterTiles() {
                var region      = $('#region-filter-events .filter-string').text(),
                    type        = $('#type-filter-events .filter-string').text(),
                    audience    = $('#audience-filter-events .filter-string').text(),
                    date        = $('#date-filter-events .filter-string').text(),
                    filterByRegion = false,
                    filterByType = false,
                    filterByAudience = false,
                    filterByDate = false,
                    matchs = 0;

                generateAllTiles();

                setTimeout(function() {
                    $(resource_listing_events.resources).each(function (i, v) {
                        var preMatchs = matchs,
                            isValidTile = true;

                        if (region != "Region") {
                            filterByRegion = true;

                            if (region != v.region) {
                                $('div[data-pos="'+i+'"]').attr('data-wait', 'destroy');

                                isValidTile = false;
                            } else {
                                if ($('div[data-pos="'+i+'"]').attr('data-wait') != 'destroy') {
                                    $('div[data-pos="' + i + '"]').attr('data-wait', 'create');
                                }

                                matchs++;
                            }
                        }

                        if (type != "Type") {
                            filterByType = true;

                            if (type != v.type) {
                                $('div[data-pos="'+i+'"]').attr('data-wait', 'destroy');

                                isValidTile = false;
                            } else {
                                if ($('div[data-pos="'+i+'"]').attr('data-wait') != 'destroy') {
                                    $('div[data-pos="' + i + '"]').attr('data-wait', 'create');
                                }

                                matchs++;
                            }
                        }

                        if (audience != "Audience") {
                            filterByAudience = true;

                            if (audience != v.audience) {
                                $('div[data-pos="'+i+'"]').attr('data-wait', 'destroy');

                                isValidTile = false;
                            } else {
                                if ($('div[data-pos="'+i+'"]').attr('data-wait') != 'destroy') {
                                    $('div[data-pos="' + i + '"]').attr('data-wait', 'create');
                                }

                                matchs++;
                            }
                        }

                        if (date != "Date") {
                            filterByDate = true;

                            var dateSelBreak = date.split(' '),
                                dateSel = dateSelBreak[2].slice(0, -1) + ' 01, ' + dateSelBreak[3];

                            var dateMatchBreak = v.date.split(' '),
                                dateMatch = dateMatchBreak[0] + ' 01, ' + dateMatchBreak[2];

                            dateSel = new Date(dateSel).getTime();
                            dateMatch = new Date(dateMatch).getTime();

                            if (dateSel != dateMatch) {
                                $('div[data-pos="'+i+'"]').attr('data-wait', 'destroy');

                                isValidTile = false;
                            } else {
                                if ($('div[data-pos="'+i+'"]').attr('data-wait') != 'destroy') {
                                    $('div[data-pos="' + i + '"]').attr('data-wait', 'create');
                                }

                                matchs++;
                            }
                        }

                        if (!isValidTile) {
                            matchs = preMatchs;
                        }
                    });

                    if (filterByRegion || filterByType || filterByAudience || filterByDate) {
                        hideShowLoadMore(false);

                        hideWaitTiles();

                        setTimeout(function() {
                            showWaitTiles();

                            if (matchs == 0) {
                                if ($notFound.length == 0) {
                                    $tileList.append('<span id="not-found">No events found matching that criteria</span>');
                                } else {
                                    $('#not-found').css('display', 'block');
                                }
                            } else {
                                if ($notFound.length != 0) {
                                    $notFound.css('display', 'none');
                                }
                            }
                        }, 500);
                    } else {
                        loadTiles(true);

                        setTimeout(function() {
                            showWaitTiles();
                        }, 500);
                    }
                }, 500);
            }

            function generateAllTiles() {
                $('.tile').each(function() {
                    $(this).slideUp('slow');
                });

                setTimeout(function () {
                    $tileList.html('');

                    $(resource_listing_events.resources).each(function(i, v) {
                        $tileList.append(generateTileHtml(v, i, true));
                    });
                }, 500);
            }

            init();
        });
    })(jQuery, window, document);
});
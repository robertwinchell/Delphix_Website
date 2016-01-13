"use strict";

(function($, window, document) {

    var resource_listing = {
        "categories": ["Application Development", "DevOps", "Test Data Management", "Data Masking", "Backup", "ERP Upgrades", "Cloud Migration"],
        "types": ["turpis", "dolor", "finibus"],
        "resources": [{
            "title": "Mauris egestas",
            "source": "Vivamus",
            "description": "Pellentesque nec ex eu arcu tempor lobortis",
            "categories": ["DevOps", "Test Data Management"],
            "type": "turpis",
            "image": "\/images\/resource_teaser_1.jpg",
            "link": "\/gated_resource_pdf"
        }, {
            "title": "Quisque eget",
            "source": "Mauris",
            "description": "Aliquam scelerisque semper ipsum",
            "categories": ["ERP Upgrades", "Cloud Migration"],
            "type": "dolor",
            "image": "\/images\/resource_teaser_2.jpg",
            "link": "\/gated_resource_video"
        }, {
            "title": "Donec nec nibh",
            "source": "Duis",
            "description": "Nullam vitae magna mollis, cursus tellus quis, aliquam diam",
            "categories": ["Backup", "ERP Upgrades"],
            "type": "finibus",
            "image": "\/images\/resource_teaser_3.jpg",
            "link": "\/gated_resource_pdf"
        }, {
            "title": "Quisque tincidunt",
            "source": "Cras",
            "description": "Proin a varius elit vestibulum nec fringilla est.",
            "categories": ["Application Development", "DevOps"],
            "type": "turpis",
            "image": "\/images\/resource_teaser_4.jpg",
            "link": "\/gated_resource_video"
        }, {
            "title": "Mauris egestas",
            "source": "Vivamus",
            "description": "Pellentesque nec ex eu arcu tempor lobortis",
            "categories": ["DevOps", "Test Data Management"],
            "type": "turpis",
            "image": "\/images\/resource_teaser_1.jpg",
            "link": "\/gated_resource_pdf"
        }, {
            "title": "Quisque eget",
            "source": "Mauris",
            "description": "Aliquam scelerisque semper ipsum",
            "categories": ["ERP Upgrades", "Cloud Migration"],
            "type": "dolor",
            "image": "\/images\/resource_teaser_2.jpg",
            "link": "\/gated_resource_video"
        }, {
            "title": "Donec nec nibh",
            "source": "Duis",
            "description": "Nullam vitae magna mollis, cursus tellus quis, aliquam diam",
            "categories": ["Backup", "ERP Upgrades"],
            "type": "finibus",
            "image": "\/images\/resource_teaser_3.jpg",
            "link": "\/gated_resource_pdf"
        }, {
            "title": "Quisque tincidunt",
            "source": "Cras",
            "description": "Proin a varius elit vestibulum nec fringilla est.",
            "categories": ["Application Development", "DevOps"],
            "type": "turpis",
            "image": "\/images\/resource_teaser_4.jpg",
            "link": "\/gated_resource_video"
        }, {
            "title": "Mauris egestas",
            "source": "Vivamus",
            "description": "Pellentesque nec ex eu arcu tempor lobortis",
            "categories": ["DevOps", "Test Data Management"],
            "type": "turpis",
            "image": "\/images\/resource_teaser_1.jpg",
            "link": "\/gated_resource_pdf"
        }, {
            "title": "Quisque eget",
            "source": "Mauris",
            "description": "Aliquam scelerisque semper ipsum",
            "categories": ["ERP Upgrades", "Cloud Migration"],
            "type": "dolor",
            "image": "\/images\/resource_teaser_2.jpg",
            "link": "\/gated_resource_video"
        }, {
            "title": "Donec nec nibh",
            "source": "Duis",
            "description": "Nullam vitae magna mollis, cursus tellus quis, aliquam diam",
            "categories": ["Backup", "ERP Upgrades"],
            "type": "finibus",
            "image": "\/images\/resource_teaser_3.jpg",
            "link": "\/gated_resource_pdf"
        }, {
            "title": "Quisque tincidunt",
            "source": "Cras",
            "description": "Proin a varius elit vestibulum nec fringilla est.",
            "categories": ["Application Development", "DevOps"],
            "type": "turpis",
            "image": "\/images\/resource_teaser_4.jpg",
            "link": "\/gated_resource_video"
        }, {
            "title": "Mauris egestas",
            "source": "Vivamus",
            "description": "Pellentesque nec ex eu arcu tempor lobortis",
            "categories": ["DevOps", "Test Data Management"],
            "type": "turpis",
            "image": "\/images\/resource_teaser_1.jpg",
            "link": "\/gated_resource_pdf"
        }, {
            "title": "Quisque eget",
            "source": "Mauris",
            "description": "Aliquam scelerisque semper ipsum",
            "categories": ["ERP Upgrades", "Cloud Migration"],
            "type": "dolor",
            "image": "\/images\/resource_teaser_2.jpg",
            "link": "\/gated_resource_video"
        }, {
            "title": "Donec nec nibh",
            "source": "Duis",
            "description": "Nullam vitae magna mollis, cursus tellus quis, aliquam diam",
            "categories": ["Backup", "ERP Upgrades"],
            "type": "finibus",
            "image": "\/images\/resource_teaser_3.jpg",
            "link": "\/gated_resource_pdf"
        }, {
            "title": "Quisque tincidunt",
            "source": "Cras",
            "description": "Proin a varius elit vestibulum nec fringilla est.",
            "categories": ["Application Development", "DevOps"],
            "type": "turpis",
            "image": "\/images\/resource_teaser_4.jpg",
            "link": "\/gated_resource_video"
        }, {
            "title": "Mauris egestas",
            "source": "Vivamus",
            "description": "Pellentesque nec ex eu arcu tempor lobortis",
            "categories": ["DevOps", "Test Data Management"],
            "type": "turpis",
            "image": "\/images\/resource_teaser_1.jpg",
            "link": "\/gated_resource_pdf"
        }, {
            "title": "Quisque eget",
            "source": "Mauris",
            "description": "Aliquam scelerisque semper ipsum",
            "categories": ["ERP Upgrades", "Cloud Migration"],
            "type": "dolor",
            "image": "\/images\/resource_teaser_2.jpg",
            "link": "\/gated_resource_video"
        }, {
            "title": "Donec nec nibh",
            "source": "Duis",
            "description": "Nullam vitae magna mollis, cursus tellus quis, aliquam diam",
            "categories": ["Backup", "ERP Upgrades"],
            "type": "finibus",
            "image": "\/images\/resource_teaser_3.jpg",
            "link": "\/gated_resource_pdf"
        }, {
            "title": "Quisque tincidunt",
            "source": "Cras",
            "description": "Proin a varius elit vestibulum nec fringilla est.",
            "categories": ["Application Development", "DevOps"],
            "type": "turpis",
            "image": "\/images\/resource_teaser_4.jpg",
            "link": "\/gated_resource_video"
        }, {
            "title": "Mauris egestas",
            "source": "Vivamus",
            "description": "Pellentesque nec ex eu arcu tempor lobortis",
            "categories": ["DevOps", "Test Data Management"],
            "type": "turpis",
            "image": "\/images\/resource_teaser_1.jpg",
            "link": "\/gated_resource_pdf"
        }, {
            "title": "Quisque eget",
            "source": "Mauris",
            "description": "Aliquam scelerisque semper ipsum",
            "categories": ["ERP Upgrades", "Cloud Migration"],
            "type": "dolor",
            "image": "\/images\/resource_teaser_2.jpg",
            "link": "\/gated_resource_video"
        }, {
            "title": "Donec nec nibh",
            "source": "Duis",
            "description": "Nullam vitae magna mollis, cursus tellus quis, aliquam diam",
            "categories": ["Backup", "ERP Upgrades"],
            "type": "finibus",
            "image": "\/images\/resource_teaser_3.jpg",
            "link": "\/gated_resource_pdf"
        }, {
            "title": "Quisque tincidunt",
            "source": "Cras",
            "description": "Proin a varius elit vestibulum nec fringilla est.",
            "categories": ["Application Development", "DevOps"],
            "type": "turpis",
            "image": "\/images\/resource_teaser_4.jpg",
            "link": "\/gated_resource_video"
        }, {
            "title": "Mauris egestas",
            "source": "Vivamus",
            "description": "Pellentesque nec ex eu arcu tempor lobortis",
            "categories": ["DevOps", "Test Data Management"],
            "type": "turpis",
            "image": "\/images\/resource_teaser_1.jpg",
            "link": "\/gated_resource_pdf"
        }, {
            "title": "Quisque eget",
            "source": "Mauris",
            "description": "Aliquam scelerisque semper ipsum",
            "categories": ["ERP Upgrades", "Cloud Migration"],
            "type": "dolor",
            "image": "\/images\/resource_teaser_2.jpg",
            "link": "\/gated_resource_video"
        }, {
            "title": "Donec nec nibh",
            "source": "Duis",
            "description": "Nullam vitae magna mollis, cursus tellus quis, aliquam diam",
            "categories": ["Backup", "ERP Upgrades"],
            "type": "finibus",
            "image": "\/images\/resource_teaser_3.jpg",
            "link": "\/gated_resource_pdf"
        }, {
            "title": "Quisque tincidunt",
            "source": "Cras",
            "description": "Proin a varius elit vestibulum nec fringilla est.",
            "categories": ["Application Development", "DevOps"],
            "type": "turpis",
            "image": "\/images\/resource_teaser_4.jpg",
            "link": "\/gated_resource_video"
        }, {
            "title": "Mauris egestas",
            "source": "Vivamus",
            "description": "Pellentesque nec ex eu arcu tempor lobortis",
            "categories": ["DevOps", "Test Data Management"],
            "type": "turpis",
            "image": "\/images\/resource_teaser_1.jpg",
            "link": "\/gated_resource_pdf"
        }, {
            "title": "Quisque eget",
            "source": "Mauris",
            "description": "Aliquam scelerisque semper ipsum",
            "categories": ["ERP Upgrades", "Cloud Migration"],
            "type": "dolor",
            "image": "\/images\/resource_teaser_2.jpg",
            "link": "\/gated_resource_video"
        }, {
            "title": "Donec nec nibh",
            "source": "Duis",
            "description": "Nullam vitae magna mollis, cursus tellus quis, aliquam diam",
            "categories": ["Backup", "ERP Upgrades"],
            "type": "finibus",
            "image": "\/images\/resource_teaser_3.jpg",
            "link": "\/gated_resource_pdf"
        }, {
            "title": "Quisque tincidunt",
            "source": "Cras",
            "description": "Proin a varius elit vestibulum nec fringilla est.",
            "categories": ["Application Development", "DevOps"],
            "type": "turpis",
            "image": "\/images\/resource_teaser_4.jpg",
            "link": "\/gated_resource_video"
        }]
    }

    $(document).ready(function() {
        // document ready
        var ul = $("<ul>").appendTo("#list");

        var listDiv = $(document.createElement("div"));
        listDiv.className= "tiles";

        $(resource_listing.resources).each(function (index, item) {
            var li = $(document.createElement("li"));
            li.append("<div class=\"tiles\"><h3>"+item.title+"</h3></div>");

            ul.append(li);
        });


    });

})(jQuery, window, document);

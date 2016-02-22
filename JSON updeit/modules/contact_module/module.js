"use strict";

window.addEventListener('load', function () {
    (function($, window, document){

        $(window).ready(function () {
            $('#reasonContact').selectmenu("destroy");

            $('#reasonContactTrigger').click(function() {
                $('#reasonContact').simulate('mousedown');
            });
        });

    })(jQuery, window, document);
});
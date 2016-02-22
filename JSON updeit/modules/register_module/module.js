"use strict";

window.addEventListener('load', function () {
    $('#formRegister').submit(function (e) {
        e.preventDefault();

        var $this = $(this);
        var $message = $('#messagePopUp');

        $this.fadeOut("normal", function () {
            $message.css('display', 'table');
        });
    });
});
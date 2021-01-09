$(document).ready(function() {

    $(window).scroll(function() {
        $('header nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    });

});
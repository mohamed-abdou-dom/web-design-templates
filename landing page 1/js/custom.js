$(document).ready(function() {

    $(window).scroll(function() {
        $('.mainHeader nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    });

});
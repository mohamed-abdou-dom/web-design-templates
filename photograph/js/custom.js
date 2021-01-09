$(document).ready(function() {

    // $(window).scroll(function() {
    //     $('header nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    // });

    var height = $('.projects .image').height() / 2.5;
    $('.projects .image p').css({
        paddingTop: height,
    });

    var height2 = $('.portfolio-header').height() / 2.5;
    $('.portfolio-header .content').css({
        paddingTop: height2,
    });


});
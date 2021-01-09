$(document).ready(function(){
   
    'use strict';

    // $('html').niceScroll();




    // open sub-menu

    $('.open-menu').click(function(){
        $('.sub-menu').css({
            display:'block'
        })
    });
    $('.fa-times').click(function(){
        $('.sub-menu').css({
            display:'none'
        })
    });




    // set the background of the header same as the window height
    var myHeader = $('.main-head'),
        content = $('.main-head .content');
    myHeader.height($(window).height());

    // allign the content to the center of the window 
    var alignCenter = ($(window).height() - content.height())/2;
    content.css({
        paddingTop: alignCenter
    });

    // arrow down in main header section move to the features section

    $('.go-next-sec i').click(function(){
        $('html,body').animate({
            scrollTop: $('.features').offset().top
        },1000);
    });

    // allign form in the subscribe section to the middle

    var alignFormCenter = ($('.subscribe').height() - $('.subscribe .form').height())/2;
    $('.subscribe .form').css({
        paddingTop: alignFormCenter
    });

    // testimonials slider

    var chevLeft = $('.fa-chevron-left'),
    chevRight = $('.fa-chevron-right');

    function priority() {
        $('.testimonials .test:first').hasClass('active')?chevLeft.fadeOut(500):chevLeft.fadeIn(500);
        $('.testimonials .test:last').hasClass('active')?chevRight.fadeOut(500):chevRight.fadeIn(500);
    }
    priority();
    $('.testimonials .links i').click(function(){
        if($(this).hasClass('fa-chevron-right')){
            $('.testimonials .active').fadeOut(1000,function(){
                $(this).removeClass('active').next('.test').addClass('active').fadeIn();
                priority();
            });
        }
        else{
            $('.testimonials .active').fadeOut(1000,function(){
                $(this).removeClass('active').prev('.test').addClass('active').fadeIn();
                priority();
            });
        }
    });


    

});

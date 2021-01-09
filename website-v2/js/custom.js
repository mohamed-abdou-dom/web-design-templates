$(document).ready(function(){

    // auto set the height of the main background

    var myHeader = $('.header'),
    sliderSection = $('.section');

    myHeader.height($(window).height());

    sliderSection.height($(window).height());

    $(window).resize(function(){
        myHeader.height($(window).height());
        sliderSection.height($(window).height());
    });


    // add active class to each nav link

    $('.nav-items ul li a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });


    // trigger bx-slider library

    $('.slider').bxSlider({
        pager:false
    });

    // smoothly scrolling

    $('.navbar .nav-items ul li a').click(function(e){
        e.preventDefault();
        var value = $(this).data('value');
        $('html,body').animate({
            scrollTop: $('.'+value).offset().top
        },1000);
    });

    // testimonials auto slide content

    (function autoSlider(){

        $('.testimonials .content .active').each(function(){

            if(!$(this).is(':last-child')){
   
                $(this).delay(4000).fadeOut(1000,function(){

                    $(this).removeClass('active').next().addClass('active').fadeIn(1000);
                    autoSlider();
                });

            }else{
                $(this).delay(4000).fadeOut(1000,function(){
                    $(this).removeClass('active');
                    $('.testimonials .content >div').eq(0).addClass('active').fadeIn(1000);
                    autoSlider();
                });
            }

        });

    }());

});
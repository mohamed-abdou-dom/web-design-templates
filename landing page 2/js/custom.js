$(document).ready(function() {

    $('.nav-link.search').click(function(e) {
        e.preventDefault();
        $('.search-sec').fadeIn(1000);
    });
    $('.close span').click(function() {
        $('.search-sec').fadeOut(1000);
    });

});
/* STICKY NAV WITH JQUERY PLUGIN: waypoints */

$(document).ready(function() {

    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
    },
    {
       offset: '60px'
    });
    /* argumento direction permite identificar si el scroll va hacia abajo o hacia arriba */

    /*AUTO SCROLL ON BUTTONS */

    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    /* NAVIGATION AUTO SCROLL */

    $(function() {
        
    })

});
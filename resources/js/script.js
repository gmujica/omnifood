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
    /*
    var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window') 
    },
     {
        offset: '25%'
    })
    */

})
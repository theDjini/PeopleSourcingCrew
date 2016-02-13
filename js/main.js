$("#card").flip({
    trigger: 'manual',
    back: '#crewFaceOneInfo',
    axis: 'x'
});

$("#crewFaceOne").click(function(){
    $("#card").flip(true);
});

$("#infoContactBack").click(function(){
    $("#card").flip(false);
});


$("#cardTwo").flip({
    trigger: 'manual',
    back: '#crewFaceTwoInfo',
    axis: 'x'
});

$("#crewFaceTwo").click(function(){
    $("#cardTwo").flip(true);
});

$("#infoContactBackTwo").click(function(){
    $("#cardTwo").flip(false);
});

$("#cardThree").flip({
    trigger: 'manual',
    back: '#crewFaceThreeInfo',
    axis: 'x'
});

$("#crewFaceThree").click(function(){
    $("#cardThree").flip(true);
});

$("#infoContactBackThree").click(function(){
    $("#cardThree").flip(false);
});

$("#cardFour").flip({
    trigger: 'manual',
    back: '#crewFaceFourInfo',
    axis: 'x'
});

$("#crewFaceFour").click(function(){
    $("#cardFour").flip(true);
});

$("#infoContactBackFour").click(function(){
    $("#cardFour").flip(false);
});

$("#cardFive").flip({
    trigger: 'manual',
    back: '#crewFaceFiveInfo',
    axis: 'x'
});

$("#crewFaceFive").click(function(){
    $("#cardFive").flip(true);
});

$("#infoContactBackFive").click(function(){
    $("#cardFive").flip(false);
});




// DOM ready function
$(function() {

    // All anchor links smooth scroll
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
                return false;
            }
        }
    });

    // Fly-in all sections and parallax elements
    var $sections = $('.fly-in');
    var $items = $('.parallax');
    var $window = $(window);

    $(window).scroll(function() {
        // Fly-in sections
        $sections.each(function() {
            var $section = $(this);
            var diff = $window.scrollTop() + $window.height();

            if(diff - 300 > $section.offset().top)
                $section.addClass('s');
        });

        // Parallax items
        /*$items.each(function() {
            var $item = $(this);

            $item.css('transform', translate(' + $window.scrollTop() + ')')

        });*/
    });


    // Force scroll function on the load event
    $(window).scroll();

});

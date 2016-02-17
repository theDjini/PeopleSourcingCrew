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


$("#cardSix").flip({
    trigger: 'manual',
    back: '#crewFaceSixInfo',
    axis: 'x'
});

$("#crewFaceSix").click(function(){
    $("#cardSix").flip(true);
});

$("#infoContactBackSix").click(function(){
    $("#cardSix").flip(false);
});


$("#cardSeven").flip({
    trigger: 'manual',
    back: '#crewFaceSevenInfo',
    axis: 'x'
});

$("#crewFaceSeven").click(function(){
    $("#cardSeven").flip(true);
});

$("#infoContactBackSeven").click(function(){
    $("#cardSeven").flip(false);
});


$("#cardEight").flip({
    trigger: 'manual',
    back: '#crewFaceEightInfo',
    axis: 'x'
});

$("#crewFaceEight").click(function(){
    $("#cardEight").flip(true);
});

$("#infoContactBackEight").click(function(){
    $("#cardEight").flip(false);
});


$("#cardNine").flip({
    trigger: 'manual',
    back: '#crewFaceNineInfo',
    axis: 'x'
});

$("#crewFaceNine").click(function(){
    $("#cardNine").flip(true);
});

$("#infoContactBackNine").click(function(){
    $("#cardNine").flip(false);
});


$("#cardTen").flip({
    trigger: 'manual',
    back: '#crewFaceTenInfo',
    axis: 'x'
});

$("#crewFaceTen").click(function(){
    $("#cardTen").flip(true);
});

$("#infoContactBackTen").click(function(){
    $("#cardTen").flip(false);
});


$("#cardEleven").flip({
    trigger: 'manual',
    back: '#crewFaceElevenInfo',
    axis: 'x'
});

$("#crewFaceEleven").click(function(){
    $("#cardEleven").flip(true);
});

$("#infoContactBackEleven").click(function(){
    $("#cardEleven").flip(false);
});


$("#cardTwelve").flip({
    trigger: 'manual',
    back: '#crewFaceTwelveInfo',
    axis: 'x'
});

$("#crewFaceTwelve").click(function(){
    $("#cardTwelve").flip(true);
});

$("#infoContactBackTwelve").click(function(){
    $("#cardTwelve").flip(false);
});


$("#cardThirteen").flip({
    trigger: 'manual',
    back: '#crewFaceThirteenInfo',
    axis: 'x'
});

$("#crewFaceThirteen").click(function(){
    $("#cardThirteen").flip(true);
});

$("#infoContactBackThirteen").click(function(){
    $("#cardThirteen").flip(false);
});


$("#cardFourteen").flip({
    trigger: 'manual',
    back: '#crewFaceFourteenInfo',
    axis: 'x'
});

$("#crewFaceFourteen").click(function(){
    $("#cardFourteen").flip(true);
});

$("#infoContactBackFourteen").click(function(){
    $("#cardFourteen").flip(false);
});


$("#cardFifteen").flip({
    trigger: 'manual',
    back: '#crewFaceFifteenInfo',
    axis: 'x'
});

$("#crewFaceFifteen").click(function(){
    $("#cardFifteen").flip(true);
});

$("#infoContactBackFifteen").click(function(){
    $("#cardFifteen").flip(false);
});





// Mobile check
!function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/IEMobile/i,h=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,i=/BlackBerry/i,j=/BB10/i,k=/Opera Mini/i,l=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,m=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),n=function(a,b){return a.test(b)},o=function(a){var o=a||navigator.userAgent,p=o.split("[FBAN");return"undefined"!=typeof p[1]&&(o=p[0]),this.apple={phone:n(b,o),ipod:n(c,o),tablet:!n(b,o)&&n(d,o),device:n(b,o)||n(c,o)||n(d,o)},this.android={phone:n(e,o),tablet:!n(e,o)&&n(f,o),device:n(e,o)||n(f,o)},this.windows={phone:n(g,o),tablet:n(h,o),device:n(g,o)||n(h,o)},this.other={blackberry:n(i,o),blackberry10:n(j,o),opera:n(k,o),firefox:n(l,o),device:n(i,o)||n(j,o)||n(k,o)||n(l,o)},this.seven_inch=n(m,o),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},p=function(){var a=new o;return a.Class=o,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=o:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=p():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=p()):a.isMobile=p()}(this);


// DOM ready function
$(function() {

    // All anchor links smooth scroll
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                var extra = 90;
                if(!target.hasClass('s'))
                    extra = extra + 250;

                console.log(extra);
                $('html, body').animate({
                    scrollTop: target.offset().top - extra
                }, 1000);
                return false;
            }
        }
    });

    // Fly-in all sections
    var $sections = $('.fly-in');
    var $window = $(window);

    $(window).scroll(function() {
        // Fly-in sections
        $sections.each(function() {
            var $section = $(this);
            var diff = $window.scrollTop() + $window.height();

            if(diff - 300 > $section.offset().top || isMobile.any)
                $section.addClass('s');
        });

    });


    // Force scroll function on the load event
    $(window).scroll();

    // Parallax
    if(!isMobile.any) {
        var s = skrollr.init();
    }


});

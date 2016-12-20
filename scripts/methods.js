// Logo SVG Fade OnClick
$(document).ready(function() {

    $("#hexagon").click(function() {
        if ($("#hexagon img.outline-slide.one").hasClass("slide-out-left")) {
            removeSlideClasses("out");
        } else {
            $("#hexagon img.top").toggleClass("transparent");
            $("#hexagon img.bottom").toggleClass("transparent");
        }
    });

    $("#nav_onclick .nav-item").click(function() {

        if ($("#hexagon img.top").hasClass("transparent") && !$("#hexagon img.outline-slide.one").hasClass("slide-out-left") ) {
            $("#hexagon img.top").toggleClass("transparent");
            $("#hexagon img.bottom").toggleClass("transparent");
        } 

        slideInOut("#hexagon img.outline-slide.one", "#hexagon img.outline-slide.two");
        
    });
});

function toggleTransparency() {
    $("#hexagon img.outline-slide.one").toggleClass("transparent");
    $("#hexagon img.outline-slide.two").toggleClass("transparent");
    $("#hexagon img.top").toggleClass("transparent");
    $("#hexagon img.bottom").toggleClass("transparent");
}

function removeSlideClasses(direction) {

    $("#hexagon img.outline-slide.one").removeClass("slide-out-left");
    $("#hexagon img.outline-slide.two").removeClass("slide-out-right");
    $("#hexagon a").addClass("not-active");
    $("#hexagon img.outline-slide.one").one('otransitionend oTransitionEnd msTransitionEnd transitionend',
        function(e) {
            toggleTransparency();
        });
}

function slideInOut(hex_one, hex_two) {
    if (!$(hex_one).hasClass("slide-out-left")) {

        $(hex_one).addClass("slide-out-left");
        $(hex_two).addClass("slide-out-right");
        $("#hexagon a").removeClass("not-active");
        toggleTransparency();

    } else {
        removeSlideClasses("out");
    }
}
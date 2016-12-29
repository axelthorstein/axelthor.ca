
// Logo SVG Fade OnClick
$(document).ready(function() {

    $("#hexagon").click(function() {
        if ($("#hexagon img.outline-slide.1").hasClass("slide-out-left")) {
            removeSlideClasses(0, 1);
        } else if ($("#hexagon img.outline-slide.3").hasClass("slide-out-left")) {
            removeSlideClasses(2, 3);
        } else {
            $("#hexagon img.top").toggleClass("transparent");
            $("#hexagon img.bottom").toggleClass("transparent");
        };
    });

    $("#nav_onclick .development").click(function() {

        if ($("#hexagon img.outline-slide.3").hasClass("slide-out-left")) {
            removeSlideClasses(2, 3);
        } ;
        slideInOut("#hexagon img.outline-slide.0", "#hexagon img.outline-slide.1", 0, 1);
       
    });

    $("#nav_onclick .creative").click(function() {

        if ($("#hexagon img.outline-slide.1").hasClass("slide-out-left")) {
            removeSlideClasses(0, 1);
        };
        slideInOut("#hexagon img.outline-slide.2", "#hexagon img.outline-slide.3", 2, 3);
        
    });
});

function checkTransparency() {
    if ($("#hexagon img.top").hasClass("transparent")) {
        $("#hexagon img.top").toggleClass("transparent");
        $("#hexagon img.bottom").toggleClass("transparent");
    };
}

function toggleTransparency(num1, num2) {
    $("#hexagon img.outline-slide." + num1).toggleClass("transparent");
    $("#hexagon img.outline-slide." + num2).toggleClass("transparent");

    // if (($("#hexagon img.bottom").hasClass("transparent") && !$("#hexagon img.outline-slide." + num1).hasClass("slide-out-left")) {
        $("#hexagon img.top").toggleClass("transparent");
        $("#hexagon img.bottom").toggleClass("transparent");
    // };
}

function removeSlideClasses(num1, num2) {

    $("#hexagon img.outline-slide." + num2).removeClass("slide-out-left");
    $("#hexagon img.outline-slide." + num1).removeClass("slide-out-right");
    $("#hexagon a." + num1).addClass("not-active");
    $("#hexagon a." + num2).addClass("not-active");
    $("#hexagon img.outline-slide." + num1).one('otransitionend oTransitionend msTransitionend transitionend',
        function(e) {
            toggleTransparency(num1, num2);
        });
}

function slideInOut(hex_0, hex_1, num1, num2) {
    if (!$(hex_1).hasClass("slide-out-left")) {

        $(hex_1).addClass("slide-out-left");
        $(hex_0).addClass("slide-out-right");
        $("#hexagon a." + num1).removeClass("not-active");
        $("#hexagon a." + num2).removeClass("not-active");
        toggleTransparency(num1, num2);

    } else {
        removeSlideClasses(num1, num2);
    }
}
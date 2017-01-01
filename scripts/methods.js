// Logo SVG Fade OnClick
$(document).ready(function() {

    $("#hexagon").click(function() {
        if ($("#hexagon img.outline-slide.1").hasClass("slide-out-left")) {
            removeSlideClasses(0, 1, 5);
            $("#home-bio h2").toggleClass("transparent");
            $("#logo-title img").toggleClass("transparent");
        } else if ($("#hexagon img.outline-slide.3").hasClass("slide-out-left")) {
            removeSlideClasses(2, 3, 4);
            $("#home-bio h2").toggleClass("transparent");
            $("#logo-title img").toggleClass("transparent");
        } else {
            $("#hexagon img.top").toggleClass("transparent");
            $("#hexagon img.bottom").toggleClass("transparent");
        };
    });

    $("#nav_onclick .development").click(function() {

        checkTransparency();

        if ($("#hexagon img.outline-slide.3").hasClass("slide-out-left")) {
            removeSlideClasses(2, 3, 4);
            $("#logo-title img").toggleClass("transparent");
            $("#home-bio h2").toggleClass("transparent");
        };
        slideInOut("#hexagon img.outline-slide.0", "#hexagon img.outline-slide.1", "#hexagon img.outline-slide.5", 0, 1, 5);
        if ($("#hexagon img.outline-slide.1").hasClass("slide-out-left") || $("#hexagon img.top").hasClass("transparent")) {
            $("#home-bio h2").toggleClass("transparent");
            $("#logo-title img").toggleClass("transparent");
        };
    });

    $("#nav_onclick .creative").click(function() {

        checkTransparency();

        if ($("#hexagon img.outline-slide.1").hasClass("slide-out-left")) {
            removeSlideClasses(0, 1, 5);
            $("#logo-title img").toggleClass("transparent");
            $("#home-bio h2").toggleClass("transparent");
        };
        slideInOut("#hexagon img.outline-slide.2", "#hexagon img.outline-slide.3", "#hexagon img.outline-slide.4", 2, 3, 4);
        if ($("#hexagon img.outline-slide.3").hasClass("slide-out-left") || $("#hexagon img.top").hasClass("transparent")) {
            $("#home-bio h2").toggleClass("transparent");
            $("#logo-title img").toggleClass("transparent");
        };
    });
});

function checkTransparency() {
    if (!$("#hexagon img.outline-slide.1").hasClass("slide-out-left") && $("#hexagon img.top").hasClass("transparent") && !$("#hexagon img.outline-slide.3").hasClass("slide-out-left")) {
        $("#hexagon img.top").toggleClass("transparent");
        $("#hexagon img.bottom").toggleClass("transparent");
    };
}

function toggleTransparency(num1, num2, num3) {
    $("#hexagon img.outline-slide." + num1).toggleClass("transparent");
    $("#hexagon img.outline-slide." + num2).toggleClass("transparent");
    $("#hexagon img.outline-slide." + num3).toggleClass("transparent");

    $("#hexagon img.top").toggleClass("transparent");
    $("#hexagon img.bottom").toggleClass("transparent");
}

function removeSlideClasses(num1, num2, num3) {

    $("#hexagon img.outline-slide." + num3).removeClass("slide-out-up");
    $("#hexagon img.outline-slide." + num2).removeClass("slide-out-left");
    $("#hexagon img.outline-slide." + num1).removeClass("slide-out-right");
    $("#hexagon a." + num1).addClass("not-active");
    $("#hexagon a." + num2).addClass("not-active");
    $("#hexagon a." + num3).addClass("not-active");
    $("#hexagon img.outline-slide." + num1).one('otransitionend oTransitionend msTransitionend transitionend',
        function(e) {
            toggleTransparency(num1, num2, num3);
        });
}

function slideInOut(hex_0, hex_1, hex_2, num1, num2, num3) {
    if (!$(hex_1).hasClass("slide-out-left")) {

        $(hex_1).addClass("slide-out-left");
        $(hex_0).addClass("slide-out-right");
        $(hex_2).addClass("slide-out-up");
        $("#hexagon a." + num1).removeClass("not-active");
        $("#hexagon a." + num2).removeClass("not-active");
        $("#hexagon a." + num3).removeClass("not-active");
        toggleTransparency(num1, num2, num3);

    } else {
        removeSlideClasses(num1, num2, num3);
    }
}
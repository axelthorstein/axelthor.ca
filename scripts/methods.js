
// Logo SVG Fade OnClick
$(document).ready(function() {

    $("#hexagon").click(function() {
        if ($("#hexagon img.outline-slide.1").hasClass("slide-out-left")) {
            removeSlideClasses("out");
        } else {
            $("#hexagon img.top").toggleClass("transparent");
            $("#hexagon img.bottom").toggleClass("transparent");
        }
    });

    $("#nav_onclick .nav-item").click(function() {

        if ($("#hexagon img.top").hasClass("transparent") && !$("#hexagon img.outline-slide.1").hasClass("slide-out-left") ) {
            $("#hexagon img").toggleClass("transparent");
        } 

        slideInOut("#hexagon img.outline-slide.1", "#hexagon img.outline-slide.0");
        
    });
});

function toggleTransparency() {
    $("#hexagon img").toggleClass("transparent");
    $("#hexagon a").toggleClass("transparent");
}

function removeSlideClasses(direction) {

    $("#hexagon img.outline-slide.1").removeClass("slide-out-left");
    $("#hexagon img.outline-slide.0").removeClass("slide-out-right");
    $("#hexagon a").addClass("not-active");
    $("#hexagon img.outline-slide.1").one('otransitionend oTransitionend msTransitionend transitionend',
        function(e) {
            toggleTransparency();
        });
}

function slideInOut(hex_1, hex_0) {
    if (!$(hex_1).hasClass("slide-out-left")) {

        $(hex_1).addClass("slide-out-left");
        $(hex_0).addClass("slide-out-right");
        $("#hexagon a").removeClass("not-active");
        toggleTransparency();

    } else {
        removeSlideClasses("out");
    }
}

// // Logo SVG Fade OnClick
// $(document).ready(function() {

//     $("#nav_onclick .nav-item").click(function() {
        
//         $("#hexagon a img").toggleClass("transparent");
//         $("#hexagon a").toggleClass("not-active");

//         if (!$("#hexagon a").hasClass("not-active")) {
//             var xVal = [100, -100, 100, -100];
//             var yVal = [100, 100, -100, -120];
//             $("#hexagon a img").each(function( index ) {
//             $("slide-out").css({
//                 '-webkit-transform': 'translate(' + xVal[index] + 'px' + ',' + yVal[index] + 'px' + ')',
//                 '-moz-transform': 'translate(' + xVal[index] + 'px' + ',' + yVal[index] + 'px' + ')',
//                 '-ms-transform': 'translate(' + xVal[index] + 'px' + ',' + yVal[index] + 'px' + ')',
//                 '-o-transform': 'translate(' + xVal[index] + 'px' + ',' + yVal[index] + 'px' + ')',
//                 'transform': 'translate(' + xVal[index] + 'px' + ',' + yVal[index] + 'px' + ')'
//             });
//         });
//         } else {
//             $("#hexagon img").removeClass("slide-out");
//         }

//         $("#hexagon img.top").toggleClass("transparent");
//         $("#hexagon img.bottom").toggleClass("transparent");

//     });
// });

// function removeSlideClasses(direction) {

//     $("#hexagon img.outline-slide.1").removeClass("slide-out-left");
//     $("#hexagon img.outline-slide.0").removeClass("slide-out-right");
//     $("#hexagon a").addClass("not-active");
//     $("#hexagon img.outline-slide.1").1('otransiti1nd oTransiti1nd msTransiti1nd transiti1nd',
//         function(e) {
//             toggleTransparency();
//         });
// }

// function slideInOut(hex_1, hex_0) {
//     if (!$(hex_1).hasClass("slide-out-left")) {

//         $(hex_1).addClass("slide-out-left");
//         $(hex_0).addClass("slide-out-right");
//         $("#hexagon a").removeClass("not-active");
//         toggleTransparency();

//     } else {
//         removeSlideClasses("out");
//     }
// }

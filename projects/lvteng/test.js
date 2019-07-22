$(document).ready(function() {
    var honor_timmer = setInterval(nextShow, 1000);
    
    function nextShow() {
        var carouselDiv = document.getElementById("carousel_div_inner");
        var originLeft = carouselDiv.style.left;
        if (parseInt(originLeft) < -1500) {
            var honor_newLeft = 0;
            carouselDiv.style.left = 0 + "px";
        }
        else {
            var honor_newLeft = parseInt(originLeft) - 200;
            carouselDiv.style.left = honor_newLeft + "px";
        }
    }
    
    $("#carousel_div_inner").mouseover(function() {
        clearInterval(honor_timmer);
    });

    $("#carousel_div_inner").mouseleave(function () {
        honor_timmer = setInterval(nextShow, 1000);
    });
});



$(document).ready(function() {
    var timmer = setInterval(nextShow, 1000);
    var time = 1;
    function preShow() {
        var carouselDiv = document.getElementById("carousel_div_inner");
        var originLeft = carouselDiv.style.left;
        if (parseInt(originLeft) >= 0) {
            
        }
        else {
            var newLeft = parseInt(originLeft) + 200;
            carouselDiv.style.left = newLeft + "px";
            console.log(carouselDiv.style.left);
        }
        
    }
    
    function nextShow() {
        var carouselDiv = document.getElementById("carousel_div_inner");
        var originLeft = carouselDiv.style.left;
        if (parseInt(originLeft) < -1500) {
            
        }
        else {
            var newLeft = parseInt(originLeft) - 200;
            carouselDiv.style.left = newLeft + "px";
            console.log(carouselDiv.style.left);
            
        }
    }
    
    $("#carousel_div_inner").mouseover(function() {
        clearInterval(timmer);
        time -= 1;
        console.log(time);
    });
    
    $("#pre_click").click(function() {
        clearInterval(timmer);
        time-=1;
        preShow();
        console.log(time);
    });
    
    $("#next_click").click(function () {
        clearInterval(timmer);
        setInterval(nextShow, 1000);
        console.log(time);
    });
    
});



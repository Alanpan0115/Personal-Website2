$(document).ready(function() {
    $("#home").click(function() {
        $("html, body").animate({
            scrollTop: $("#S0").offset().top
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    $("#intro").click(function() {
        $("html, body").animate({
            scrollTop: $("#S1").offset().top
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    $("#exp").click(function() {
        $("html, body").animate({
            scrollTop: $("#S2").offset().top
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    $("#workexp").click(function() {
        $("html, body").animate({
            scrollTop: $("#S22").offset().top
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    /*------------------------技能-----------------------------*/
    $("#skills").click(function() {
        $("html, body").animate({
            scrollTop: $("#S4").offset().top
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    /*------------------------證照-----------------------------*/
    $("#certificate").click(function() {
        $("html, body").animate({
            scrollTop: $("#S4-1").offset().top
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    /*------------------------作品集-----------------------------*/
    $("#projects").click(function() {
        $("html, body").animate({
            scrollTop: $("#S3").offset().top
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });


    /*------------------------其他-----------------------------*/
    $("#target").click(function() {
        $("html, body").animate({
            scrollTop: $("#S5").offset().top
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    $("#records").click(function() {
        $("html, body").animate({
            scrollTop: $("#S6").offset().top
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

});
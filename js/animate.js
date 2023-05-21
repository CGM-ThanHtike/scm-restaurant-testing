$(document).ready(function () {
    $('.move-top').waypoint(function () {
        $('.move-top').css({
            animation: "animate-box 0.5s ease-in-out",
            opacity: "1",
        });
    }, {
        offset: '75%'
    });

    $('.slide-up').waypoint(function () {
        $('.slide-up').css({
            animation: "slide-up 0.5s ease-in-out",
            opacity: "1",
        });
    }, {
        offset: '75%'
    });

    $('.move-up').waypoint(function () {
        $('.move-up').css({
            animation: "slide-up 0.5s ease-in-out",
            opacity: "1",
        });
    }, {
        offset: '75%'
    });

    $('.come-from-left').waypoint(function () {
        $('.come-from-left').css({
            animation: "animate-from-left 0.75s ease-in-out",
            opacity: "1",
        });
    }, {
        offset: '75%'
    });

    $('.come-from-right').waypoint(function () {
        $('.come-from-right').css({
            animation: "animate-from-right 0.75s ease-in-out",
            opacity: "1",
        });
    }, {
        offset: '75%'
    });

    $('.slide-from-left').waypoint(function () {
        $('.slide-from-left').css({
            animation: "animate-from-left 0.75s ease-in-out",
            opacity: "1",
        });
    }, {
        offset: '75%'
    });

    $('.slide-from-right').waypoint(function () {
        $('.slide-from-right').css({
            animation: "animate-from-right 0.75s ease-in-out",
            opacity: "1",
        });
    }, {
        offset: '75%'
    });

    $('.slide-in').waypoint(function () {
        $('.slide-in').css({
            animation: "animate-from-left 0.75s ease-in-out",
            opacity: "1",
        });
    }, {
        offset: '75%'
    });

})
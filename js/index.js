$(function () {
    function toggleTool() {
        var top = $(".recommend").offset().top;
        if ($(document).scrollTop() >= top) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }
    toggleTool();
    var flag = true;
    $(window).scroll(function () {
        toggleTool();
        if (flag) {
            $(".floor .w").each(function (i, ele) {
                if ($(document).scrollTop() >= $(this).offset().top) {
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                }
            });
        }
    });
    $(".fixedtool li").click(function () {
        flag = false;
        var index = $(this).index();
        var current = $(".floor .w").eq(index).offset().top;
        console.log(current);
        $("body,html").stop().animate({
            scrollTop: current
        }, function () {
            flag = true;
        });
        $(this).addClass("current").siblings().removeClass();
    });
});
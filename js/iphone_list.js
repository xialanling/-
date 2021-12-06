window.onload = function () {
    $(".tab_right_bd li ").mousemove(function () {
        $(this).children("a").addClass("currents").parent().siblings().children("a").removeClass("currents");
        var index = $(this).index();
        console.log(index);
        $('.tab_right_bd_items').eq(index).show().siblings(".tab_right_bd_items").hide();
    });
};
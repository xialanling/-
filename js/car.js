$(function () {
    $(".checkall").change(function () {
        // console.log($(this).prop("checked"));
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"))
        if ($(this).prop("checked")) {
            $(".cart-item").addClass("check-cart-item");
        } else {
            $(".cart-item").removeClass("check-cart-item");
        }
    });
    // 2. 如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选。
    $(".j-checkbox").change(function () {
        // if(被选中的小的复选框的个数 === 3) {
        //     就要选中全选按钮
        // } else {
        //     不要选中全选按钮
        // }
        // console.log($(".j-checkbox:checked").length);
        // $(".j-checkbox").length 这个是所有的小复选框的个数
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    });
    $(".increment").click(function () {
        var num = $(this).siblings(".itxt").val();
        num++;
        $(this).siblings(".itxt").val(num);
        html = $(this).parent().parent().siblings(".p-price").html();
        html = html.substr(1);
        $(this).parent().parent().siblings(".p-sum").html("￥" + (html * num).toFixed(2));
        getsum();
    })
    $(".decrement").click(function () {
        var num = $(this).siblings(".itxt").val();
        if (num == 1) {
            return false;
        }
        num--;
        $(this).siblings(".itxt").val(num);
        html = $(this).parent().parent().siblings(".p-price").html();
        html = html.substr(1);
        $(this).parent().parent().siblings(".p-sum").html("￥" + (html * num).toFixed(2));
        getsum();
    })
    $(".itxt").change(function () {
        var num = $(this).val();
        $(this).siblings(".itxt").val(num);
        html = $(this).parent().parent().siblings(".p-price").html();
        html = html.substr(1);
        $(this).parent().parent().siblings(".p-sum").html("￥" + (html * num).toFixed(2));
        getsum();
    })
    getsum()
    function getsum() {
        var count = 0;
        var money = 0;
        $(".itxt").each(function (i, ele) {
            count += parseInt($(ele).val());
        });
        $(".amount-sum em").text(count);
        $(".p-sum").each(function (i, ele) {
            money += parseFloat($(ele).text().substr(1));
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
    }
    $(".p-action").click(function () {
        $(this).parents(".cart-item").remove();
        getsum();
    });
    $(".remove-batch").click(function () {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getsum();
    });
    $(".clear-all").click(function () {
        $(".cart-item").remove();
        getsum();
    });

})
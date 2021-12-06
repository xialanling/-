window.onload = function () {
    var erweima = document.querySelector(".erweima");
    var phone = document.querySelector('.phone');
    erweima.addEventListener("mouseenter", function () {
        phone.style.display = "block";

    })
    erweima.addEventListener("mouseleave", function () {
        phone.style.display = "none";
    })
};
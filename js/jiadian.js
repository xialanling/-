window.addEventListener('load', function () {
    var preview_img = this.document.querySelector('.preview_img');
    var mask = this.document.querySelector('.mask');
    var big = this.document.querySelector('.big');
    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    });
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    });
    preview_img.addEventListener('mousemove', move);
    function move(e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        var maxLeft = preview_img.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= 100) {
            maskX = maxLeft + 'px';
        }
        if (maskY <= 0) {
            maskY = 0;
        }
        else if (maskY >= 100) {
            maskY = maxLeft;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        var bigImg = document.querySelector('.bigImg');
        bigImgMax = bigImg.offsetWidth - big.offsetWidth;
        var bigX = maskX * bigImgMax / maxLeft;
        var bigY = maskY * bigImgMax / maxLeft;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';
    }
});
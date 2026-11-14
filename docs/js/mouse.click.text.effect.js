// 鼠标点击文字飘出特效（原生JS实现，替代jQuery版本，避免引入外部jQuery库）
(function () {
    var words = ['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善'];
    var index = 0;
    var MAX_DY = 180;    // 上浮最大距离(px)
    var DURATION = 1500; // 动画时长(ms)

    // 随机颜色
    function randomColor() {
        return 'rgb(' + Math.floor(Math.random() * 256) + ','
            + Math.floor(Math.random() * 256) + ','
            + Math.floor(Math.random() * 256) + ')';
    }

    document.addEventListener('click', function (e) {
        var span = document.createElement('span');
        span.textContent = words[index % words.length];
        index++;
        var style = span.style;
        style.zIndex = '9999999';
        style.position = 'absolute';
        style.top = (e.pageY - 20) + 'px';
        style.left = e.pageX + 'px';
        style.fontWeight = 'bold';
        style.color = randomColor();
        style.userSelect = 'none';
        style.cursor = 'default';
        style.opacity = '1';
        style.transition = 'transform ' + DURATION + 'ms ease-out, opacity ' + DURATION + 'ms ease-out';
        document.body.appendChild(span);

        // 下一帧触发CSS过渡：上浮+淡出，结束后移除节点
        requestAnimationFrame(function () {
            span.style.transform = 'translateY(-' + MAX_DY + 'px)';
            span.style.opacity = '0';
        });
        setTimeout(function () {
            span.remove();
        }, DURATION);
    });
})();

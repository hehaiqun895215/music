var btn = !function () {
    let track = document.querySelector('.slick-track');
    let slide = document.querySelector('.slick-slide');
    let prev = document.getElementsByClassName('.slick-prev');
    let next = document.getElementsByClassName('.slick-next');
    let btns = document.querySelector('.slick-active');
    function nextFn() {
        // 判断索引，改变left值的函数
        index = index == 7 ? 0 : ++index;
        // 定位元素left才会生效
        track.style.left = -index * 218 + 'px';
    }
    // 点击prev next
    next.onclick = function () {
        console.log(1);
        // 点击next立即展示下一张
        nextFn();
    }
    prev.onclick = function () {
        index = index == 0 ? 7 : --index;
        swipe.style.left = -index * 218 + "px";

    }
    // //对应顺序按钮
    // for (let j = 0; j < btns.length; j++) {
    //     // 每一个btn绑定点击事件
    //     btns[j].onclick = function () {
    //         // getAttribute获取为标签自定义html属性的值
    //         let i = this.getAttribute("data-i");
    //         track.style.left = - i * 218 + "px";
    //     }
    // }
}
export { btn };
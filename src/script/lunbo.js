var lunb = (function () {
    let banner = document.querySelector('.banner');
    let img = document.getElementsByClassName("slide");
    let timer = 0;
    let index = 0;
    function autoplay() {//设置自动播放函数
        index++;
        if (index >= img.length) {
            index = 0;
        }
        for (let i = 0; i < img.length; i++) {
            img[i].style.display = 'none';
        }
        img[index].style.display = 'block';
    }
    timer = setInterval(autoplay, 2000);// 定义定时器并调用自动播放函数
    banner.onmouseover = () => {
        clearInterval(timer);//鼠标悬停图片静止，移除时间函数
    };
    banner.onmouseout = () => {
        timer = setInterval(autoplay, 2000);//鼠标离开后重启时间函数，图片移动
    };

})()

export { lunb }
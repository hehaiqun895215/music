(function () {

    let prev = document.getElementsByClassName('. slick-prev');//左键
    let next = document.getElementsByClassName('. slick-next');//右键
    let dots = document.getElementsByClassName('. slick-dots');//远点
    let track = document.getElementsByClassName('. "slick-track');
    let slide = document.getElementsByClassName('.slick-track .slick-slide ');
    let index = 0;
    let previndex = index;

    //左边点击
    prev.onclick = () => {
        index--;
        if (index < 0) {
        
          
        }
       
    }
    //右边点击
    next.onclick = () => {
        index++;
        if (index >track.length) {
            index = 0;
         
        }
      
    }
   

})();


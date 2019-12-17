class Detail {
    constructor() {
this.centerBox= document.querySelector('.centerBox_detail')
    };
    init() {
        let _this = this;
        ajax({
            url: 'http://127.0.0.1:8080/1911/music/php/details.php',
            data: {
                id: id
            },
            dataType: 'json'
        }).then(function (data) {
            //获取对应的数据，渲染。
            _this.render(data)
        });
    }
    //获取接口进行渲染。
    render(data) {
        //遍历render
        let strhtml = '<div>';
        for (let value of data) {
            strhtml += `  
       <div class="detail_title">
           <a href="/" target="_blank">首页&nbsp;&gt;&nbsp;</a>
           <a href="#" target="_blank">专辑&nbsp;&gt;&nbsp;</a>
           <span>${value.title}</span>
       </div>
       <div class="goodsBox_Pic">
       <div class="goodsPic">
           <img class="detaiBigimg" src="${value.url}" alt="#">
       </div>
      
       <div class="operateBox ">
           <p class="like">
               <span class="J_like" data-id="4478"></span>喜欢</p>
           <p class="share">
               <span id="bdshare" class="bdshare_b">分享

               </span>
           </p>
       </div>
      
       <div class="picSlide">
           <div class="slick ">
               <div class="slick-list ">
                   <div class="slick-track">
                       <div class="slick-pics" index="0">
                           <img src="${value.url}">
                       </div>
                   </div>
               </div>
           </div>
           <span class="pic_arr pic_pre"></span>
           <span class="pic_arr pic_next"></span>
       </div>
   </div>
   <div class="goodsBox_info">
   <p class="goodsTitle" data-id="4478">${value.title}]</p>
   <div class="price">
       <h4>商城价格</h4>
       <p>￥
           <span>${value.price}</span>
           <span class="pre">¥${value.price2}</span>
       </p>
   </div>
   <div class="selectBox">
       <div class="count">
           <h4>重量</h4>
           <p>
               <i class="c_weight">${value.weight}</i>kg</p>
       </div>
       <div class="count">
           <h4>数量</h4>
           <a href="javascript:void(0)" class="c_sub">-</a>
           <input type="text" value="${value.num}">
           <a href="javascript:void(0)" class="c_add">+</a>
       </div>
   </div>
   <div class="divbtns">
       <div class="btnBox">
           <button class="addToCart"></button>
           <button class="buyNow"></button>
       </div>
       <div class="divzpbz"></div>
   </div>
</div>
       `;
        }
        strhtml+='</div>';
        _this.centerBox.innerHTML=strhtml;
    }
};
new Detail().init();
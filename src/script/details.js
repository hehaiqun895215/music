import { ajax } from './ajaxpromise.js';
import { jstool } from './cookie.js';

class Detail {
    constructor() {
        this.centerBox = document.querySelector('.centerBox_detail');
        this.id = location.search.substring(1).split('=')[1];

    };

    init() {

        let _this = this;

        ajax({
            url: 'http://localhost:8080/1911/music/php/details.php',
            data: {
                picid: this.id
            },
            dataType: 'json'

        }).then(function (data) {
            //获取对应的数据，渲染。
            _this.render(data);

        });


    }
    //获取接口进行渲染。
    render(data) {
        //遍历render       
        let _this = this;
        let strhtml = ' <div>';
        for (var i = 0; i < 1; i++) {
            strhtml += ` 
                                    <div class="detail_title">
                                        <a href="" target="_blank">首页&nbsp;&gt;&nbsp;</a>
                                        <a href="#" target="_blank">专辑&nbsp;&gt;&nbsp;</a>
                                        <span>${data.title}</span>
                                    </div>
                                    <div class="goodsBox_Pic">
                                    <div class="goodsPic">
                                        <img class="detaiBigimg" src="${data.url}" alt="#">
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
                                                        <img src="${data.url}">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="pic_arr pic_pre"></span>
                                        <span class="pic_arr pic_next"></span>
                                    </div>
                                </div>
                                <div class="goodsBox_info">
                                <p class="goodsTitle" data-id="4478">${data.title}]</p>
                                <div class="price">
                                    <h4>商城价格</h4>
                                    <p>￥
                                        <span>${data.price}</span>
                                        <span class="pre">¥${data.price2}</span>
                                    </p>
                                </div>
                                <div class="selectBox">
                                    <div class="count">
                                        <h4>重量</h4>
                                        <p>
                                            <i class="c_weight">${data.weight}</i>kg</p>
                                    </div>
                                    <div class="count">
                                        <h4>数量</h4>
                                        <a href="javascript:void(0)" class="c_sub">-</a>
                                        <input type="text" value="${data.num}" class="c_num">
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
        strhtml += '</div>';
        _this.centerBox.innerHTML = strhtml;

        //购物车效果
        this.goodscart();
    };
    //购物车操作

    goodscart() {
        let sub = document.querySelector('.c_sub');
        let add=document.querySelector('.c_add');
        let num=document.querySelector('.c_num');
        let addToCart = document.querySelector('.addToCart');
        let buyNow = document.querySelector('.buyNow');
        let idarr = [];//商品编号   
        let numarr = [];//商品数量
        // function cookietoarray() {
            console.log(sub,add,num)
        cookietoarray => {
            if (jstool.getcookie('cookieid') && jstool.getcookie('cookienum')) {
                idarr = jstool.getcookie('cookieid').split(',');
                numarr = jstool.getcookie('cookienum').split(',');
            }

        }
        //加减购物车
        sub.onclick=function(){
            if(num.value<=1){
                num.value=1;
            }else{
                num.value--
            }
        }

        add.onclick=function(){
            if(num.value>=99){
                num.value=99;
            }else{
                num.value++
            }
        }

        //点击加购物车
        addToCart.onclick = function () {
            console.log(1);
            let arr=[];
            console.log(JSON.stringify({id:11,name:'fsds'}))
            //获取当前点击的按钮所对应的图片上面的id
            if (idarr.indexOf(this.id ) !== -1) {//存在,改变数量
                let nums = parseInt([idarr.indexOf(this.id )]);//原来的数量
                
                arr=push[{id:this.id, num:result}];
                numarr[idarr.indexOf(this.id )] = result;
                jstool.addcookie('cookienum', numarr.toString(), 10);

            } else {     //不存在        
                //将图片的编号push到idarr
                // idarr.push(imgid);
                jstool.addcookie('cookieid', idarr.toString(), 10);
                //将商品的第一次购买的数量存入numarr
                numarr.push(num.value);
                jstool.addcookie('cookienum', numarr.toString(), 10);
            };  
            console.log(2)       
        }      
    }
};
export { Detail }

import {ajax} from './ajaxpromise.js';
    class Render {//渲染
        constructor() {
        this. goodslist = document.querySelector('.goodsList_new');
        }
        init() {//接口
            let _this=this;//改变指向
            ajax({
                url: 'http://localhost:8080/1911/music/php/indexrender.php',
                dataType: 'json'
            }).then(function (data) {
                //遍历render
                let strhtml='<ul>';
                for(let value of data){
                    strhtml+=`
                    <li>
                    <a href="details.html?is=${value.id}" target="_blank">
                        <div class="new_goodsPic">
                            <img src="${value.url}" alt="${value.title}">
                        </div>
                        <div class="new_goodsInfo">
                            <p class="goodsName">${value.title}</p>
                            <p class="goodsPrice">¥${value.price}</p>
                            <p class="like">
                                <span class="J_like" data-id="4478"></span>
                                <i class="like_num" data-num="4">${value.num}</i>
                            </p>
                        </div>
                    </a>
                </li>
                    `;
                }
                strhtml+='</ul>';
                _this.goodslist.innerHTML=strhtml;
            });
        }
    }
    export{Render}
    
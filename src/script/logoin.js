import { ajax } from './ajaxpromise.js';
import { jstool } from './cookie.js';
// import { sha1 } from './sha1.js';

class Lg {
    constructor() { };
    init() {
        const aval = document.querySelectorAll('input');


        //判断cookie中是否存在cookie，存储取出，进行赋值
        // if (jstool.getcookie('username') && jstool.getcookie('password')) {
        //     phone = jstool.getcookie('username');
        //     password = jstool.getcookie('password');
        //     aval[2].checked = true;
        // }

        aval[3].onclick = () => {
            let phone = aval[0].value;
            let pass = aval[1].value;
            //如果复选框已经勾选，记住(将用户名和密码存储到cookie)
            // if (aval[2].checked) {//勾选
            //     jstool.addcookie('username', phone, 30);
            //     jstool.addcookie('password', pass, 30);
            // } else {
            //     jstool.delcookie('username');
            //     jstool.delcookie('password');
            // };
            ajax({
                url: 'http://localhost:8080/1911/music/php/logoin.php',
                type:'post',
                // dataType: 'json',
                data: {
                    phone: phone,
                    password: pass
                }
            }).then(function (res) {
                console.log(res)
                // location.href = "http://localhost:8080/1911/music/src/html/"
            });

        }

    };
}

export { Lg };
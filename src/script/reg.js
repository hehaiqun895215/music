import { ajax } from './ajaxpromise.js';
class Register {
    constructor() {
        // let aval = document.querySelectorAll('#login-form input');
    };
    init() {
        let aval = document.querySelectorAll('input');
        
        //手机号验证
        aval[0].onkeyup = function () {
            let phRge = /^1[3-9]\d{9}$/;
            if (phRge.test(aval[0].value)) {
                phone.innerHTML = '通过验证';
                phone.style.color = "green";
            } else {
                phone.innerHTML = '未通过验证';
                phone.style.color = "red";
            }
        }
        //密码验证
        aval[1].onkeyup = function () {
            let passRge = /^[a-z0-9]{6,20}$/;
            if (passRge.test(aval[1].value)) {
                aval[1].innerHTML = '通过验证';
                aval[1].style.color = "green";
            } else {
                aval[1].innerHTML = '未通过验证';
                aval[1].style.color = "red";
            }
        }
        //提交数据

        aval[4].onclick = function () {
            if(aval[1].value=="" ||  aval[0].value){
                alert('请输入正确格式');
            }
            //是否选择 选择框
            // if (aval[5].checked) {
            //     alert('http://localhost:8080/music/src/html/');
            // } else {
            //     location.reload;
            // }
            ajax({
                url: 'http://localhost:8080/1911/music/php/reg.php',
                // dataType: 'json',
                data: {
                    phone: aval[0].value,
                    password: aval[1].value
                }
            })
        }
    }
}

export { Register }


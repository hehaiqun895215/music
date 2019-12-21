import { ajax } from './ajaxpromise.js';
class Register {
    constructor() {
        // let aval = document.querySelectorAll('#login-form input');
        // let phone = document.querySelector('#phone');
        // let password = document.querySelector('#password');
    };
    init() {
        const aval = document.querySelectorAll('input');
        let phoneflag = true;
        let passwordflag = true;
        //提交数据

        aval[4].onclick = () => {
            let ph = aval[0].value;
            let pass = aval[1].value;
            //手机号验证
           console.log(ph);
            aval[0].onkeyup = function () {
                let phRge = /^1[3-9]\d{9}$/;
                if (phRge.test(aval[0].value) && aval[0].value !== "") {
                    aval[0].innerHTML = '√';
                    aval[0].style.color = "green";
                    phoneflag = true;
                } else {
                    aval[0].innerHTML = '未通过验证';
                    aval[0].style.color = "red";
                    phoneflag = false;
                }
            }
            //密码验证
            aval[1].onkeyup = function () {
                let passRge = /^[a-z0-9]{6,20}$/;
                if (passRge.test(aval[1].value) && aval[1].value !== "") {
                    aval[1].innerHTML = '√';
                    aval[1].style.color = "green";
                    passwordflag = true;
                } else {
                    aval[1].innerHTML = '未通过验证';
                    aval[1].style.color = "red";
                    passwordflag = false;
                }
            }

            if (aval[0].value !== "") {
                aval[0].innerHTML = '手机号码不能为空';
                aval[0].style.color = "red";
                phoneflag = false;
            };
            if (aval[1].value !== "") {
                aval[1].innerHTML = '密码不能为空';
                aval[1].style.color = "red";
                passwordflag = false;
            };
            //如果所有的条件都通过了，允许跳转。否则刷新页面。
            // if (!phoneflag || !passwordflag || aval[5].checked) {
            //     return false;
            // } else {
            //     location.reload;
            // }
            ajax({
                url: 'http://localhost:8080/1911/music/php/reg.php',
                // dataType: 'json',
                type:'post',
                data: {
                    phone: ph,
                    password: pass
                }
            }).then(function (res) {
                // location.href = "http://localhost:8080/1911/music/src/html"
                console.log(res)
            });
        }
    }
}

export { Register }


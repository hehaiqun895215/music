
class Register {
    constructor() {

        let user = document.getElementById('#phone');
        let pass = document.getElementById('#password');
        let btn = document.getElementById('#btn');


    };
    init() {

        btn.onclick = function () {
            user.value = localStorage.userName;
            pass.value = localStorage.passWord;
            let userName = user.value;
            let passWord = pass.value;
            let arr = [];
            (findArr) => {
                for (let userName in localStorage) {
                    arr.push(localStorage[userName]);
                }
                return arr;
            }
            let d = findArr();
            if (userName == d[1]) {
                alert('账户已注册');
                return false;
            } else {
                localStorage.userName = userName;
                localStorage.passWord = passWord;
                alert('注成功册');
            }
        }

    };
}

export { Register }


<?php
header('Access-Control-Allow-Origin:*');
    include('./conn.php');
    //接收数据
    $password=$_POST['password'];
    $phone=$_POST['phone'];
    //验证数据
    $sql = "select * from user where phone='{$phone}'";
    $result = $mysqli->query($sql);

    if($result->num_rows>0){
        echo '{"msg":"用户名已存在"}';
        $mysqli->close();
        die;
    }
    //插入数据
    $insertSql="insert into user(password,phone) values ('$password','$phone')";
    $res=$mysqli->query($insertSql);
    if($res){
        echo '{"msg":"注册成功"}';
    }
    $mysqli->close();
?>
<?php
header('Access-Control-Allow-Origin:*');
include('./conn.php');

$phone = $_REQUEST['phone'];
$password = $_REQUEST['password'];
    //验证用户名
$sql = "select * from user where phone='$phone' AND password='$password'";
$result =$conn->query($sql);
if ($result->num_rows > 0) {
    echo '{"msg":"登录成功"}';
} else {
    echo '{"msg":"请重新检查用户名和密码"}';
}
$conn->close();
?>
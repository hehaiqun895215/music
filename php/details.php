<?php
header('Access-Control-Allow-Origin:*');
include "conn.php";
if(isset($_GET['picid'])){
    $id=$_GET['picid'];
    $result=$conn->query("select * from musicpic where id = {$id}");
    echo json_encode($result->fetch_assoc());
}
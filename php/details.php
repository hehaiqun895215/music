<?php

include "conn.php";
if(isset($_GET['id'])){
    $sid=$_GET['id'];
    $result=$conn->query("select * from musicpic where id = $id ");
    echo json_encode($result->fetch_assoc());
}
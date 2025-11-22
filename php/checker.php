<?php

include "config.php";

if(isset($_POST["check"]))
{

$ip = $_SERVER["REMOTE_ADDR"];
$latitude = $_POST["latitude"];
$longitude = $_POST["longitude"];

$sql = mysqli_query($conn, "insert into checks(ip,latitude,longitude) values('$ip','$latitude','$longitude') ");


$sql = "select * from checks";
$query = mysqli_num_rows(mysqli_query($conn,$sql));
echo "Visitors: ".$query;
}

?>

<?php

$conn = new mysqli("localhost","root","","wufpbk");
if($conn->connect_error){
    die("no: ".$conn->connect_error);
}
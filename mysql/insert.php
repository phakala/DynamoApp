<?php
require "mysql_conn.php";
$place = $_GET("place");
$entertime = $_GET("time");
$id = $_GET("id");
$query = "INSERT into visit (place, enter_time, visitor VALUES ('$place', '$time', 'id')";
if($conn->query($query) == TRUE) {
	echo "Insert successful";
}
?>
<?php
$place = $_GET["place"];
$time = $_GET["time"];
$id = $_GET["id"];
$query = "INSERT INTO visit (place, enter_time, visitor) VALUES ('". $place . "', '" . $time . "', '" . $id . "')";
echo $query;
?>
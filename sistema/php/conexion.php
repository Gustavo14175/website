<?php
//definir los datos para la conexion
    $server="localhost";
    $user= "root";
    $password="7122166426";
    $bd="sistemapotable";
    $conexion= new mysqli($server,$user,$password,$bd) or die ("Error al conectarse con la base de datos".$mysqli->error);
?>


<?php
    include "conexion.php";
    $accion=$_GET["accion"];
    switch($accion){
        case 'agregarBeneficiario':
        //se recibe los datos a insertar
            $claveBeneficiario=$_GET["claveBeneficiario"];
            $nombre=$_GET["nombre"];
            $ap=$_GET["ap"];
            $am=$_GET["am"];
            //se define la consulta sql a realizar
            $sql= "insert into beneficiario values (0,'$claveBeneficiario', '$nombre', '$ap','$am')";
            //se ejecuta la consulta con la bd
            $ejecutarSQL=$conexion->query($sql) or die ("Error al insertar el beneficiario".$conexion->error);
            //comprobar la ejecucion 
            if ($ejecutarSQL){
                echo "1";
            }
            else
            {
                echo "0";
            }
            break;

    }
?>

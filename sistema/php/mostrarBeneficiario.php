<?php
//mostrar los datos almacenados en la tabla fuente
	include "conexion.php";
	$consultaSQL="Select *from beneficiario";
	//ejecutamos la consulta
	$ejecutarConsulta=$conexion->query($consultaSQL);
	//recorre los elementos de la consulta dentro de un 
	//array y almacenarlos en una variable cada fila
	?>
	<script type="text/javascript">
		$(document).ready(function(){
			$("#tablaBeneficiario").DataTable();
		});
	</script>
	<?php
	echo "<table id='tablaBeneficiario'><thead><th>Clave</th><th>Nombre</th>
	<th>Apellido Paterno</th><th>Apellido Materno</th>
	<th>Eliminar</th><th>Editar</th></thead>";
	while ($fila=$ejecutarConsulta->fetch_array()) {
        //mostrar cada fila del array
		echo "<tr>";
		echo "<td>".$fila[1]."</td><td>".$fila[2]."</td>
		<td>".$fila[3]."</td><td>".$fila[4]."</td><td>
		<p class='btn btn-warning' onclick='eliminarBeneficiario(".$fila[0].")'>
        <i class='fas fa-trash-alt'></i> Eliminar</p></td><td>
		<p class='btn btn-primary' onclick=editarBeneficiario(".$fila[0].",'".$fila[1]."','".$fila[2]."','"
		.$fila[3]."','".$fila[4]."')><i class='far fa-edit'></i> Editar</p></td>";
		echo "</tr>";
	}
	echo "</table>";
	?>
$(document).ready(function(){
    //regresar al menu donde esta la imagen y ocultando el formulario y la tabla del beneficiario
    $("#menuInicio").click(function(event){
        $("#divAgregarBeneficiario").hide(1000);
        $("#divInicio").show(1000);
    });
    //accion al dar clic en el menu Agregar Beneficiariox   x       
    $("#menuAgregarBeneficiario").click(function(event){
        $("#divInicio").hide("slow");
        $("#divAgregarBeneficiario").show(1000);
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        $("#txtClaveBeneficiario").focus();
        //cargamos los datos de la tabla beneficiario en el div
        $("#mostrarBeneficiario").load("./php/mostrarBeneficiario.php");        
    });
    //evento del boton guardar Beneficiario
    $("#btnGuardarBeneficiario").click(function(event){
        //declaracion de variables que vamos a utilizar
        var clave,nombre,ap,am,telefono,accion;
        //se recogen los datos de los campos de texto
        claveBeneficiario=$("#txtClaveBeneficiario").val();
        nombre=$("#txtNombreBeneficiario").val();
        ap=$("#txtApBeneficiario").val();
        am=$("#txtAmBeneficiario").val();
        //verificamos que accion texto tiene el boton
        if ($("#btnGuardarBeneficiario").val()=="Guardar") {
            accion="agregarBeneficiario";
        }
        if ($("#btnGuardarBeneficiario").val()=="Editar") {
            accion="editarBeneficiario";
        }
        //enviamos los datos al servidor (backend), es un archivo php
            $.ajax({
            url:"./php/servidor.php",
            type:"GET",
            data: {accion:accion,claveBeneficiario:claveBeneficiario,
                nombre:nombre, ap:ap, am:am},
                success:function(respuestaPHP){                    
                    //verificar la respuesta del servidor
                    /*if(respuestaPHP=='1'){
                        alertify.success("Accion "+accion+ " ejecutado correctamente");
                        limpiarCamposBeneficiario();
                        $("#mostrarBeneficiario").load("./php/mostrarBeneficiario.php");
                    }
                    else
                    {
                        alertify.error("No se registro correctamente");
                    }*/
                    alertify.success("Accion "+accion+ " ejecutado correctamente");
                        limpiarCamposBeneficiario();
                        $("#mostrarBeneficiario").load("./php/mostrarBeneficiario.php");
                }
            });
    });

    function limpiarCamposBeneficiario(){
        $("#txtClaveBeneficiario").val("");
        $("#txtNombreBeneficiario").val("");
        $("#txtApBeneficiario").val("");
        $("#txtAmBeneficiario").val("");
        $("#txtClaveBeneficiario").focus();
        $("#txtGuardarBeneficiario").removeClass();
        $("#txtGuardarBeneficiario").addClass("btn btn_primary");
        $("#txtGuardarBeneficiario").val("Guardar");
        $("#txtGuardarBeneficiario").html("<i class= 'fas fa-cog fa-spin'><i/> Guardar");
        $("#txtClaveBeneficiario").prop('readonly', false);
    }   

    $('#sidebarCollapse').click(function(event){
        $('#sidebar,#content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});
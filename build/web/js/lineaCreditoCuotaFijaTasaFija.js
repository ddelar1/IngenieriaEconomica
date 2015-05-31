/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function (){
    eventosPrincipalesL2();
    cambioTipoTasaL2();
    
    $('.btnimprimirT2').click(function (){
        imprimir();
    });
    
    $('#btnCalcularCreditoL2').click(function (){
        if($('#txtnombreClienteL2').val() == '' || $('#txtCedulaL2').val() == '' || 
           $('#txtMontoL2').val() == '' || $('#txtMontoL2').val() == '$0' ||
           $('#txtPlazoL2').val() == '' || $('#seltipoTasaL2').val() == 'SEL' || $('#selPeriodoL2').val() == 'SEL' ||
            $('#txtTasaL2').val() == ''){
            mensajeError('#validarDatosLinea', '#btnCalcularCreditoL2');
        }else{
            generarTablaL2(parseInt($('#txtPlazoL2').val()),$('#selPeriodoL2').val());
            $('.btnimprimirT2').show();
        }
    });
});

var arryDatosL2 = [];

function imprimir() {
    window.print();
}

function eventosPrincipalesL2(){
    $('#selPeriodoL2').blur(function(){
        $('#tbodyL2').hide(650);
        if($(this).val() != 'SEL' && $('#seltipoTasaL2').val() != 'SEL'){
            $('#txtTasaL2').val('');
            $('#txtTasaL2EA').val('');
            $('#txtTasaL2NA').val('');
            $('#txtTasaL2EP').val('');
            $('#idEAL2').hide();
            $('#idNAL2').hide();
            $('#idEPL2').hide();
            $('#idLabelTasaL2').show();
            $('#gruopTxtTasaL2').show();
        }
    });
    
    $('#seltipoTasaL2').blur(function(){
        $('#tbodyL1').hide(650);
        if($(this).val() != 'SEL' && $('#selPeriodoL2').val() != 'SEL'){
            $('#txtTasaL2').val('');
            $('#txtTasaL2EA').val('');
            $('#txtTasaL2NA').val('');
            $('#txtTasaL2EP').val('');
            $('#idEAL2').hide();
            $('#idNAL2').hide();
            $('#idEPL2').hide();
            $('#idLabelTasaL2').show();
            $('#gruopTxtTasaL2').show();
        }
    });
}

function cambioTipoTasaL2(){
    $('#txtTasaL2').blur(function(){
        $('#tbodyL1').hide(650);
        if(!validarCampoExpresion('#txtTasaL2', /^(([0-9]*\.[0-9]*)|([0-9]*))$/) || $('#txtTasaL2').val() == ''){
            mensajeError('#dialogValTasa', '#txtTasaL2');
               $('#txtTasaL2EA').val('');
               $('#txtTasaL2NA').val('');
               $('#txtTasaL2EP').val('');
               $('#idEAL2').hide();
               $('#idNAL2').hide();
               $('#idEPL2').hide();
        }else{
          if($('#seltipoTasaL2').val() == 'EA'){
               $('#txtTasaL2EA').val('');
               $('#txtTasaL2NA').val('');
               $('#txtTasaL2EP').val('');
               $('#idEAL2').hide();
               $('#idNAL2').hide();
               $('#idEPL2').hide();
               ////////
               cargarTasasNAyEPL2();
               $('#idNAL2').show();
               $('#idEPL2').show();
               $('#idCalcularCreditoL2').show(250);
           }else if ($('#seltipoTasaL2').val() == 'NA'){
               $('#txtTasaL2EA').val('');
               $('#txtTasaL2NA').val('');
               $('#txtTasaL2EP').val('');
               $('#idEAL2').hide();
               $('#idNAL2').hide();
               $('#idEPL2').hide();
               ////////
               cargarTasasEAyEPL2();
               $('#idEAL2').show();
               $('#idEPL2').show();
               $('#idCalcularCreditoL2').show(250);
           }else if ($('#seltipoTasaL2').val() == 'EP'){
               $('#txtTasaL2EA').val('');
               $('#txtTasaL2NA').val('');
               $('#txtTasaL2EP').val('');
               $('#idEAL2').hide();
               $('#idNAL2').hide();
               $('#idEPL2').hide();
               ////////
               cargarTasasEAyNAL2();
               $('#idEAL2').show();
               $('#idNAL2').show();
               $('#idCalcularCreditoL2').show(250);
           }  
        }
        
        $('.btnimprimirT2').hide();
        $('#tblInfoClienteT2').hide();
        $('#tblCreditoL2').hide();
    });
}

function mensajeError(idmensaje, idCampo) {
    $(idmensaje).dialog({
      modal: true,
      buttons: {
        Ok: function() {
          $( this ).dialog( "close" );
        }
      }
    });
    $(idCampo).val('');
}

function generarTablaL2(plazo, pericidad){
    $('#tbodyL2').empty();
    $('#tbodyInfoClienteT2').empty();
    var elementoInfCliente = [];
    cargarTablaL2();
    var elementoL2 = [];
    var perdiodo = 0;
    var fecha = new Date();
    
    if(pericidad == 'opmensual'){
        perdiodo = 1;
    }else if(pericidad == 'opbimestral'){
        perdiodo = 2;
    }else if (pericidad == 'optrimestral'){
        perdiodo = 3;
    }
    
    for(var i = 0; i<arryDatosL2.length;i++){
        var dia = fecha.getDate();
        var mes = fecha.getMonth()+1;
        var anio = fecha.getFullYear();
        
        if(dia < 10 ){dia = "0" + dia};
        if(mes < 10 ){mes = "0" + mes};
        
        elementoL2.push("<tr>");
        elementoL2.push("<th scope='row'>"+i+"</th>");
        elementoL2.push("<td>"+dia+"/"+mes+"/"+anio+"</td>");
        elementoL2.push("<td>"+arryDatosL2[i].saldoCapital+"</td>");
        elementoL2.push("<td>"+arryDatosL2[i].cuotafija+"</td>");
        elementoL2.push("<td>"+arryDatosL2[i].amortizacionCapital+"</td>");
        elementoL2.push("<td>"+arryDatosL2[i].intereses+"</td>");
        elementoL2.push("<td>"+arryDatosL2[i].SeguroVida+"</td>");
        elementoL2.push("<td>"+arryDatosL2[i].totalPagar+"</td>");
        elementoL2.push("</tr>");
        
        fecha.setMonth(fecha.getMonth()+perdiodo);
    }
    elementoInfCliente.push("<tr>");
    elementoInfCliente.push("<td>"+$("#txtnombreClienteL2").val()+"</td>");
    elementoInfCliente.push("<td>"+$("#txtCedulaL2").val()+"</td>");
    elementoInfCliente.push("<td>"+$("#txtMontoL2").val()+"</td>");
    elementoInfCliente.push("<td>"+$("#txtPlazoL2").val()+"</td>");
    elementoInfCliente.push("<td>"+$("#seltipoTasaL2 option:selected" ).text()+"</td>");
    elementoInfCliente.push("<td>"+$('#txtTasaL2').val()+"</td>");
    elementoInfCliente.push("<td>"+$("#selPeriodoL2 option:selected" ).text()+"</td>");
    elementoInfCliente.push("</tr>");
    
    $('#tbodyL2').append(elementoL2.join(""));
    $('#tbodyInfoClienteT2').append(elementoInfCliente.join(""));
    $('#tbodyL2').show();
    $('#tblInfoClienteT2').show(650);
    $('#tblCreditoL2').show(650);
}

function cargarTablaL2() {
    
    var tasaEfectiva = 0;
    if($('#seltipoTasaL2').val() == 'EP'){
        tasaEfectiva = $('#txtTasaL2').val();
    }else{
        tasaEfectiva = $('#txtTasaL2EP').val().replace(",",".");
    }
    
    var periocidad = 0;
    var cantidaMeses = 0;
    
    if($('#selPeriodoL2').val() == 'opmensual'){
        periocidad = 12;
        cantidaMeses = 1;
    }else if($('#selPeriodoL2').val() == 'opbimestral'){
        periocidad = 6;
        cantidaMeses = 2;
    }else if ($('#selPeriodoL2').val() == 'optrimestral'){
        periocidad = 4;
        cantidaMeses = 3;
    }
    
    $.ajax( {
        type : 'POST',
        url : 'LineaCreditoCuotaFijaTasaFija',
        async : false,
        data :  {"accion" : 4, "capital" : $('#txtMontoL2').val().replace(/\,/g,""), "plazo" : $('#txtPlazoL2').val(), "tasa": tasaEfectiva, "periocidad" : periocidad, "cantidadMeses" : cantidaMeses},
        success : function (data) {
                console.log(data);
                arryDatosL2 = data.datosL2; 
        },
        error : function (xml, msg, error) {
            alert('Error Grave', 'Se ha generado un error');
            console.log(error);
        }
    });
}

function validarCampoExpresion (campo, expresion){
  if($(campo).val().match(expresion)){
    return true;
  }else{
    return false
  }
}

function mensajeError(idmensaje, idCampo) {
    $(idmensaje).dialog({
      modal: true,
      buttons: {
        Ok: function() {
          $( this ).dialog( "close" );
        }
      }
    });
    $(idCampo).val('');
}

function cargarTasasNAyEPL2() {
    $.ajax( {
        type : 'POST',
        url : 'LineaCreditoCuotaFijaTasaFija',
        async : false,
        data :  {"accion" : 1, "tasa" : $('#txtTasaL2').val(), "periocidad" : $('#selPeriodoL2').val()},
        success : function (data) {
            $('#txtTasaL2NA').val(data.tasaUnoNA);
            $('#txtTasaL2EP').val(data.tasaDosEP);
        },
        error : function (xml, msg, error) {
            alert('Error Grave', 'Se ha generado un error');
            console.log(error);
        }
    });
}

function cargarTasasEAyEPL2() {
    $.ajax( {
        type : 'POST',
        url : 'LineaCreditoCuotaFijaTasaFija',
        async : false,
        data :  {"accion" : 2, "tasa" : $('#txtTasaL2').val(),  "periocidad" : $('#selPeriodoL2').val()},
        success : function (data) {
            $('#txtTasaL2EA').val(data.tasaUnoEA);
            $('#txtTasaL2EP').val(data.tasaDosEP);
        },
        error : function (xml, msg, error) {
            alert('Error Grave', 'Se ha generado un error');
            console.log(error);
        }
    });
}

function cargarTasasEAyNAL2() {
    $.ajax( {
        type : 'POST',
        url : 'LineaCreditoCuotaFijaTasaFija',
        async : false,
        data :  {"accion" : 3, "tasa" : $('#txtTasaL2').val(),  "periocidad" : $('#selPeriodoL2').val()},
        success : function (data) {
            $('#txtTasaL2EA').val(data.tasaUnoEA);
            $('#txtTasaL2NA').val(data.tasaDosNA);
        },
        error : function (xml, msg, error) {
            alert('Error Grave', 'Se ha generado un error');
            console.log(error);
        }
    });
}


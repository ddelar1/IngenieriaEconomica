/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function (){
    eventosPrincipales();
    cambioTipoTasaL1();
    
    $('.btnimprimirT1').click(function (){
        imprimir();
    });
    
    $('#btnCalcularCreditoL1').click(function (){
        if($('#txtnombreClienteL1').val() == '' || $('#txtCedulaL1').val() == '' || 
           $('#txtMontoL1').val() == '' || $('#txtMontoL1').val() == '$0' ||
           $('#txtPlazoL1').val() == '' || $('#seltipoTasaL1').val() == 'SEL' || $('#selPeriodoL1').val() == 'SEL' ||
            $('#txtTasaL1').val() == ''){
            mensajeError('#validarDatosLinea', '#btnCalcularCreditoL1');
        }else{
            generarTablaL1(parseInt($('#txtPlazoL1').val()),$('#selPeriodoL1').val());
            $('.btnimprimirT1').show();
        }
    });
});
var arryDatosL1 = [];

function imprimir() {
    window.print();
}

function eventosPrincipales(){
    $('#selPeriodoL1').blur(function(){
        $('#tbodyL1').hide(650);
        if($(this).val() != 'SEL' && $('#seltipoTasaL1').val() != 'SEL'){
            $('#txtTasaL1').val('');
            $('#txtTasaL1EA').val('');
            $('#txtTasaL1NA').val('');
            $('#txtTasaL1EP').val('');
            $('#idEAL1').hide();
            $('#idNAL1').hide();
            $('#idEPL1').hide();
            $('#idLabelTasa').show();
            $('#gruopTxtTasaL1').show();
        }
    });
    
    $('#seltipoTasaL1').blur(function(){
        $('#tbodyL1').hide(650);
        if($(this).val() != 'SEL' && $('#selPeriodoL1').val() != 'SEL'){
            $('#txtTasaL1').val('');
            $('#txtTasaL1EA').val('');
            $('#txtTasaL1NA').val('');
            $('#txtTasaL1EP').val('');
            $('#idEAL1').hide();
            $('#idNAL1').hide();
            $('#idEPL1').hide();
            $('#idLabelTasa').show();
            $('#gruopTxtTasaL1').show();
        }
    });
}

function cambioTipoTasaL1(){
    $('#txtTasaL1').blur(function(){
        $('#tbodyL1').hide(650);
        if(!validarCampoExpresion('#txtTasaL1', /^(([0-9]*\.[0-9]*)|([0-9]*))$/) || $('#txtTasaL1').val() == ''){
            mensajeError('#dialogValTasa', '#txtTasaL1');
                   $('#txtTasaL1EA').val('');
                   $('#txtTasaL1NA').val('');
                   $('#txtTasaL1EP').val('');
                   $('#idEAL1').hide(250);
                   $('#idNAL1').hide(250);
                   $('#idEPL1').hide(250);
        }else{
                if($('#seltipoTasaL1').val() == 'EA'){
                   $('#txtTasaL1EA').val('');
                   $('#txtTasaL1NA').val('');
                   $('#txtTasaL1EP').val('');
                   $('#idEAL1').hide(250);
                   $('#idNAL1').hide(250);
                   $('#idEPL1').hide(250);
                   ////////
                   cargarTasasNAyEPL1();
                   $('#idNAL1').show(250);
                   $('#idEPL1').show(250);
                   $('#idCalcularCreditoL1').show(250);

               }else if ($('#seltipoTasaL1').val() == 'NA'){
                   $('#txtTasaL1EA').val('');
                   $('#txtTasaL1NA').val('');
                   $('#txtTasaL1EP').val('');
                   $('#idEAL1').hide(250);
                   $('#idNAL1').hide(250);
                   $('#idEPL1').hide(250);
                   ////////
                   cargarTasasEAyEPL1();
                   $('#idEAL1').show(250);
                   $('#idEPL1').show(250);
                   $('#idCalcularCreditoL1').show(250);
               }else if ($('#seltipoTasaL1').val() == 'EP'){
                   $('#txtTasaL1EA').val('');
                   $('#txtTasaL1NA').val('');
                   $('#txtTasaL1EP').val('');
                   $('#idEAL1').hide(250);
                   $('#idNAL1').hide(250);
                   $('#idEPL1').hide(250);
                   ////////
                   cargarTasasEAyNAL1();
                   $('#idEAL1').show(250);
                   $('#idNAL1').show(250);
                   $('#idCalcularCreditoL1').show(250);
            }
        }
        
        $('.btnimprimirT1').hide();
        $('#tblInfoClienteT1').hide();
        $('#tblCreditoL1').hide();
    });
}

function generarTablaL1(plazo, pericidad){
    $('#tbodyL1').empty();
    $('#tbodyInfoClienteT1').empty();
    cargarTablaL1();
    var elemento = [];
    var elementoInfCliente = [];
    var perdiodo = 0;
    var fecha = new Date();
    
    if(pericidad == 'opmensual'){
        perdiodo = 1;
    }else if(pericidad == 'opbimestral'){
        perdiodo = 2;
    }else if (pericidad == 'optrimestral'){
        perdiodo = 3;
    }
    
    for(var i = 0; i<arryDatosL1.length;i++){
        var dia = fecha.getDate();
        var mes = fecha.getMonth()+1;
        var anio = fecha.getFullYear();
        
        if(dia < 10 ){dia = "0" + dia};
        if(mes < 10 ){mes = "0" + mes};
        
        elemento.push("<tr>");
        elemento.push("<th scope='row'>"+i+"</th>");
        elemento.push("<td>"+dia+"/"+mes+"/"+anio+"</td>");
        elemento.push("<td>"+arryDatosL1[i].saldoCapital+"</td>");
        elemento.push("<td>"+arryDatosL1[i].amortizacionCapital+"</td>");
        elemento.push("<td>"+arryDatosL1[i].intereses+"</td>");
        elemento.push("<td>"+arryDatosL1[i].SeguroVida+"</td>");
        elemento.push("<td>"+arryDatosL1[i].totalPagar+"</td>");
        elemento.push("</tr>");
        
        fecha.setMonth(fecha.getMonth()+perdiodo);
    }
    
    elementoInfCliente.push("<tr>");
    elementoInfCliente.push("<td>"+$("#txtnombreClienteL1").val()+"</td>");
    elementoInfCliente.push("<td>"+$("#txtCedulaL1").val()+"</td>");
    elementoInfCliente.push("<td>"+$("#txtMontoL1").val()+"</td>");
    elementoInfCliente.push("<td>"+$("#txtPlazoL1").val()+"</td>");
    elementoInfCliente.push("<td>"+$("#seltipoTasaL1 option:selected" ).text()+"</td>");
    elementoInfCliente.push("<td>"+$('#txtTasaL1').val()+"</td>");
    elementoInfCliente.push("<td>"+$("#selPeriodoL1 option:selected" ).text()+"</td>");
    elementoInfCliente.push("</tr>");
    
    $('#tbodyL1').append(elemento.join(""));
    $('#tbodyInfoClienteT1').append(elementoInfCliente.join(""));
    $('#tbodyL1').show();
    $('#tblInfoClienteT1').show(650);
    $('#tblCreditoL1').show(650);
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

function validarCampoExpresion (campo, expresion){
  debugger;
  if($(campo).val().match(expresion)){
    return true;
  }else{
    return false
  }
}



function cargarTablaL1() {
    
    var tasaEfectiva = 0;
    if($('#seltipoTasaL1').val() == 'EP'){
        tasaEfectiva = $('#txtTasaL1').val();
    }else{
        tasaEfectiva = $('#txtTasaL1EP').val().replace(",",".");
    }
    
    var periocidad = 0;
    var cantidaMeses = 0;
    if($('#selPeriodoL1').val() == 'opmensual'){
        periocidad = 12;
        cantidaMeses = 1;
    }else if($('#selPeriodoL1').val() == 'opbimestral'){
        periocidad = 6;
        cantidaMeses = 2;
    }else if ($('#selPeriodoL1').val() == 'optrimestral'){
        periocidad = 4;
        cantidaMeses = 3;
    }
    
    $.ajax( {
        type : 'POST',
        url : 'LineaOrdinariaTradicional',
        async : false,
        data :  {"accion" : 4, "capital" : $('#txtMontoL1').val().replace(/\,/g,""), "plazo" : $('#txtPlazoL1').val(), "tasa": tasaEfectiva, "periocidad" : periocidad, "cantidadMeses" : cantidaMeses},
        success : function (data) {
                arryDatosL1 = data.datosL1; 
        },
        error : function (xml, msg, error) {
            alert('Error Grave', 'Se ha generado un error');
            console.log(error);
        }
    });
}

function cargarTasasNAyEPL1() {
    $.ajax( {
        type : 'POST',
        url : 'LineaOrdinariaTradicional',
        async : false,
        data :  {"accion" : 1, "tasa" : $('#txtTasaL1').val(), "periocidad" : $('#selPeriodoL1').val()},
        success : function (data) {
            $('#txtTasaL1NA').val(data.tasaUnoNA);
            $('#txtTasaL1EP').val(data.tasaDosEP);
        },
        error : function (xml, msg, error) {
            alert('Error Grave', 'Se ha generado un error');
            console.log(error);
        }
    });
}

function cargarTasasEAyEPL1() {
    $.ajax( {
        type : 'POST',
        url : 'LineaOrdinariaTradicional',
        async : false,
        data :  {"accion" : 2, "tasa" : $('#txtTasaL1').val(),  "periocidad" : $('#selPeriodoL1').val()},
        success : function (data) {
            $('#txtTasaL1EA').val(data.tasaUnoEA);
            $('#txtTasaL1EP').val(data.tasaDosEP);
        },
        error : function (xml, msg, error) {
            alert('Error Grave', 'Se ha generado un error');
            console.log(error);
        }
    });
}

function cargarTasasEAyNAL1() {
    $.ajax( {
        type : 'POST',
        url : 'LineaOrdinariaTradicional',
        async : false,
        data :  {"accion" : 3, "tasa" : $('#txtTasaL1').val(),  "periocidad" : $('#selPeriodoL1').val()},
        success : function (data) {
            $('#txtTasaL1EA').val(data.tasaUnoEA);
            $('#txtTasaL1NA').val(data.tasaDosNA);
        },
        error : function (xml, msg, error) {
            alert('Error Grave', 'Se ha generado un error');
            console.log(error);
        }
    });
}

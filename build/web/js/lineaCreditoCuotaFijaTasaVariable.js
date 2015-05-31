/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function (){
    eventosPrincipalesL3();
    
    $('.btnimprimirT3').click(function (){
        imprimir();
    });
    
    $('#btnCalcularCreditoL3').click(function (){
        if($('#txtnombreClienteL3').val() == '' || $('#txtCedulaL3').val() == '' || 
           $('#txtMontoL3').val() == '' || $('#txtMontoL3').val() == '$0' ||
           $('#txtPlazoL3').val() == '' || $('#seltipoTasaL3').val() == 'SEL' || $('#selPeriodoL3').val() == 'SEL' ||
            $('#txtDTFL3').val() == '' || $('#txtPuntosL3').val() == ''){
            mensajeError('#validarDatosLinea', '#btnCalcularCreditoL3');
        }else{
            generarTablaL3(parseInt($('#txtPlazoL3').val()),$('#selPeriodoL3').val());
            $('.btnimprimirT3').show();
        }
    });
    
    /*$('#botonPrueba').click(function(){
        cargarMunicipios();
    });*/
});

function imprimir() {
    window.print();
}

var arryDatosL3 = [];

function eventosPrincipalesL3(){

    $('#selPeriodoL3').blur(function(){
        $('#tbodyL3').hide(650);
        if($(this).val() != 'SEL' && $('#seltipoTasaL3').val() != 'SEL' && $('#txtDTFL3').val() != '' &&  $('#txtPuntosL3').val() != ''){
            $('#txtTasaL3EA').val('');
            $('#txtTasaL3NA').val('');
            $('#txtTasaL3EP').val('');
            $('#idEAL3').hide();
            $('#idNAL3').hide();
            $('#idEPL3').hide();
            
            var dtf = parseFloat($('#txtDTFL3').val());
            var puntos = parseFloat($('#txtPuntosL3').val());
            var resultado = puntos+dtf;
            $('#txtTasaL3').val(resultado);
            $('#txtTasaL3').attr('disabled',true);
            $('#txtTasaL3').attr('readonly',true);
            
            $('#idLabelTasaL3').show();
            $('#gruopTxtTasaL3').show();
            cambioTipoTasaL3()
        }
    });
    
    $('#seltipoTasaL3').blur(function(){
        $('#tbodyL3').hide(650);
        if($(this).val() != 'SEL' && $('#selPeriodoL3').val() != 'SEL' && $('#txtDTFL3').val() != '' &&  $('#txtPuntosL3').val() != ''){
            $('#txtTasaL3EA').val('');
            $('#txtTasaL3NA').val('');
            $('#txtTasaL3EP').val('');
            $('#idEAL3').hide();
            $('#idNAL3').hide();
            $('#idEPL3').hide();
            
            var dtf = parseFloat($('#txtDTFL3').val());
            var puntos = parseFloat($('#txtPuntosL3').val());
            var resultado = puntos+dtf;
            $('#txtTasaL3').val(resultado);
            $('#txtTasaL3').attr('disabled',true);
            $('#txtTasaL3').attr('readonly',true);
            
            $('#idLabelTasaL3').show();
            $('#gruopTxtTasaL3').show();
            cambioTipoTasaL3();
        }
    });
}

function cambioTipoTasaL3(){
            if($('#seltipoTasaL3').val() == 'EA'){
               $('#txtTasaL3EA').val('');
               $('#txtTasaL3NA').val('');
               $('#txtTasaL3EP').val('');
               $('#idEAL3').hide();
               $('#idNAL3').hide();
               $('#idEPL3').hide();
               ////////
               cargarTasasNAyEPL3();
               $('#idNAL3').show();
               $('#idEPL3').show();
               $('#idCalcularCreditoL3').show(250);

           }else if ($('#seltipoTasaL3').val() == 'NA'){
               $('#txtTasaL3EA').val('');
               $('#txtTasaL3NA').val('');
               $('#txtTasaL3EP').val('');
               $('#idEAL3').hide();
               $('#idNAL3').hide();
               $('#idEPL3').hide();
               ////////
               cargarTasasEAyEPL3();
               $('#idEAL3').show();
               $('#idEPL3').show();
               $('#idCalcularCreditoL3').show(250);
           }else if ($('#seltipoTasaL3').val() == 'EP'){
               $('#txtTasaL3EA').val('');
               $('#txtTasaL3NA').val('');
               $('#txtTasaL3EP').val('');
               $('#idEAL3').hide();
               $('#idNAL3').hide();
               $('#idEPL3').hide();
               ////////
               cargarTasasEAyNAL3();
               $('#idEAL3').show();
               $('#idNAL3').show();
               $('#idCalcularCreditoL3').show(250);
           }
           
        $('.btnimprimirT3').hide();
        $('#tblInfoClienteT3').hide();
        $('#tblCreditoL3').hide();
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
  if($(campo).val().match(expresion)){
    return true;
  }else{
    return false
  }
}

function generarTablaL3(plazo, pericidad){
    $('#tbodyL3').empty();
    $('#tbodyInfoClienteT3').empty();
    var elementoInfCliente = [];
    cargarTablaL3();
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
    
    for(var i = 0; i<arryDatosL3.length;i++){
        var dia = fecha.getDate();
        var mes = fecha.getMonth()+1;
        var anio = fecha.getFullYear();
        
        if(dia < 10 ){dia = "0" + dia};
        if(mes < 10 ){mes = "0" + mes};
        
        elementoL2.push("<tr>");
        elementoL2.push("<th scope='row'>"+i+"</th>");
        elementoL2.push("<td>"+dia+"/"+mes+"/"+anio+"</td>");
        elementoL2.push("<td>"+arryDatosL3[i].saldoCapital+"</td>");
        elementoL2.push("<td>"+arryDatosL3[i].cuotafija+"</td>");
        elementoL2.push("<td>"+arryDatosL3[i].amortizacionCapital+"</td>");
        elementoL2.push("<td>"+arryDatosL3[i].intereses+"</td>");
        elementoL2.push("<td>"+arryDatosL3[i].SeguroVida+"</td>");
        elementoL2.push("<td>"+arryDatosL3[i].totalPagar+"</td>");
        elementoL2.push("</tr>");
        
        fecha.setMonth(fecha.getMonth()+perdiodo);
    }
    
    elementoInfCliente.push("<tr>");
    elementoInfCliente.push("<td>"+$("#txtnombreClienteL3").val()+"</td>");
    elementoInfCliente.push("<td>"+$("#txtCedulaL3").val()+"</td>");
    elementoInfCliente.push("<td>"+$("#txtMontoL3").val()+"</td>");
    elementoInfCliente.push("<td>"+$("#txtPlazoL3").val()+"</td>");
    elementoInfCliente.push("<td>"+$("#seltipoTasaL3 option:selected" ).text()+"</td>");
    elementoInfCliente.push("<td>"+$('#txtTasaL3').val()+"</td>");
    elementoInfCliente.push("<td>"+$("#selPeriodoL3 option:selected" ).text()+"</td>");
    elementoInfCliente.push("</tr>");
    
    $('#tbodyL3').append(elementoL2.join(""));
    $('#tbodyInfoClienteT3').append(elementoInfCliente.join(""));
    $('#tbodyL3').show();
    $('#tblInfoClienteT3').show(650);
    $('#tblCreditoL3').show(650);
}

function cargarTablaL3() {
    
    var tasaEfectiva = 0;
    if($('#seltipoTasaL3').val() == 'EP'){
        tasaEfectiva = $('#txtTasaL3').val();
    }else{
        tasaEfectiva = $('#txtTasaL3EP').val().replace(",",".");
    }
    
    var periocidad = 0;
    var cantidaMeses = 0;
    
    if($('#selPeriodoL3').val() == 'opmensual'){
        periocidad = 12;
        cantidaMeses = 1;
    }else if($('#selPeriodoL3').val() == 'opbimestral'){
        periocidad = 6;
        cantidaMeses = 2;
    }else if ($('#selPeriodoL3').val() == 'optrimestral'){
        periocidad = 4;
        cantidaMeses = 3;
    }
    
    $.ajax( {
        type : 'POST',
        url : 'LineaCreditoCuotaFijaTasaVariable',
        async : false,
        data :  {"accion" : 4, "capital" : $('#txtMontoL3').val().replace(/\,/g,""), "plazo" : $('#txtPlazoL3').val(), "tasa": tasaEfectiva, "periocidad" : periocidad, "cantidadMeses" : cantidaMeses},
        success : function (data) {
                console.log(data);
                arryDatosL3 = data.datosL3; 
        },
        error : function (xml, msg, error) {
            alert('Error Grave', 'Se ha generado un error');
            console.log(error);
        }
    });
}



function cargarTasasNAyEPL3() {
    $.ajax( {
        type : 'POST',
        url : 'LineaCreditoCuotaFijaTasaVariable',
        async : false,
        data :  {"accion" : 1, "tasa" : $('#txtTasaL3').val(), "periocidad" : $('#selPeriodoL3').val()},
        success : function (data) {
            $('#txtTasaL3NA').val(data.tasaUnoNA);
            $('#txtTasaL3EP').val(data.tasaDosEP);
        },
        error : function (xml, msg, error) {
            alert('Error Grave', 'Se ha generado un error');
            console.log(error);
        }
    });
}

function cargarTasasEAyEPL3() {
    $.ajax( {
        type : 'POST',
        url : 'LineaCreditoCuotaFijaTasaVariable',
        async : false,
        data :  {"accion" : 2, "tasa" : $('#txtTasaL3').val(),  "periocidad" : $('#selPeriodoL3').val()},
        success : function (data) {
            $('#txtTasaL3EA').val(data.tasaUnoEA);
            $('#txtTasaL3EP').val(data.tasaDosEP);
        },
        error : function (xml, msg, error) {
            alert('Error Grave', 'Se ha generado un error');
            console.log(error);
        }
    });
}

function cargarTasasEAyNAL3() {
    $.ajax( {
        type : 'POST',
        url : 'LineaCreditoCuotaFijaTasaVariable',
        async : false,
        data :  {"accion" : 3, "tasa" : $('#txtTasaL3').val(),  "periocidad" : $('#selPeriodoL3').val()},
        success : function (data) {
            $('#txtTasaL3EA').val(data.tasaUnoEA);
            $('#txtTasaL3NA').val(data.tasaDosNA);
        },
        error : function (xml, msg, error) {
            alert('Error Grave', 'Se ha generado un error');
            console.log(error);
        }
    });
}


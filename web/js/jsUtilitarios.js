/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function (){
    eventosTodasLasLineas();
    /*$('#botonPrueba').click(function(){
        cargarMunicipios();
    });*/
});

function eventosTodasLasLineas(){
    $('#primeraLinea').change(function (){
           $('#segundaLinea').prop("checked", false);
           $('#terceraLinea').prop("checked", false);
           if($('#contenidoSegundaLinea').is(':visible') || $('#contenidoTerceraLinea').is(':visible')){
               $("#contenidoSegundaLinea").hide(650);
               $('#tblCreditoL2').hide();
               $('#tblInfoClienteT2').hide();
               $('#tblCreditoL3').hide();
               $('#tblInfoClienteT2').hide();
               $("#contenidoTerceraLinea").hide(650);
               $("#contenidoPrimeraLinea").slideToggle( "slow" );
           }else{
               $("#contenidoPrimeraLinea").slideToggle( "slow" );
           }
    });
    
    $('#segundaLinea').change(function (){
           $('#primeraLinea').prop("checked", false);
           $('#terceraLinea').prop("checked", false);
           if($('#contenidoPrimeraLinea').is(':visible') || $('#contenidoTerceraLinea').is(':visible')){
               $("#contenidoPrimeraLinea").hide(650);
               $('#tblInfoClienteT1').hide();
               $('#tblCreditoL1').hide();
               $('#tblCreditoL3').hide();
               $('#tblInfoClienteT3').hide();
               $("#contenidoTerceraLinea").hide(650);
               $( "#contenidoSegundaLinea" ).slideToggle( "slow" );
           }else{
               $( "#contenidoSegundaLinea" ).slideToggle( "slow" );
           }
    });
    
    $('#terceraLinea').change(function (){
           $('#primeraLinea').prop("checked", false);
           $('#segundaLinea').prop("checked", false);
           if($('#contenidoPrimeraLinea').is(':visible') || $('#contenidoSegundaLinea').is(':visible')){
               $("#contenidoPrimeraLinea").hide(650);
               $("#contenidoSegundaLinea").hide(650);
               $('#tblCreditoL1').hide();
               $('#tblInfoClienteT1').hide();
               $('#tblCreditoL2').hide();
               $('#tbodyInfoClienteT2').hide();
               $("#contenidoTerceraLinea").slideToggle( "slow" );
           }else{
               $("#contenidoTerceraLinea").slideToggle( "slow" );
           }
    });
     //Primera línea
     
     $('#txtnombreClienteL1').blur(function(){
        $('.btnimprimirT1').hide();
        $('#tblInfoClienteT1').hide();
        $('#tblCreditoL1').hide();
    });
     
    $('#txtCedulaL1').blur(function(){
        $('#tbodyL1').hide(650);
        if(!validarCampoExpresion('#txtCedulaL1', "^([0-9])*$") && $('#txtCedulaL1').val() != ''){
            mensajeError('#dialogNumeros', '#txtCedulaL1'); 
        }
        $('.btnimprimirT1').hide();
        $('#tblInfoClienteT1').hide();
        $('#tblCreditoL1').hide();
    });
    $('#txtPlazoL1').blur(function(){
        $('#tbodyL1').hide(650);
        if(!validarCampoExpresion('#txtPlazoL1', "^([0-9])*$") && $('#txtPlazoL1').val() != ''){
            mensajeError('#dialogNumeros', '#txtPlazoL1'); 
        }
        if(!validarCampoExpresion('#txtPlazoL1', "^([1-9]||[1-5][0-9]||60)$") && $('#txtPlazoL1').val() != ''){
            mensajeError('#validaciónPlazo', '#txtPlazoL1'); 
        }
        
        $('.btnimprimirT1').hide();
        $('#tblInfoClienteT1').hide();
        $('#tblCreditoL1').hide();
    });
    
    $('#txtMontoL1').blur(function(){
        $('.btnimprimirT1').hide();
        $('#tblInfoClienteT1').hide();
        $('#tblCreditoL1').hide();
    });
    
    
    $('#txtMontoL1').maskMoney({prefix:'$', allowNegative: true, thousands:',', decimal:'.', precision: 2, affixesStay: false});
    
    
    //Segunda línea
    
    $('#txtnombreClienteL2').blur(function(){
        $('.btnimprimirT2').hide();
        $('#tblInfoClienteT2').hide();
        $('#tblCreditoL2').hide();
    });
    
    $('#txtCedulaL2').blur(function(){
        if(!validarCampoExpresion('#txtCedulaL2', "^([0-9])*$") && $('#txtCedulaL2').val() != ''){
            mensajeError('#dialogNumeros', '#txtCedulaL2'); 
        }
        $('.btnimprimirT2').hide();
        $('#tblInfoClienteT2').hide();
        $('#tblCreditoL2').hide();
    });
    
    
    $('#txtPlazoL2').blur(function(){
        if(!validarCampoExpresion('#txtPlazoL2', "^([0-9])*$") && $('#txtPlazoL2').val() != ''){
            mensajeError('#dialogNumeros', '#txtPlazoL2'); 
        }
        if(!validarCampoExpresion('#txtPlazoL2', "^([1-9]||[1-5][0-9]||60)$") && $('#txtPlazoL1').val() != ''){
            mensajeError('#validaciónPlazo', '#txtPlazoL2'); 
        }
        
        $('.btnimprimirT2').hide();
        $('#tblInfoClienteT2').hide();
        $('#tblCreditoL2').hide();
    });

     $('#txtMontoL2').blur(function(){
        $('.btnimprimirT2').hide();
        $('#tblInfoClienteT2').hide();
        $('#tblCreditoL2').hide();
    });

    $('#txtMontoL2').maskMoney({prefix:'$', allowNegative: true, thousands:',', decimal:'.', precision: 2, affixesStay: false});
    
    //Tercera línea
    
    
    $('#txtnombreClienteL3').blur(function(){
        $('.btnimprimirT3').hide();
        $('#tblInfoClienteT3').hide();
        $('#tblCreditoL3').hide();
    });
    
    $('#txtCedulaL3').blur(function(){
            if(!validarCampoExpresion('#txtCedulaL3', "^([0-9])*$") && $('#txtCedulaL3').val() != ''){
            mensajeError('#dialogNumeros', '#txtCedulaL3'); 
        }
        $('.btnimprimirT3').hide();
        $('#tblInfoClienteT3').hide();
        $('#tblCreditoL3').hide();
    });
    
    $('#txtPlazoL3').blur(function(){
        if(!validarCampoExpresion('#txtCedulaL3', "^([0-9])*$") && $('#txtPlazoL3').val() != ''){
            mensajeError('#dialogNumeros', '#txtPlazoL3'); 
        }
        if(!validarCampoExpresion('#txtPlazoL3', "^([1-9]||[1-9][0-9]||1[0-1][0-9]||120)$") && $('#txtPlazoL1').val() != ''){
            mensajeError('#validaciónPlazo', '#txtPlazoL3'); 
        }
        $('.btnimprimirT3').hide();
        $('#tblInfoClienteT3').hide();
        $('#tblCreditoL3').hide();
    });
    
    $('#txtMontoL3').blur(function(){
        $('.btnimprimirT3').hide();
        $('#tblInfoClienteT3').hide();
        $('#tblCreditoL3').hide();
    });
    
    $('#txtMontoL3').maskMoney({prefix:'$', allowNegative: true, thousands:',', decimal:'.', precision: 2, affixesStay: false});
    
    $('#txtDTFL3').mask('0.00');
    
    $('#txtDTFL3').blur(function(){
        calcularTasaL3();
        $('.btnimprimirT3').hide();
        $('#tblInfoClienteT3').hide();
        $('#tblCreditoL3').hide();
    });
    
    $('#txtPuntosL3').blur(function(){
        if(!validarCampoExpresion('#txtPuntosL3', "^([0-9])*$") && $('#txtPuntosL3').val() != ''){
            mensajeError('#dialogNumeros', '#txtPuntosL3'); 
        }
        calcularTasaL3();
        $('.btnimprimirT3').hide();
        $('#tblInfoClienteT3').hide();
        $('#tblCreditoL3').hide();
    });
    
    
    
    $('#idEAL1').hide();
    $('#idNAL1').hide();
    $('#idEPL1').hide();
    
    $('#idEAL2').hide();
    $('#idNAL2').hide();
    $('#idEPL2').hide();
    
    $('#idEAL3').hide();
    $('#idNAL3').hide();
    $('#idEPL3').hide();

}

function calcularTasaL3(){
    if($('#txtTasaL3').is(":visible") ){
        var dtf = parseFloat($('#txtDTFL3').val());
        var puntos = parseFloat($('#txtPuntosL3').val());
        var resultado = puntos+dtf;
        $('#txtTasaL3').val(resultado);   
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

function imprimir() {
    window.print();
}
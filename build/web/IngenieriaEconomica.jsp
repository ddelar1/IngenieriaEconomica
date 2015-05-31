<%-- 
    Document   : IngenieriaEconomica
    Created on : 12/05/2015, 11:49:32 PM
    Author     : Donald
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>IngenieriaEconomica</title>
        <script type="text/javascript" src="js/jquery-1.11.3.js"></script>
        <script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
        
        <link rel="stylesheet" type="text/css" href="js/jsUI/jquery-ui.css">
        <link rel="stylesheet" type="text/css" href="js/jsUI/jquery-ui.min.css">
        <link rel="stylesheet" type="text/css" href="js/jsUI/jquery-ui.structure.css">
        <link rel="stylesheet" type="text/css" href="js/jsUI/jquery-ui.structure.min.css">
        <link rel="stylesheet" type="text/css" href="js/jsUI/jquery-ui.theme.css">
        <link rel="stylesheet" type="text/css" href="js/jsUI/jquery-ui.theme.min.css">
        
        <script type="text/javascript" src="js/jsUI/jquery-ui.js"></script>
        <script type="text/javascript" src="js/jsUI/jquery-ui.min.js"></script> 
        <style type="text/css" media="print">
            .no-print { display: none; }
        </style>
        <script type="text/javascript" src="js/jqueryMask.js"></script>
        <script type="text/javascript" src="js/jqueryMaskMoney.js"></script>
        
        <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.css">
        <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap-theme.min.css">
        <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap-theme.css">
        <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="js/estilosDonald.css">
        <script type="text/javascript" src="js/jsUtilitarios.js"></script>
        <script type="text/javascript" src="js/lineaOrdinariaTradicional.js"></script>
        <script type="text/javascript" src="js/lineaCreditoCuotaFijaTasaFija.js"></script>
        <script type="text/javascript" src="js/lineaCreditoCuotaFijaTasaVariable.js"></script>
        
    </head>
    <body>
        <from>  
                <div class="panel-body">
                  <div class="panel panel-default">
                    <div class="panel-heading no-print">
                        <h1>Compañía de Financiamiento <small>Comercial el Canguro S.A</small></h1>
                    </div>
                    <div class="panel-body">
                        <table id="opcionesIniciales" width="100%">
                              <!-- Navegacion -->
                              <td width="30%">
                                  <div class="well well-lg no-print" >
                                        <h3>TIPOS DE LINEA</h3>        
                                        <table>
                                            <tr>
                                                <td width="15%">
                                                   <input type="checkbox" id="primeraLinea" class="tipoLinea"/>
                                                </td>
                                                <td>
                                                   <h5>ORDINARIA TRADICIONAL</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="15%">
                                                    <input type="checkbox" id="segundaLinea" class="tipoLinea"/>
                                                </td>
                                                <td>
                                                    <h5>CREDITO CUOTA FIJA Y TASA FIJA</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="15%">
                                                    <input type="checkbox" id="terceraLinea" class="tipoLinea"/>
                                                </td>
                                                <td>
                                                    <h5>CREDITO TASA FIJA Y TASA VARIABLE</h5>
                                                </td>
                                            </tr>
                                        </table>
                                  </div>  
                              </td>
                              <td width="70%">
                                  <div id="contenidoPrimeraLinea" style="display:none" class="no-print">
                                      <h3> L&iacute;nea ordinaria tradicional</h3>
                                      <table class="tablaLinea">
                                          <tr>
                                              <td width="200">
                                                  <h4>Nombre Cliente</h4>
                                              </td>
                                              <td>
                                                  <input type='text' id='txtnombreClienteL1' class='inputLinea'/>
                                              </td>
                                              <td>
                                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                              </td>
                                              <td width="200">
                                                  <h4>Cedula</h4>  
                                              </td>
                                              <td>
                                                  <input type='namber' id='txtCedulaL1' class='inputLinea'/>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td width="200">
                                                  <h4>Monto</h4>  
                                              </td>
                                              <td>
                                                  <input type='text' id='txtMontoL1'class='inputLinea'/>
                                              </td>
                                              <td>
                                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                              </td>
                                              <td width="200">
                                                  <h4>Plazo (Meses)</h4>  
                                              </td>
                                              <td>
                                                  <input type='text' id='txtPlazoL1' class='inputLinea' size="3" maxlength="3"/>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <h4>Tipo de Tasa</h4>  
                                              </td>
                                              <td>
                                                  <select id='seltipoTasaL1' class="selectLinea">
                                                      <option value="SEL">Seleccionar</option>
                                                      <option value="EA">Efectivo Anual</option>
                                                      <option value="NA">Nominal Anual</option>
                                                      <option value="EP">Efectivo periodico</option>
                                                  </select>
                                              </td>
                                              <td>
                                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                              </td>
                                              <td width="200">
                                                  <h4>Periodo de pago</h4>  
                                              </td>
                                              <td>
                                                  <select id='selPeriodoL1' class="selectLinea">
                                                      <option value="SEL">Seleccionar</option>
                                                      <option value="opmensual">Mensual</option>
                                                      <option value="opbimestral">Bimestral</option>
                                                      <option value="optrimestral">Trimestral</option>
                                                  </select>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td width="200">
                                                  <h4 style="display: none" id="idLabelTasa">Tasa de Interes</h4>  
                                              </td>
                                              <td>
                                                  <div class="input-group" style="display: none" id='gruopTxtTasaL1'>
                                                      <input type='text' id='txtTasaL1' class='inputLinea' size="3" maxlength="5"/> 
                                                      <span class="input-group-addon">%</span>   
                                                  </div>
                                              </td>
                                          </tr>
                                            <tr id="idEAL1">
                                                <td>
                                                    <h4>Efectivo Anual</h4>
                                                </td>
                                                <td>
                                                    <input type='text' id='txtTasaL1EA' class='inputLinea inputBloqueado' size="3" maxlength="5" disabled="disabled" readonly="readonly"/>  
                                                </td>
                                            </tr>
                                            <tr id="idNAL1">
                                                <td>
                                                    <h4>Nominal Anual</h4>
                                                </td>
                                                <td>
                                                    <input type='text' id='txtTasaL1NA' class='inputLinea inputBloqueado' size="3" maxlength="5" disabled="disabled" readonly="readonly"/>  
                                                </td>
                                            </tr>
                                            <tr id="idEPL1">
                                                <td>
                                                    <h4>Efectivo periodico</h4>    
                                                </td>
                                                <td>
                                                    <input type='text' id='txtTasaL1EP' class='inputLinea inputBloqueado' size="3" maxlength="5" disabled="disabled" readonly="readonly"/>
                                                </td>
                                            </tr>
                                            <tr id="idCalcularCreditoL1" style="display: none">
                                                <td>
                                                    <button type="button" class="btn btn-default btn-lg" id ="btnCalcularCreditoL1">
                                                        <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> Generar Tabla
                                                    </button>
                                                </td>
                                                <td class="btnimprimirT1" style="display: none">
                                                    <button type="button" class="btn btn-default btn-lg" id ="btnCalcularCreditoL1">
                                                        <span class="glyphicon glyphicon-print" aria-hidden="true"></span> Imprimir
                                                    </button>
                                                </td>
                                            </tr>
                                      </table> 
                                  </div>
                                  <div id="contenidoSegundaLinea" style="display:none" class="no-print">
                                      <h3> L&iacute;nea de credito cuota fija y tasa fija</h3>
                                      <table class="tablaLinea">
                                          <tr>
                                              <td width="200">
                                                  <h4>Nombre Cliente</h4>
                                              </td>
                                              <td>
                                                  <input type='text' id='txtnombreClienteL2' class='inputLinea'/>
                                              </td>
                                              <td>
                                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                              </td>
                                              <td width="200">
                                                  <h4>Cedula</h4>  
                                              </td>
                                              <td>
                                                  <input type='text' id='txtCedulaL2' class='inputLinea'/>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td width="200">
                                                  <h4>Monto</h4>  
                                              </td>
                                              <td>
                                                  <input type='text' id='txtMontoL2'class='inputLinea'/>
                                              </td>
                                              <td>
                                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                              </td>
                                              <td width="200">
                                                  <h4>Plazo (Meses)</h4>  
                                              </td>
                                              <td>
                                                  <input type='text' id='txtPlazoL2' class='inputLinea' size="3" maxlength="3"/>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <h4>Tipo de Tasa</h4>  
                                              </td>
                                              <td>
                                                  <select id='seltipoTasaL2' class="selectLinea">
                                                      <option value="SEL">Seleccionar</option>
                                                      <option value="EA">Efectivo Anual</option>
                                                      <option value="NA">Nominal Anual</option>
                                                      <option value="EP">Efectivo periodico</option>
                                                  </select>
                                              </td>
                                              <td>
                                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                              </td>
                                              <td width="200">
                                                  <h4>Periodo de pago</h4>  
                                              </td>
                                              <td>
                                                  <select id='selPeriodoL2' class="selectLinea">
                                                      <option value="SEL">Seleccionar</option>
                                                      <option value="opmensual">Mensual</option>
                                                      <option value="opbimestral">Bimestral</option>
                                                      <option value="optrimestral">Trimestral</option>
                                                  </select>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td width="200">
                                                  <h4 style="display: none" id="idLabelTasaL2">Tasa de Interes</h4>  
                                              </td>
                                              <td>
                                                  <div class="input-group" style="display: none" id='gruopTxtTasaL2' style="display: none">
                                                      <input type='text' id='txtTasaL2' class='inputLinea' size="3" maxlength="5"/>
                                                      <span class="input-group-addon">%</span>   
                                                  </div>
                                              </td>
                                          </tr>
                                            <tr id="idEAL2">
                                                <td>
                                                    <h4>Efectivo Anual</h4>
                                                </td>
                                                <td>
                                                    <input type='text' id='txtTasaL2EA' class='inputLinea inputBloqueado' size="3" maxlength="5" disabled="disabled" readonly="readonly"/>
                                                </td>
                                            </tr>
                                            <tr id="idNAL2">
                                                <td>
                                                    <h4>Nominal Anual</h4>
                                                </td>
                                                <td>
                                                    <input type='text' id='txtTasaL2NA' class='inputLinea inputBloqueado' size="3" maxlength="5" disabled="disabled" readonly="readonly"/>
                                                </td>
                                            </tr>
                                            <tr id="idEPL2">
                                                <td>
                                                    <h4>Efectivo periodico</h4>    
                                                </td>
                                                <td>
                                                    <input type='text' id='txtTasaL2EP' class='inputLinea inputBloqueado' size="3" maxlength="5" disabled="disabled" readonly="readonly"/>
                                                </td>
                                            </tr>
                                            <tr id="idCalcularCreditoL2" style="display: none">
                                                <td>
                                                    <button type="button" class="btn btn-default btn-lg" id ="btnCalcularCreditoL2">
                                                        <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> Generar Tabla
                                                    </button>
                                                </td>
                                                <td class="btnimprimirT2" style="display: none">
                                                    <button type="button" class="btn btn-default btn-lg" id ="btnCalcularCreditoL1">
                                                        <span class="glyphicon glyphicon-print" aria-hidden="true"></span> Imprimir
                                                    </button>
                                                </td>
                                            </tr>
                                      </table>
                                  </div>
                                  <div id="contenidoTerceraLinea" style="display:none" class="no-print">
                                      <h3> L&iacute;nea de credito cuota fija y tasa variable</h3>
                                      <table class="tablaLinea">
                                          <tr>
                                              <td width="200">
                                                  <h4>Nombre Cliente</h4>
                                              </td>
                                              <td>
                                                  <input type='text' id='txtnombreClienteL3' class='inputLinea'/>
                                              </td>
                                              <td>
                                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                              </td>
                                              <td width="200">
                                                  <h4>Cedula</h4>  
                                              </td>
                                              <td>
                                                  <input type='text' id='txtCedulaL3' class='inputLinea'/>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td width="200">
                                                  <h4>Monto</h4>  
                                              </td>
                                              <td>
                                                  <input type='text' id='txtMontoL3'class='inputLinea'/>
                                              </td>
                                              <td>
                                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                              </td>
                                              <td width="200">
                                                  <h4>Plazo (Meses)</h4>  
                                              </td>
                                              <td>
                                                  <input type='text' id='txtPlazoL3' class='inputLinea' size="3" maxlength="3"/>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td width="200">
                                                  <h4>DTF</h4>  
                                              </td>
                                              <td>
                                                  <input type='text' id='txtDTFL3'class='inputLinea' size="3" maxlength="3"/>
                                              </td>
                                              <td>
                                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                              </td>
                                              <td width="200">
                                                  <h4>Puntos</h4>  
                                              </td>
                                              <td>
                                                  <input type='text' id='txtPuntosL3' class='inputLinea' size="3" maxlength="3"/>
                                              </td>
                                          </tr>
                                          <tr>
                                              <tr>
                                              <td>
                                                  <h4>Tipo de Tasa</h4>  
                                              </td>
                                              <td>
                                                  <select id='seltipoTasaL3' class="selectLinea">
                                                      <option value="SEL">Seleccionar</option>
                                                      <option value="EA">Efectivo Anual</option>
                                                      <option value="NA">Nominal Anual</option>
                                                      <option value="EP">Efectivo periodico</option>
                                                  </select>
                                              </td>
                                              <td>
                                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                              </td>
                                              <td width="200">
                                                  <h4>Periodo de pago</h4>  
                                              </td>
                                              <td>
                                                  <select id='selPeriodoL3' class="selectLinea">
                                                      <option value="SEL">Seleccionar</option>
                                                      <option value="opmensual">Mensual</option>
                                                      <option value="opbimestral">Bimestral</option>
                                                      <option value="optrimestral">Trimestral</option>
                                                  </select>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td width="200">
                                                  <h4 style="display: none" id="idLabelTasaL3">Tasa de Interes</h4>  
                                              </td>
                                              <td>
                                                  <div class="input-group" style="display: none" id='gruopTxtTasaL3'>
                                                      <input type='text' id='txtTasaL3' class='inputLinea inputBloqueado' size="3" maxlength="5"/>
                                                      <span class="input-group-addon">%</span>   
                                                  </div>
                                              </td>
                                          </tr>
                                            <tr id="idEAL3">
                                                <td>
                                                    <h4>Efectivo Anual</h4>
                                                </td>
                                                <td>
                                                    <input type='text' id='txtTasaL3EA' class='inputLinea inputBloqueado' size="3" maxlength="5" disabled="disabled" readonly="readonly"/>
                                                </td>
                                            </tr>
                                            <tr id="idNAL3">
                                                <td>
                                                    <h4>Nominal Anual</h4>
                                                </td>
                                                <td>
                                                    <input type='text' id='txtTasaL3NA' class='inputLinea inputBloqueado' size="3" maxlength="5" disabled="disabled" readonly="readonly"/>
                                                </td>
                                            </tr>
                                            <tr id="idEPL3">
                                                <td>
                                                    <h4>Efectivo periodico</h4>    
                                                </td>
                                                <td>
                                                    <input type='text' id='txtTasaL3EP' class='inputLinea inputBloqueado' size="3" maxlength="5" disabled="disabled" readonly="readonly"/>
                                                </td>
                                            </tr>
                                            <tr id="idCalcularCreditoL3" style="display: none">
                                                <td>
                                                    <button type="button" class="btn btn-default btn-lg" id ="btnCalcularCreditoL3">
                                                        <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> Generar Tabla
                                                    </button>
                                                </td>
                                                <td class="btnimprimirT3" style="display: none">
                                                    <button type="button" class="btn btn-default btn-lg" id ="btnCalcularCreditoL1">
                                                        <span class="glyphicon glyphicon-print" aria-hidden="true"></span> Imprimir
                                                    </button>
                                                </td>
                                            </tr>
                                      </table>
                                  </div>
                              </td>
                           </tr>
                      </table>
                    <table width="100%">
                        <td width="30%">
                        </td>
                        <td width="70%">
                             <div id="tblInfoClienteT1" class="panel panel-default" style="display: none">
                                <!-- Default panel contents -->
                                <div class="panel-heading">Informacion Cliente</div>
                                <!-- Table -->
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Nombre del Cliente</th>
                                            <th>Cedula</th>
                                            <th>Monto</th>
                                            <th>Plazo</th>
                                            <th>Tipo de tasa</th>
                                            <th>Tasa</th>
                                            <th>Periodo</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbodyInfoClienteT1">
                                       
                                    </tbody>
                                </table>
                            </div>
                             <div id="tblCreditoL1" class="panel panel-default" style="display: none">
                                <!-- Default panel contents -->
                                <div class="panel-heading">Simulación del credito</div>
                                <!-- Table -->
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Periodo</th>
                                            <th>Fecha</th>
                                            <th>Saldo a Capital</th>
                                            <th>Amortizaci&oacute;n</th>
                                            <th>Intereses</th>
                                            <th>Segudo de Vida</th>
                                            <th>Total a pagar</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbodyL1">

                                    </tbody>
                                </table>
                            </div>
                            <div id="tblInfoClienteT2" class="panel panel-default" style="display: none">
                                <!-- Default panel contents -->
                                <div class="panel-heading">Informacion Cliente</div>
                                <!-- Table -->
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Nombre del Cliente</th>
                                            <th>Cedula</th>
                                            <th>Monto</th>
                                            <th>Plazo</th>
                                            <th>Tipo de tasa</th>
                                            <th>Tasa</th>
                                            <th>Periodo</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbodyInfoClienteT2">
                                       
                                    </tbody>
                                </table>
                            </div>
                            <div id="tblCreditoL2" class="panel panel-default" style="display: none">
                                <!-- Default panel contents -->
                                <div class="panel-heading">Simulación del credito</div>
                                <!-- Table -->
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Periodo</th>
                                            <th>Fecha</th>
                                            <th>Saldo a Capital</th>
                                            <th>Cuota Fija</th>
                                            <th>Amortizaci&oacute;n</th>
                                            <th>Intereses</th>
                                            <th>Segudo de Vida</th>
                                            <th>Total a pagar</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbodyL2">

                                    </tbody>
                                </table>
                            </div>
                            <div id="tblInfoClienteT3" class="panel panel-default" style="display: none">
                                <!-- Default panel contents -->
                                <div class="panel-heading">Informacion Cliente</div>
                                <!-- Table -->
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Nombre del Cliente</th>
                                            <th>Cedula</th>
                                            <th>Monto</th>
                                            <th>Plazo</th>
                                            <th>Tipo de tasa</th>
                                            <th>Tasa</th>
                                            <th>Periodo</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbodyInfoClienteT3">
                                       
                                    </tbody>
                                </table>
                            </div>
                            <div id="tblCreditoL3" class="panel panel-default" style="display: none">
                                <!-- Default panel contents -->
                                <div class="panel-heading">Simulación del credito</div>
                                <!-- Table -->
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Periodo</th>
                                            <th>Fecha</th>
                                            <th>Saldo a Capital</th>
                                            <th>Cuota Fija</th>
                                            <th>Amortizaci&oacute;n</th>
                                            <th>Intereses</th>
                                            <th>Segudo de Vida</th>
                                            <th>Total a pagar</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbodyL3">

                                    </tbody>
                                </table>
                            </div>
                     </td>
                    </table>  
                    </div>
                  </div>
                </div>
            <div id="dialogValTasa" title="Error" style='display: none'>
                <p>
                  Ingrese una tasa correcta separada por un punto. Ejemplo (2.0 - 10.8 - 34.89).
                </p>
            </div>
            <div id="dialogNumeros" title="Error" style='display: none'>
                <p>
                  Solo debe ingresar numeros.
                </p>
            </div>
            <div id="validarDatosLinea" title="Error" style='display: none'>
                <p>
                    Para generar el calculo, por favor ingrese todos los datos de la l&iacute;nea seleccionada.
                </p>
            </div>
            <div id="validaciónPlazo" title="Error" style='display: none'>
                <p>
                    Para generar el calculo, por favor ingrese entre 1 a 60 meses.
                </p>
            </div>
        </from>
    </body>
</html>

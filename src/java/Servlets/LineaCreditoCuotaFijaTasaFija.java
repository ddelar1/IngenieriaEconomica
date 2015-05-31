/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package Servlets;

import Servlets.Utilities.Utilities;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.DecimalFormat;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 *
 * @author Donald
 */
public class LineaCreditoCuotaFijaTasaFija extends HttpServlet {

    private static final String CONTENT_TYPE_JSON = "aplication/json; charset=utf-8";
    private Utilities u = new Utilities();
    DecimalFormat df = new DecimalFormat("##.##");
    DecimalFormat dfnumeros = new DecimalFormat("###,###.00");
    
    public void service(HttpServletRequest request, HttpServletResponse response) throws ServletException {
        String accion = request.getParameter("accion");
        try{
            switch(new Integer(accion).intValue()){
                case 1:    
                cargartiposTasaNAyEPL2(request, response);
                break;
                case 2:    
                cargartiposTasaEAyEPL2(request, response);
                break;
                case 3:    
                cargartiposTasaEAyNAL2(request, response);
                break;
                case 4:    
                cargarTablaL2(request, response);
                break;
            }
        }catch (Exception e){
            e.printStackTrace();
        }
    }
    
    public void cargartiposTasaNAyEPL2(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, Exception{
        JSONObject jsonrespuesta = new JSONObject();
        String tasa = request.getParameter("tasa");
        String periocidad = request.getParameter("periocidad");
        double tasaUnoNA = 0.0;
        double tasaDosEP = 0.0;
        switch (periocidad) {
            case "opmensual":
                tasaDosEP = u.calcularTasaEfectivoPeriodico(30, Double.valueOf(tasa));
                tasaUnoNA = u.calcularTasaNominalAnual(12, tasaDosEP);
                break;
            case "opbimestral":
                tasaDosEP = u.calcularTasaEfectivoPeriodico(60, Double.valueOf(tasa));
                tasaUnoNA = u.calcularTasaNominalAnual(6, tasaDosEP);
                break;
            case "optrimestral":
                tasaDosEP = u.calcularTasaEfectivoPeriodico(90, Double.valueOf(tasa));
                tasaUnoNA = u.calcularTasaNominalAnual(4, tasaDosEP);
                break;
        }
        jsonrespuesta.put("tasaUnoNA", df.format(tasaUnoNA));
        jsonrespuesta.put("tasaDosEP", df.format(tasaDosEP));
        responderJSON(response, jsonrespuesta);
    }
    
    public void cargartiposTasaEAyEPL2(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, Exception{
        JSONObject jsonrespuesta = new JSONObject();
        String tasa = request.getParameter("tasa");
        String periocidad = request.getParameter("periocidad");
        double tasaUnoEA = 0.0;
        double tasaDosEP = 0.0;
        switch (periocidad) {
            case "opmensual":
                tasaUnoEA = u.calcularTasaEfectivaAnual(30, Double.valueOf(tasa), 12);
                tasaDosEP = u.calcularTasaEfectivoPeriodico(30, tasaUnoEA);
                break;
            case "opbimestral":
                tasaUnoEA = u.calcularTasaEfectivaAnual(60, Double.valueOf(tasa), 6);
                tasaDosEP = u.calcularTasaEfectivoPeriodico(60, tasaUnoEA);
                break;
            case "optrimestral":
                tasaUnoEA = u.calcularTasaEfectivaAnual(90, Double.valueOf(tasa),4);
                tasaDosEP = u.calcularTasaEfectivoPeriodico(90, tasaUnoEA);
                break;
        }
        jsonrespuesta.put("tasaUnoEA", df.format(tasaUnoEA));
        jsonrespuesta.put("tasaDosEP", df.format(tasaDosEP));
        responderJSON(response, jsonrespuesta);
    }
    
    public void cargartiposTasaEAyNAL2(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, Exception{
        JSONObject jsonrespuesta = new JSONObject();
        String tasa = request.getParameter("tasa");
        String periocidad = request.getParameter("periocidad");
        double tasaUnoEA = 0.0;
        double tasaDosNA = 0.0;
        switch (periocidad) {
            case "opmensual":
                tasaDosNA = u.calcularTasaNominalAnual(12, Double.valueOf(tasa));
                tasaUnoEA = u.calcularTasaEfectivaAnual(30, tasaDosNA,12);
                break;
            case "opbimestral":
                tasaDosNA = u.calcularTasaNominalAnual(6, Double.valueOf(tasa));
                tasaUnoEA = u.calcularTasaEfectivaAnual(60, tasaDosNA,6);
                break;
            case "optrimestral":
                tasaDosNA = u.calcularTasaNominalAnual(4, Double.valueOf(tasa));
                tasaUnoEA = u.calcularTasaEfectivaAnual(90, tasaDosNA,4);
                break;
        }
        jsonrespuesta.put("tasaUnoEA", df.format(tasaUnoEA));
        jsonrespuesta.put("tasaDosNA", df.format(tasaDosNA));
        responderJSON(response, jsonrespuesta);
    }
    public void cargarTablaL2(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, Exception{
        JSONObject jsonrespuesta = new JSONObject();
        JSONArray datosL1List = new JSONArray();
        JSONArray datosL1ListSalida = new JSONArray();
        double capital = Double.parseDouble(request.getParameter("capital"));
        double plazo = Double.parseDouble(request.getParameter("plazo"));
        double tasa = Double.parseDouble(request.getParameter("tasa"));
        double periocidad = Double.parseDouble(request.getParameter("periocidad"));
        double cantidadMeses = Double.parseDouble(request.getParameter("cantidadMeses"));
        
        double cantidadMesesCiclo = plazo/cantidadMeses;
        datosL1List = u.cargarDatosTablaL2L3(capital, cantidadMesesCiclo, tasa, periocidad);
        for (int i = 0; i < datosL1List.length(); i++) {
            JSONObject jo = new JSONObject();
            jo.put("saldoCapital",dfnumeros.format(datosL1List.getJSONObject(i).get("saldoCapital")));
            jo.put("cuotafija", dfnumeros.format(datosL1List.getJSONObject(i).get("cuotafija")));
            jo.put("intereses", dfnumeros.format(datosL1List.getJSONObject(i).get("intereses")));
            jo.put("amortizacionCapital", dfnumeros.format(datosL1List.getJSONObject(i).get("amortizacionCapital")));
            jo.put("SeguroVida", dfnumeros.format(datosL1List.getJSONObject(i).get("SeguroVida")));
            jo.put("totalPagar", dfnumeros.format(datosL1List.getJSONObject(i).get("totalPagar")));
            datosL1ListSalida.put(jo);
        }
        jsonrespuesta.put("datosL2", datosL1ListSalida);
        responderJSON(response, jsonrespuesta);
    }
    
    
    public void responderJSON(HttpServletResponse response, JSONObject json){
          try{ 
                response.setContentType(CONTENT_TYPE_JSON);
                PrintWriter out = response.getWriter();
                out.print(json.toString());
          } catch(Exception e){
                e.getStackTrace();
          }
    }    
}

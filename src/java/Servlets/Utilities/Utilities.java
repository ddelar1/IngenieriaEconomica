/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlets.Utilities;

import java.text.DecimalFormat;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 *
 * @author Donald
 */
public class Utilities {

    
    
    public double calcularTasaEfectivaAnual(double meses, double interesPeriodico, int periocidad) {
        double respuesta = 0.0;
        try {
            interesPeriodico /= 100;
            interesPeriodico /= periocidad;
            respuesta = (Math.pow(1 + interesPeriodico, (360 / meses))) - 1;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return respuesta * 100;
    }

    public double calcularTasaNominalAnual(double meses, double efectivoPeriodico) {
        double respuesta = 0.0;
        try {
            respuesta = efectivoPeriodico * meses;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return respuesta;
    }

    public double calcularTasaEfectivoPeriodico(double meses, double interesEfectivo) {
        double respuesta = 0.0;
        double tasa = 0.0;
        try {
            tasa = interesEfectivo / 100;
            respuesta = (Math.pow((1 + tasa), (meses / 360))) - 1;
            respuesta *= 100;

        } catch (Exception e) {
            e.printStackTrace();
        }
        return respuesta;
    }

    public double calcularSeguroVida5x1000(double saldoCapital) {
        double respuesta = 0.0;
        try {
            respuesta = (5 * saldoCapital) / 1000;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return respuesta;
    }

    public double calcularCapitalL1(double capital, double amortizacionCapital) {
        double respuesta = 0.0;
        try {
            respuesta = capital - amortizacionCapital;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return respuesta;
    }

    public double calcularAmortizacionCapitalL1(double capital, double periocidad) {
        double respuesta = 0.0;
        try {
            respuesta = capital / periocidad;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return respuesta;
    }

    public double calcularInteres(double capital, double tasaPeriodica) {
        double respuesta = 0.0;
        try {
            tasaPeriodica /= 100;
            respuesta = capital * tasaPeriodica;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return respuesta;
    }

    public double calcularToltaPagar(double amortizacion, double intereses, double seguroVida, int modo, double capital) {
        double respuesta = 0.0;
        try {
            if (modo == 0) {
                respuesta = capital - seguroVida;
            } else if (modo == 1) {
                respuesta = amortizacion + intereses + seguroVida;
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return respuesta;
    }

    public double calcularCuotaFija(double tasaPeriodica, double cantidadMeses, double capital) {
        double respuesta = 0.0;
        double operacionArriba = 0.0;
        double operacionAbajo = 0.0;
        try {
            tasaPeriodica/=100;
            operacionArriba = (Math.pow(1+tasaPeriodica, cantidadMeses)) * tasaPeriodica;
            operacionAbajo = (Math.pow(1+tasaPeriodica, cantidadMeses)) -1;
            respuesta = capital * (operacionArriba / operacionAbajo);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return respuesta;
    }
    
    public double calcularAmortizacionL2(double cuotaFija, double intereses){
        double respuesta = 0.0;
        try {
            respuesta = cuotaFija - intereses;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return respuesta;
    }
    
     public double calcularCapital2(double capital, double amortizacion){
        double respuesta = 0.0;
        try {
            respuesta = capital - amortizacion;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return respuesta;
    }

    public JSONArray cargarDatosTablaL1(double capital, double cantidadMesesCiclo, double tasa, double periocidad) {
        JSONArray datosList = new JSONArray();
        JSONObject datoInfo = new JSONObject();
        double amortizacion = 0.0;
        double capitalAux = 0.0;
        double tasaAux = 0.0;
        try {
            datoInfo.put("saldoCapital", capital);
            datoInfo.put("amortizacionCapital", 0);
            datoInfo.put("intereses", 0);
            datoInfo.put("SeguroVida", this.calcularSeguroVida5x1000(capital));
            datoInfo.put("totalPagar", this.calcularToltaPagar(datoInfo.getDouble("amortizacionCapital"), datoInfo.getDouble("intereses"), datoInfo.getDouble("SeguroVida"), 0, capital));
            datosList.put(datoInfo);
            if (cantidadMesesCiclo > 1) {
                amortizacion = this.calcularAmortizacionCapitalL1(capital, cantidadMesesCiclo);
                capitalAux = capital;
                tasaAux = tasa;
                for (int i = 1; i <= cantidadMesesCiclo; i++) {
                    JSONObject datoInfoOtros = new JSONObject();
                    datoInfoOtros.put("saldoCapital", (capitalAux - amortizacion));
                    datoInfoOtros.put("intereses", this.calcularInteres(capitalAux, tasa));
                    datoInfoOtros.put("amortizacionCapital", amortizacion);
                    datoInfoOtros.put("SeguroVida", this.calcularSeguroVida5x1000(datoInfoOtros.getDouble("saldoCapital")));
                    datoInfoOtros.put("totalPagar", this.calcularToltaPagar(amortizacion, datoInfoOtros.getDouble("intereses"), datoInfoOtros.getDouble("SeguroVida"), 1, datoInfoOtros.getDouble("saldoCapital")));
                    capitalAux = datoInfoOtros.getDouble("saldoCapital");
                    tasaAux = datoInfoOtros.getDouble("intereses");
                    datosList.put(datoInfoOtros);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return datosList;
    }

    public JSONArray cargarDatosTablaL2L3(double capital, double cantidadMesesCiclo, double tasa, double periocidad) {
        JSONArray datosList = new JSONArray();
        JSONObject datoInfo = new JSONObject();
        double cuotaFija = 0.0;
        double capitalAux = 0.0;
        double tasaAux = 0.0;
        try {
            datoInfo.put("saldoCapital", capital);
            datoInfo.put("cuotafija", 0);
            datoInfo.put("amortizacionCapital", 0);
            datoInfo.put("intereses", 0);
            datoInfo.put("SeguroVida", this.calcularSeguroVida5x1000(capital));
            datoInfo.put("totalPagar", this.calcularToltaPagar(datoInfo.getDouble("amortizacionCapital"), datoInfo.getDouble("intereses"), datoInfo.getDouble("SeguroVida"), 0, capital));
            datosList.put(datoInfo);
            if (cantidadMesesCiclo > 1) {
                cuotaFija = this.calcularCuotaFija(tasa, cantidadMesesCiclo, capital);
                capitalAux = capital;
                tasaAux = tasa;
                for (int i = 1; i <= cantidadMesesCiclo; i++) {
                    JSONObject datoInfoOtros = new JSONObject();
                    datoInfoOtros.put("cuotafija", cuotaFija);
                    datoInfoOtros.put("intereses", this.calcularInteres(capitalAux, tasa));
                    datoInfoOtros.put("amortizacionCapital", this.calcularAmortizacionL2(cuotaFija, datoInfoOtros.getDouble("intereses")));
                    datoInfoOtros.put("saldoCapital", this.calcularCapital2(capitalAux, datoInfoOtros.getDouble("amortizacionCapital")));
                    datoInfoOtros.put("SeguroVida", this.calcularSeguroVida5x1000(datoInfoOtros.getDouble("saldoCapital")));
                    datoInfoOtros.put("totalPagar", this.calcularToltaPagar(datoInfoOtros.getDouble("amortizacionCapital"), datoInfoOtros.getDouble("intereses"), datoInfoOtros.getDouble("SeguroVida"), 1, datoInfoOtros.getDouble("saldoCapital")));
                    capitalAux = datoInfoOtros.getDouble("saldoCapital");
                    tasaAux = datoInfoOtros.getDouble("intereses");
                    datosList.put(datoInfoOtros);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return datosList;
    }
    
    

}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package DTO;

/**
 *
 * @author Donald
 */
public class DTOLineaOrdinariaTradicional {

    private double saldoCapital;
    private double amortizacionCapital;
    private double Intereses;
    private double seguroVida;
    private double totalPagar;

    public DTOLineaOrdinariaTradicional(double saldoCapital, double amortizacionCapital, double Intereses, double seguroVida, double totalPagar) {
        this.saldoCapital = saldoCapital;
        this.amortizacionCapital = amortizacionCapital;
        this.Intereses = Intereses;
        this.seguroVida = seguroVida;
        this.totalPagar = totalPagar;
    }

    public double getSaldoCapital() {
        return saldoCapital;
    }

    public void setSaldoCapital(double saldoCapital) {
        this.saldoCapital = saldoCapital;
    }

    public double getAmortizacionCapital() {
        return amortizacionCapital;
    }

    public void setAmortizacionCapital(double amortizacionCapital) {
        this.amortizacionCapital = amortizacionCapital;
    }

    public double getIntereses() {
        return Intereses;
    }

    public void setIntereses(double Intereses) {
        this.Intereses = Intereses;
    }

    public double getSeguroVida() {
        return seguroVida;
    }

    public void setSeguroVida(double seguroVida) {
        this.seguroVida = seguroVida;
    }

    public double getTotalPagar() {
        return totalPagar;
    }

    public void setTotalPagar(double totalPagar) {
        this.totalPagar = totalPagar;
    }
}

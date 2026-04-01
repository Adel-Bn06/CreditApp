using CreditApp.Models;
using System;
using System.Collections.Generic;

namespace CreditApp.Services
{
    public class CreditService : ICreditService
    {
        public SimulationResponse Simulate(SimulationRequest request)
        {
            decimal montantNet = request.MontantAchat - request.FondsPropres;
            decimal tauxMensuel = request.TauxAnnuel / 100 / 12;
            int duree = request.Duree;

            decimal mensualiteTheorique = montantNet * tauxMensuel / (1 - (decimal)Math.Pow((double)(1 + tauxMensuel), -duree));
            decimal mensualite = Math.Round(mensualiteTheorique, 2);

            var table = new List<AmortizationRow>();
            decimal solde = montantNet;

            for (int i = 1; i <= duree; i++)
            {
                decimal interet = Math.Round(solde * tauxMensuel, 2);
                decimal capital = mensualite - interet;

                if (i == duree)
                {
                    capital = solde;
                    mensualite = Math.Round(capital + interet, 2);
                }

                decimal soldeFin = solde - capital;

                table.Add(new AmortizationRow
                {
                    Periode = i,
                    SoldeDebut = Math.Round(solde, 2),
                    Mensualite = mensualite,
                    Interet = interet,
                    CapitalRembourse = Math.Round(capital, 2),
                    SoldeFin = Math.Round(soldeFin, 2)
                });

                solde = soldeFin;
            }

            return new SimulationResponse
            {
                MontantNet = montantNet,
                Mensualite = mensualite,
                Tableau = table
            };
        }
    }
}
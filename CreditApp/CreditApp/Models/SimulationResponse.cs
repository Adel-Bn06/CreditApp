using System.Collections.Generic;


namespace CreditApp.Models
{
    public class SimulationResponse
    {
        public decimal MontantNet { get; set; }
        public decimal Mensualite { get; set; }

        public List<AmortizationRow> Tableau { get; set; }
    }
}
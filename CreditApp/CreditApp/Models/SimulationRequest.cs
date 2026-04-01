
namespace CreditApp.Models
{
    public class SimulationRequest
    {
        public decimal MontantAchat { get; set; } 
        public decimal FondsPropres { get; set; } 
        public int Duree { get; set; }            
        public decimal TauxAnnuel { get; set; }   
    }
}
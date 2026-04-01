using CreditApp.Models;

namespace CreditApp.Services
{
    internal interface ICreditService
    {
        SimulationResponse Simulate(SimulationRequest request);
    }
}

using CreditApp.Models;
using CreditApp.Services;
using System.Web.Http;

namespace CreditApp.Controllers
{
    [RoutePrefix("api/credit")]
    public class CreditController : ApiController
    {
        private readonly CreditService _service = new CreditService();

        [HttpPost]
        [Route("simulate")]
        public IHttpActionResult Simulate(SimulationRequest request)
        {
            var result = _service.Simulate(request);
            return Ok(result);
        }
    }
}
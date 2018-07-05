using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ReportGeneratorService.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ReportsController : ApiController
    {
        // GET api/Reports
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/Reports/5
        public string Get(int id)
        {
            return "value";
        }   
    }
}

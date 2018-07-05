using ReportGeneratorService.Models;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ReportGeneratorService.Controllers
{
    public class MissionsExecutionController : ApiController
    {
        // GET api/MissionsExecution
        public IEnumerable<MissionInfo> Get()
        {
            return Dal.ReportsRepository.GetExecutedMissions();
        }

        // GET api/MissionsExecution/5
        public List<ExecutedStepsStatus> Get(int id)
        {
            return Dal.ReportsRepository.GetExecutedMissionStepsStatuses(id);
        }
    }
}

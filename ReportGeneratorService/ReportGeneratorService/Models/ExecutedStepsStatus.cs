using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReportGeneratorService.Models
{
    public class ExecutedStepsStatus
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string TypeName { get; set; }
        public List<ExecutedStepsStatusInfo> StatusInfo { get; set; }
    }
}
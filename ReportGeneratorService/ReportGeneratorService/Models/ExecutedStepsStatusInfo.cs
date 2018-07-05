using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReportGeneratorService.Models
{
    public class ExecutedStepsStatusInfo
    {
        public int IterationsNumber { get; set; }
        public DateTime? StartAt { get; set; }
        public DateTime? EndAt { get; set; }
        public int StatusID { get; set; }
        //public int FromStepID { get; set; }
        //public string FromStepName { get; set; }
    }
}
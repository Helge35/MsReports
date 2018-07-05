using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReportGeneratorService.Models
{
    public class ExecMissionInfo
    {
        public int ExecutionID { get; set; }
        public DateTime? StartAt { get; set; }
        public DateTime? EndAt { get; set; }
    }
}
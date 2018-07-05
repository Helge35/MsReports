using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReportGeneratorService.Models
{
    public class MissionInfo
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public List< ExecMissionInfo> ExecutionInfo { get; set; }
    }
}
//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ReportGeneratorService.Dal.EF
{
    using System;
    using System.Collections.Generic;
    
    public partial class Step
    {
        public Step()
        {
            this.ExecutedSteps = new HashSet<ExecutedStep>();
        }
    
        public int ID { get; set; }
        public Nullable<int> MissionPlanID { get; set; }
        public Nullable<int> StepTypeID { get; set; }
        public string Title { get; set; }
        public Nullable<bool> IsOpperator { get; set; }
        public string StepProperties { get; set; }
        public Nullable<bool> IsDeleted { get; set; }
        public Nullable<int> StepErrorTreatmentTypeID { get; set; }
        public Nullable<int> StepErrorTreatmentRetryCount { get; set; }
    
        public virtual ICollection<ExecutedStep> ExecutedSteps { get; set; }
        public virtual MissionPlan MissionPlan { get; set; }
        public virtual StepType StepType { get; set; }
    }
}

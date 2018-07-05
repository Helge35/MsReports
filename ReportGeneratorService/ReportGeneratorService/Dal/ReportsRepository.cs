
using ReportGeneratorService.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ReportGeneratorService.Dal
{
    public static class ReportsRepository
    {
        public static IEnumerable<MissionInfo> GetExecutedMissions()
        {
            using (var context = new Dal.EF.ReportsDBEntities())
            {
                List<MissionInfo> missions = new List<MissionInfo>();
                var missionsDB = context.MissionPlans.Include("ExecutedMissions").Select(m => new { ID = m.ID, Name = m.Title, ExecMissions = m.ExecutedMissions });

                foreach (var miss in missionsDB)
                {
                    var mission = new MissionInfo();
                    mission.ID = miss.ID;
                    mission.Name = miss.Name;
                    mission.ExecutionInfo = new List<ExecMissionInfo>();
                    miss.ExecMissions.ToList().ForEach(e => mission.ExecutionInfo.Add(new ExecMissionInfo { ExecutionID = e.ID, StartAt = e.StartedAt, EndAt = e.EndedAt }));

                    missions.Add(mission);
                }
                return missions;
            }
        }

        public static List<ExecutedStepsStatus> GetExecutedMissionStepsStatuses(int id)
        {
            using (var context = new Dal.EF.ReportsDBEntities())
            {
                List<ExecutedStepsStatus> steps = new List<ExecutedStepsStatus>();
                //var stepsDB = context.Steps.Include("ExecutedSteps.ExecutedStepStatuses").Include("StepType")
                //    .Select(s => new { ID= s.ID, Name = s.Title, StepType = s.StepType.DisplayedName, s.ExecutedSteps });

                var stepsDBs = context.ExecutedMissions
                    .Where(s => s.ID == id).SelectMany(s => s.MissionPlan.Steps);

                var stepsDBStatuses = context.ExecutedSteps.Include("ExecutedStepStatuses")
                    .Where(s => s.ExecutedMissionID == id);

                foreach (var st in stepsDBs)
                {
                    ExecutedStepsStatus status = new ExecutedStepsStatus();
                    status.ID = st.ID;
                    status.Name = st.Title;
                    status.TypeName = st.StepType.DisplayedName;
                    status.StatusInfo = new List<ExecutedStepsStatusInfo>();

                    foreach (var info in stepsDBStatuses.Where(s=> s.StepID== st.ID).SelectMany(x=>x.ExecutedStepStatuses))
                    {
                        status.StatusInfo.Add(new ExecutedStepsStatusInfo
                        {
                            IterationsNumber = info.IterationNumber.GetValueOrDefault(0),
                            EndAt = info.EndedAt.GetValueOrDefault(),
                            StartAt = info.StartedAt.GetValueOrDefault(),
                            StatusID = info.StatusID.GetValueOrDefault(0)
                        });
                    }
                    steps.Add(status);
                }

                return steps;
            }
        }
    }
}
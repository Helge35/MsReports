export class MissionExecInfo {
    ID: number;
    Name: string;
    ExecutionInfo: [{
        ExecutionID: number,
        StartAt: Date,
        EndAt: Date,
    }
    ]

}
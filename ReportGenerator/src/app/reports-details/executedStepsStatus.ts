export class ExecutedStepsStatus {
    ID: number;
    Name: string;
    TypeName: string;
    StatusInfo: [{
        IterationsNumber: number;
        StartAt: Date;
        EndAt: Date;
        StatusID: number;
    }];

}
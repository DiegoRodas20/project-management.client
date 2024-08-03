export interface EventLog {
    LogType: string;
    AppName: string;
    CreatedDate: Date;
    ResourceUrl: string;
    Message: string;
    StackTrace: string;
}
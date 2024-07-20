export interface EventLog {
    _id: string;
    LogType: string;
    AppName: string;
    CreatedDate: string;
    ResourceUrl: string;
    Message: string;
    StackTrace: string;
    __v?: number;
}
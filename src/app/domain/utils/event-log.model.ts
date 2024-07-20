export interface EventLog {
    _id: string;
    LogType: 'INFO' | 'ERROR';
    AppName: string;
    CreatedDate: string;
    ResourceUrl: string;
    Message: string;
    StackTrace: string;
    __v?: number;
}
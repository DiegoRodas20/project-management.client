import { EventLog } from "./event-log";
import { CustomResponse } from "./custom-response";

export abstract class IUtilsRepository {

    abstract getEventsLogs(): Promise<CustomResponse<EventLog[]>>
}
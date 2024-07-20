import { EventLog } from "./event-log.model";
import { Response } from "./response.model";

export abstract class IUtilsRepository {

    abstract getEventsLog(): Promise<Response<EventLog[]>>

}
import { UseCasePromise } from "app/application/base/use-case-promise.base";
import { CustomResponse } from "app/domain/utils/custom-response";
import { EventLog } from "app/domain/utils/event-log";

export abstract class GetEventsLogsQuery implements UseCasePromise<null, EventLog[]> {

    abstract execute(): Promise<CustomResponse<EventLog[]>>

}
import { UseCasePromise } from "app/application/base/use-case-promise.base";
import { EventLog } from "app/domain/utils/event-log.model";
import { Response } from "app/domain/utils/response.model";

export abstract class GetEventLogsQuery implements UseCasePromise<null, Response<EventLog[]>> {

    abstract execute(): Promise<Response<EventLog[]>>

}
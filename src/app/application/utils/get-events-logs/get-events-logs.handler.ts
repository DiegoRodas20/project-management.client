import { Injectable } from "@angular/core"
import { CustomResponse } from "app/domain/utils/custom-response"
import { EventLog } from "app/domain/utils/event-log"
import { IUtilsRepository } from "app/domain/utils/utils.repository"
import { GetEventsLogsQuery } from "./get-events-logs.query"

@Injectable()
export class GetEventsLogsHandler implements GetEventsLogsQuery {

    constructor(
        private _utilsRepository: IUtilsRepository
    ) { }

    public execute(): Promise<CustomResponse<EventLog[]>> {

        const result = this._utilsRepository.getEventsLogs()

        return result
    }

}
import { Injectable } from "@angular/core"
import { EventLog } from "app/domain/utils/event-log.model"
import { Response } from "app/domain/utils/response.model"
import { IUtilsRepository } from "app/domain/utils/utils.repository"
import { GetEventLogsQuery } from "./get-event-logs.query"

@Injectable()
export class GetEventLogsHandler implements GetEventLogsQuery {

    constructor(
        private _utilsRepository: IUtilsRepository
    ) { }

    public execute(): Promise<Response<EventLog[]>> {

        const result = this._utilsRepository.getEventsLog()

        return result
    }

}
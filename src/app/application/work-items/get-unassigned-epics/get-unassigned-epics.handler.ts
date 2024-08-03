import { Injectable } from "@angular/core"
import { CustomResponse } from "app/domain/utils/custom-response"
import { GetUnassignedEpicResponse } from "app/domain/work-items/get-unassigned-epic.response"
import { IWorkItemRepository } from "app/domain/work-items/work-item.repository"
import { GetUnassignedEpicsQuery } from "./get-unassigned-epics.query"

@Injectable()
export class GetUnassignedEpicsHandler implements GetUnassignedEpicsQuery {

    constructor(
        private _workItemRepository: IWorkItemRepository
    ) { }

    public execute(): Promise<CustomResponse<GetUnassignedEpicResponse[]>> {

        const result = this._workItemRepository.getEpicsUnassigned()

        return result
    }

}
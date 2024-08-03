import { Injectable } from "@angular/core"
import { CustomResponse } from "app/domain/utils/custom-response"
import { WorkItem } from "app/domain/work-items/work-item"
import { IWorkItemRepository } from "app/domain/work-items/work-item.repository"
import { GetWorkItemsByProjectQuery } from "./get-work-items-by-project.query"

@Injectable()
export class GetWorkItemsByProjectHandler implements GetWorkItemsByProjectQuery {

    constructor(
        private _workItemRepository: IWorkItemRepository
    ) { }

    public execute(projectId: string): Promise<CustomResponse<WorkItem[]>> {

        const result = this._workItemRepository.getWorkItemsByProject(projectId)

        return result
    }

}
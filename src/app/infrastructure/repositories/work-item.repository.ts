import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { WORK_ITEMS_URL } from "@shared/constants/url.constants"
import { CustomResponse } from "app/domain/utils/custom-response"
import { GetUnassignedEpicResponse } from "app/domain/work-items/get-unassigned-epic.response"
import { WorkItem } from "app/domain/work-items/work-item"
import { IWorkItemRepository } from "app/domain/work-items/work-item.repository"
import { lastValueFrom } from "rxjs"

@Injectable()
export class WorkItemRepository implements IWorkItemRepository {

    constructor(
        private _httpClient: HttpClient
    ) { }

    public getWorkItemsByProject(projectId: string): Promise<CustomResponse<WorkItem[]>> {

        return lastValueFrom(this._httpClient.get<CustomResponse<WorkItem[]>>(`${WORK_ITEMS_URL}/project/${projectId}`))
    }

    public getEpicsUnassigned(): Promise<CustomResponse<GetUnassignedEpicResponse[]>> {

        return lastValueFrom(this._httpClient.get<CustomResponse<GetUnassignedEpicResponse[]>>(`${WORK_ITEMS_URL}/epic/unassigned`))
    }
}
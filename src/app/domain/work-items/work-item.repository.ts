import { CustomResponse } from "../utils/custom-response";
import { GetUnassignedEpicResponse } from "./get-unassigned-epic.response";
import { WorkItem } from "./work-item";

export abstract class IWorkItemRepository {

    abstract getWorkItemsByProject(projectId: string): Promise<CustomResponse<WorkItem[]>>

    abstract getEpicsUnassigned(): Promise<CustomResponse<GetUnassignedEpicResponse[]>>
    
}
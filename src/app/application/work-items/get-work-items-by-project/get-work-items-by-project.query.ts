import { UseCasePromise } from "app/application/base/use-case-promise.base";
import { CustomResponse } from "app/domain/utils/custom-response";
import { WorkItem } from "app/domain/work-items/work-item";

export abstract class GetWorkItemsByProjectQuery implements UseCasePromise<string, WorkItem[]> {

    abstract execute(projectId: string): Promise<CustomResponse<WorkItem[]>>

}
import { UseCasePromise } from "app/application/base/use-case-promise.base";
import { CustomResponse } from "app/domain/utils/custom-response";
import { GetUnassignedEpicResponse } from "app/domain/work-items/get-unassigned-epic.response";

export abstract class GetUnassignedEpicsQuery implements UseCasePromise<null, GetUnassignedEpicResponse[]> {

    abstract execute(): Promise<CustomResponse<GetUnassignedEpicResponse[]>>

}
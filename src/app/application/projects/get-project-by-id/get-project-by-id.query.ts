import { UseCasePromise } from "app/application/base/use-case-promise.base";
import { GetProjectByIdResponse } from "app/domain/projects/get-project-by-id.response";
import { CustomResponse } from "app/domain/utils/custom-response";

export abstract class GetProjectByIdQuery implements UseCasePromise<string, GetProjectByIdResponse> {

    abstract execute(projectId: string): Promise<CustomResponse<GetProjectByIdResponse>>

}
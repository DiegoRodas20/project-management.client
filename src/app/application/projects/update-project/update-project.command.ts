import { UseCasePromise } from "app/application/base/use-case-promise.base";
import { UpdateProjectRequest } from "app/domain/projects/update-project.request";
import { CustomResponse } from "app/domain/utils/custom-response";

export abstract class UpdateProjectCommand implements UseCasePromise<[string, UpdateProjectRequest], number> {

    abstract execute(params: [string, UpdateProjectRequest]): Promise<CustomResponse<number>>

}
import { UseCasePromise } from "app/application/base/use-case-promise.base";
import { CreateProjectRequest } from "app/domain/projects/create-project.request";
import { CustomResponse } from "app/domain/utils/custom-response";

export abstract class CreateProjectCommand implements UseCasePromise<CreateProjectRequest, number> {

    abstract execute(projectRequest: CreateProjectRequest): Promise<CustomResponse<number>>

}
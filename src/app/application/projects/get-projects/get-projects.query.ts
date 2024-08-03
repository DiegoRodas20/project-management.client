import { UseCasePromise } from "app/application/base/use-case-promise.base";
import { Project } from "app/domain/projects/project";
import { CustomResponse } from "app/domain/utils/custom-response";

export abstract class GetProjectsQuery implements UseCasePromise<null, Project[]> {

    abstract execute(): Promise<CustomResponse<Project[]>>

}
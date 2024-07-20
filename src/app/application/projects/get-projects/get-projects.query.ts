import { UseCasePromise } from "app/application/base/use-case-promise.base";
import { Project } from "app/domain/projects/project.model";
import { Response } from "app/domain/utils/response.model";

export abstract class GetProjectsQuery implements UseCasePromise<null, Response<Project[]>> {

    abstract execute(): Promise<Response<Project[]>>

}
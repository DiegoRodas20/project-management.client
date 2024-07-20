import { Injectable } from "@angular/core"
import { Project } from "app/domain/projects/project.model"
import { IProjectRepository } from "app/domain/projects/project.repository"
import { Response } from "app/domain/utils/response.model"
import { GetProjectsQuery } from "./get-projects.query"

@Injectable()
export class GteProjectsHandler implements GetProjectsQuery {

    constructor(
        private _projectRepository: IProjectRepository
    ) { }

    public execute(): Promise<Response<Project[]>> {

        const result = this._projectRepository.getProjects()

        return result
    }

}
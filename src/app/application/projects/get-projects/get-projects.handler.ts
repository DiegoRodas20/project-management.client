import { Injectable } from "@angular/core"
import { Project } from "app/domain/projects/project"
import { IProjectRepository } from "app/domain/projects/project.repository"
import { CustomResponse } from "app/domain/utils/custom-response"
import { GetProjectsQuery } from "./get-projects.query"

@Injectable()
export class GetProjectsHandler implements GetProjectsQuery {

    constructor(
        private _projectRepository: IProjectRepository
    ) { }

    public execute(): Promise<CustomResponse<Project[]>> {

        const result = this._projectRepository.getProjects()

        return result
    }

}
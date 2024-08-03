import { Injectable } from "@angular/core"
import { CreateProjectRequest } from "app/domain/projects/create-project.request"
import { IProjectRepository } from "app/domain/projects/project.repository"
import { CustomResponse } from "app/domain/utils/custom-response"
import { CreateProjectCommand } from "./create-project.command"

@Injectable()
export class CreateProjectHandler implements CreateProjectCommand {

    constructor(
        private _projectRepository: IProjectRepository
    ) { }

    public async execute(projectRequest: CreateProjectRequest): Promise<CustomResponse<number>> {

        const result = await this._projectRepository.createProject(projectRequest)

        return result
    }

}
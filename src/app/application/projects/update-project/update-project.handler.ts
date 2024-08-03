import { Injectable } from "@angular/core";
import { IProjectRepository } from "app/domain/projects/project.repository";
import { UpdateProjectRequest } from "app/domain/projects/update-project.request";
import { CustomResponse } from "app/domain/utils/custom-response";
import { UpdateProjectCommand } from "./update-project.command";

@Injectable()
export class UpdateProjectHandler implements UpdateProjectCommand {

    constructor(
        private _projectRepository: IProjectRepository
    ) { }

    public async execute(request: [string, UpdateProjectRequest]): Promise<CustomResponse<number>> {

        const result = await this._projectRepository.updateProject(request[0], request[1])

        return result
    }

}
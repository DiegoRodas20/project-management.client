import { Injectable } from "@angular/core"
import { GetProjectByIdResponse } from "app/domain/projects/get-project-by-id.response"
import { IProjectRepository } from "app/domain/projects/project.repository"
import { CustomResponse } from "app/domain/utils/custom-response"
import { GetProjectByIdQuery } from "./get-project-by-id.query"

@Injectable()
export class GetProjectByIdHandler implements GetProjectByIdQuery {

    constructor(
        private _projectRepository: IProjectRepository
    ) { }

    public execute(projectId: string): Promise<CustomResponse<GetProjectByIdResponse>> {

        const result = this._projectRepository.getProjectById(projectId)

        return result
    }

}
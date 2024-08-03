import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PROJECT_URL } from "@shared/constants/url.constants";
import { CreateProjectRequest } from "app/domain/projects/create-project.request";
import { GetProjectByIdResponse } from "app/domain/projects/get-project-by-id.response";
import { Project } from "app/domain/projects/project";
import { IProjectRepository } from "app/domain/projects/project.repository";
import { UpdateProjectRequest } from "app/domain/projects/update-project.request";
import { CustomResponse } from "app/domain/utils/custom-response";
import { lastValueFrom } from "rxjs";

@Injectable()
export class ProjectRepository implements IProjectRepository {

    constructor(
        private _httpClient: HttpClient
    ) { }

    public getProjects(): Promise<CustomResponse<Project[]>> {

        return lastValueFrom(this._httpClient.get<CustomResponse<Project[]>>(PROJECT_URL))
    }

    public getProjectById(projectId: string): Promise<CustomResponse<GetProjectByIdResponse>> {

        return lastValueFrom(this._httpClient.get<CustomResponse<GetProjectByIdResponse>>(`${PROJECT_URL}/${projectId}`))
    }

    public createProject(projectRequest: CreateProjectRequest): Promise<CustomResponse<number>> {

        return lastValueFrom(this._httpClient.post<CustomResponse<number>>(PROJECT_URL, projectRequest))
    }

    public updateProject(projectId: string, projectRequest: UpdateProjectRequest): Promise<CustomResponse<number>> {

        return lastValueFrom(this._httpClient.put<CustomResponse<number>>(`${PROJECT_URL}/${projectId}`, projectRequest))
    }
}
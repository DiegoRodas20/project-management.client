import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PROJECT_URL } from "@shared/constants/url.constants";
import { Project } from "app/domain/projects/project.model";
import { IProjectRepository } from "app/domain/projects/project.repository";
import { Response } from "app/domain/utils/response.model";
import { lastValueFrom } from "rxjs";

@Injectable()
export class ProjectRepository implements IProjectRepository {

    constructor(
        private _httpClient: HttpClient
    ) { }

    public getProjects(): Promise<Response<Project[]>> {

        return lastValueFrom(this._httpClient.get<Response<Project[]>>(PROJECT_URL))
    }
}
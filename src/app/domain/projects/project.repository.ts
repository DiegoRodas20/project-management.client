import { CustomResponse } from "../utils/custom-response";
import { CreateProjectRequest } from "./create-project.request";
import { GetProjectByIdResponse } from "./get-project-by-id.response";
import { Project } from "./project";
import { UpdateProjectRequest } from "./update-project.request";

export abstract class IProjectRepository {

    abstract getProjects(): Promise<CustomResponse<Project[]>>

    abstract getProjectById(projectId: string): Promise<CustomResponse<GetProjectByIdResponse>>

    abstract createProject(projectRequest: CreateProjectRequest): Promise<CustomResponse<number>>

    abstract updateProject(projectId: string, projectRequest: UpdateProjectRequest): Promise<CustomResponse<number>>

}
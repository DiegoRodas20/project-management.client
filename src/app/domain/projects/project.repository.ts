import { Response } from "../utils/response.model";
import { Project } from "./project.model";

export abstract class IProjectRepository {

    abstract getProjects(): Promise<Response<Project[]>>

}
import { Response } from "../utils/response.model";
import { Task } from "./task.model";

export abstract class ITaskRepository {

    abstract getTasks(): Promise<Response<Task[]>>

}
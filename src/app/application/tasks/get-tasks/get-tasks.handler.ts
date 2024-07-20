import { Injectable } from "@angular/core"
import { Task } from "app/domain/tasks/task.model"
import { ITaskRepository } from "app/domain/tasks/task.repository"
import { Response } from "app/domain/utils/response.model"
import { GetTasksQuery } from "./get-tasks.query"

@Injectable()
export class GetTasksHandler implements GetTasksQuery {

    constructor(
        private _taskRepository: ITaskRepository
    ) { }

    public execute(): Promise<Response<Task[]>> {

        const result = this._taskRepository.getTasks()

        return result
    }

}
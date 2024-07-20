import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TASK_URL } from "@shared/constants/url.constants";
import { Task } from "app/domain/tasks/task.model";
import { ITaskRepository } from "app/domain/tasks/task.repository";
import { Response } from "app/domain/utils/response.model";
import { lastValueFrom } from "rxjs";

@Injectable()
export class TaskRepository implements ITaskRepository {

    constructor(
        private _httpClient: HttpClient
    ) { }

    public getTasks(): Promise<Response<Task[]>> {

        return lastValueFrom(this._httpClient.get<Response<Task[]>>(TASK_URL))
    }
}
import { UseCasePromise } from "app/application/base/use-case-promise.base";
import { Task } from "app/domain/tasks/task.model";
import { Response } from "app/domain/utils/response.model";

export abstract class GetTasksQuery implements UseCasePromise<null, Response<Task[]>> {

    abstract execute(): Promise<Response<Task[]>>

}
import { Component, OnInit } from "@angular/core";
import { GetTasksQuery } from "app/application/tasks/get-tasks/get-tasks.query";
import { Task } from "app/domain/tasks/task.model";

@Component({
    selector: 'app-tasks',
    templateUrl: 'tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {

    tasks!: Task[]

    constructor(
        private _getTasksQuery: GetTasksQuery
    ) { }

    ngOnInit() { 
        this.getTasks()
    }

    public async getTasks(){
        this.tasks = (await this._getTasksQuery.execute()).data
        console.log(this.tasks)
    }
}
import { NgModule } from "@angular/core";
import { GteProjectsHandler } from "./projects/get-projects/get-projects.handler";
import { GetProjectsQuery } from "./projects/get-projects/get-projects.query";
import { GetTasksHandler } from "./tasks/get-tasks/get-tasks.handler";
import { GetTasksQuery } from "./tasks/get-tasks/get-tasks.query";
import { GetEventLogsHandler } from "./utils/get-event-logs/get-event-logs.handler";
import { GetEventLogsQuery } from "./utils/get-event-logs/get-event-logs.query";

@NgModule({
    providers: [
        { provide: GetEventLogsQuery, useClass: GetEventLogsHandler },
        { provide: GetProjectsQuery, useClass: GteProjectsHandler },
        { provide: GetTasksQuery, useClass: GetTasksHandler },

    ]
})
export class ApplicationModule { }
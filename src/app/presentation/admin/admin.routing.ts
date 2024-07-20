import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ADMIN_PATH } from "@shared/routes/path.routes";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EventLogsComponent } from "./event-logs/event-logs.component";
import { InvoicesComponent } from "./invoices/invoices.component";
import { LayoutComponent } from "./layout/layout.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TasksComponent } from "./tasks/tasks.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: ADMIN_PATH.DASHBOARD,
                component: DashboardComponent
            },
            {
                path: ADMIN_PATH.PROJECTS,
                component: ProjectsComponent
            },
            {
                path: ADMIN_PATH.TASKS,
                component: TasksComponent
            },
            {
                path: ADMIN_PATH.INVOICES,
                component: InvoicesComponent
            },
            {
                path: ADMIN_PATH.EVENT_LOGS,
                component: EventLogsComponent
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class AdminRoutingModule { }

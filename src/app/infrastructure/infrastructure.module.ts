import { NgModule } from "@angular/core";
import { IInvoiceRepository } from "app/domain/invoices/invoice.repository";
import { IProjectRepository } from "app/domain/projects/project.repository";
import { ITaskRepository } from "app/domain/tasks/task.repository";
import { IUtilsRepository } from "app/domain/utils/utils.repository";
import { InvoiceRepository } from "./repositories/invoice.repository";
import { ProjectRepository } from "./repositories/project.repository";
import { TaskRepository } from "./repositories/task.repository";
import { UtilsRepository } from "./repositories/utils.repository";

@NgModule({
    providers: [
        { provide: IProjectRepository, useClass: ProjectRepository },
        { provide: ITaskRepository, useClass: TaskRepository },
        { provide: IInvoiceRepository, useClass: InvoiceRepository },
        { provide: IUtilsRepository, useClass: UtilsRepository },
    ]
})
export class InfrastructureModule { }
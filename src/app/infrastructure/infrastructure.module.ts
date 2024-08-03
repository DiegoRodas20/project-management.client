import { NgModule } from "@angular/core";
import { IInvoiceRepository } from "app/domain/invoices/invoice.repository";
import { IProjectRepository } from "app/domain/projects/project.repository";
import { IUtilsRepository } from "app/domain/utils/utils.repository";
import { IWorkItemRepository } from "app/domain/work-items/work-item.repository";
import { InvoiceRepository } from "./repositories/invoice.repository";
import { ProjectRepository } from "./repositories/project.repository";
import { UtilsRepository } from "./repositories/utils.repository";
import { WorkItemRepository } from "./repositories/work-item.repository";

@NgModule({
    providers: [
        { provide: IProjectRepository, useClass: ProjectRepository },
        { provide: IWorkItemRepository, useClass: WorkItemRepository },
        { provide: IInvoiceRepository, useClass: InvoiceRepository },
        { provide: IUtilsRepository, useClass: UtilsRepository },
    ]
})
export class InfrastructureModule { }
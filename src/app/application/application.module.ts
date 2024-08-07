import { NgModule } from "@angular/core";
import { GenerateInvoiceCommand } from "./invoices/generate-invoice/generate-invoice.command";
import { GenerateInvoiceHandler } from "./invoices/generate-invoice/generate-invoice.handler";
import { GetInvoiceByIdHandler } from "./invoices/get-invoice-by-id/get-invoice-by-id.handler";
import { GetInvoiceByIdQuery } from "./invoices/get-invoice-by-id/get-invoice-by-id.query";
import { GetInvoicesByProjectIdHandler } from "./invoices/get-invoices-by-project-id/get-invoices-by-project-id.handler";
import { GetInvoicesByProjectIdQuery } from "./invoices/get-invoices-by-project-id/get-invoices-by-project-id.query";
import { CreateProjectCommand } from "./projects/create-project/create-project.command";
import { CreateProjectHandler } from "./projects/create-project/create-project.handler";
import { GetProjectByIdHandler } from "./projects/get-project-by-id/get-project-by-id.handler";
import { GetProjectByIdQuery } from "./projects/get-project-by-id/get-project-by-id.query";
import { GetProjectsHandler } from "./projects/get-projects/get-projects.handler";
import { GetProjectsQuery } from "./projects/get-projects/get-projects.query";
import { UpdateProjectCommand } from "./projects/update-project/update-project.command";
import { UpdateProjectHandler } from "./projects/update-project/update-project.handler";
import { GetEventsLogsHandler } from "./utils/get-events-logs/get-events-logs.handler";
import { GetEventsLogsQuery } from "./utils/get-events-logs/get-events-logs.query";
import { GetUnassignedEpicsHandler } from "./work-items/get-unassigned-epics/get-unassigned-epics.handler";
import { GetUnassignedEpicsQuery } from "./work-items/get-unassigned-epics/get-unassigned-epics.query";
import { GetWorkItemsByProjectHandler } from "./work-items/get-work-items-by-project/get-work-items-by-project.handler";
import { GetWorkItemsByProjectQuery } from "./work-items/get-work-items-by-project/get-work-items-by-project.query";
import { GetPersonsQuery } from "./persons/get-persons/get-persons.query";
import { GetPersonsHandler } from "./persons/get-persons/get-persons.handler";
import { GetCurrentByPersonHandler } from "./evaluations/get-current-by-person/get-current-by-person.handler";
import { GetCurrentByPersonQuery } from "./evaluations/get-current-by-person/get-current-by-person.query";
import { SaveEvaluationCommand } from "./evaluations/save-evaluation/save-evaluation.command";
import { SaveEvaluationHandler } from "./evaluations/save-evaluation/save-evaluation.handler";
import { CloseEvaluationCommand } from "./evaluations/close-evaluation/close-evaluation.command";
import { CloseEvaluationHandler } from "./evaluations/close-evaluation/close-evaluation.handler";
import { GetByPersonHandler } from "./evaluations/get-by-person/get-by-person.handler";
import { GetByPersonQuery } from "./evaluations/get-by-person/get-by-person.query";
import { GetReportURLQuery } from "./evaluations/get-report-url/get-report-url.query";
import { GetReportURLHandler } from "./evaluations/get-report-url/get-report-url.handler";

@NgModule({
    providers: [
        // Invoice
        { provide: GenerateInvoiceCommand, useClass: GenerateInvoiceHandler },
        { provide: GetInvoiceByIdQuery, useClass: GetInvoiceByIdHandler },
        { provide: GetInvoicesByProjectIdQuery, useClass: GetInvoicesByProjectIdHandler },

        // Project
        { provide: CreateProjectCommand, useClass: CreateProjectHandler },
        { provide: UpdateProjectCommand, useClass: UpdateProjectHandler },
        { provide: GetProjectsQuery, useClass: GetProjectsHandler },
        { provide: GetProjectByIdQuery, useClass: GetProjectByIdHandler },

        // Work Item
        { provide: GetUnassignedEpicsQuery, useClass: GetUnassignedEpicsHandler },
        { provide: GetWorkItemsByProjectQuery, useClass: GetWorkItemsByProjectHandler },

        // Utils
        { provide: GetEventsLogsQuery, useClass: GetEventsLogsHandler },

        //Person
        { provide: GetPersonsQuery, useClass: GetPersonsHandler },

        //Evaluation
        { provide: GetCurrentByPersonQuery, useClass: GetCurrentByPersonHandler },
        { provide: SaveEvaluationCommand, useClass: SaveEvaluationHandler },
        { provide: CloseEvaluationCommand, useClass: CloseEvaluationHandler },
        { provide: GetByPersonQuery, useClass: GetByPersonHandler },
        { provide: GetReportURLQuery, useClass: GetReportURLHandler },

    ]
})
export class ApplicationModule { }
import { Project } from "../projects/project";

export interface Invoice {
    id: number;
    project: Project;
    month: number;
    year: number;
    createdDate: Date;
    pricePerHour: number;
    detailInvoice: InvoiceDetail[];
}

export interface InvoiceDetail {
    id: number;
    invoice: Invoice;
    dedicatedHours: number;
    externalId: number;
    taskDescription: string;
    date: Date;
}
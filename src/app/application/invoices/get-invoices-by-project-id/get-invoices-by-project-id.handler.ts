import { Injectable } from "@angular/core"
import { Invoice } from "app/domain/invoices/invoice"
import { IInvoiceRepository } from "app/domain/invoices/invoice.repository"
import { CustomResponse } from "app/domain/utils/custom-response"
import { GetInvoicesByProjectIdQuery } from "./get-invoices-by-project-id.query"

@Injectable()
export class GetInvoicesByProjectIdHandler implements GetInvoicesByProjectIdQuery {

    constructor(
        private _invoiceRepository: IInvoiceRepository
    ) { }

    public execute(projectId: string): Promise<CustomResponse<Invoice[]>> {

        const result = this._invoiceRepository.getInvoiceByProjectId(projectId)

        return result
    }

}
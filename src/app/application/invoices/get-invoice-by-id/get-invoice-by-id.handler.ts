import { Injectable } from "@angular/core"
import { GetInvoiceByIdResponse } from "app/domain/invoices/get-invoice-by-id.response"
import { IInvoiceRepository } from "app/domain/invoices/invoice.repository"
import { CustomResponse } from "app/domain/utils/custom-response"
import { GetInvoiceByIdQuery } from "./get-invoice-by-id.query"

@Injectable()
export class GetInvoiceByIdHandler implements GetInvoiceByIdQuery {

    constructor(
        private _invoiceRepository: IInvoiceRepository
    ) { }

    public execute(invoiceId: string): Promise<CustomResponse<GetInvoiceByIdResponse[]>> {

        const result = this._invoiceRepository.getInvoiceById(invoiceId)

        return result
    }

}
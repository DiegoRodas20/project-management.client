import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { INVOICE_URL } from "@shared/constants/url.constants";
import { GenerateInvoiceRequest } from "app/domain/invoices/generate-invoice.request";
import { GenerateInvoiceResponse } from "app/domain/invoices/generate-invoice.response";
import { GetInvoiceByIdResponse } from "app/domain/invoices/get-invoice-by-id.response";
import { Invoice } from "app/domain/invoices/invoice";
import { IInvoiceRepository } from "app/domain/invoices/invoice.repository";
import { CustomResponse } from "app/domain/utils/custom-response";
import { lastValueFrom } from "rxjs";

@Injectable()
export class InvoiceRepository implements IInvoiceRepository {

    constructor(
        private _httpClient: HttpClient
    ) { }

    public generateInvoice(request: GenerateInvoiceRequest): Promise<CustomResponse<GenerateInvoiceResponse[]>> {

        return lastValueFrom(this._httpClient.post<CustomResponse<GenerateInvoiceResponse[]>>(INVOICE_URL, request))
    }

    public getInvoiceByProjectId(projectId: string): Promise<CustomResponse<Invoice[]>> {

        return lastValueFrom(this._httpClient.get<CustomResponse<Invoice[]>>(`${INVOICE_URL}/project/${projectId}`))
    }

    public getInvoiceById(invoiceId: string): Promise<CustomResponse<GetInvoiceByIdResponse[]>> {

        return lastValueFrom(this._httpClient.get<CustomResponse<GetInvoiceByIdResponse[]>>(`${INVOICE_URL}/${invoiceId}`))
    }
}
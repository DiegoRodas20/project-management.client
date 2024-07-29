import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { INVOICE_URL } from "@shared/constants/url.constants";
import { GenerateInvoiceRequest } from "app/domain/invoices/generate-invoice.request";
import { Invoice } from "app/domain/invoices/invoice.model";
import { IInvoiceRepository } from "app/domain/invoices/invoice.repository";
import { Response } from "app/domain/utils/response.model";
import { lastValueFrom } from "rxjs";

@Injectable()
export class InvoiceRepository implements IInvoiceRepository {

    constructor(
        private _httpClient: HttpClient
    ) { }

    public generateInvoice(request: GenerateInvoiceRequest): Promise<Response<Invoice[]>> {

        return lastValueFrom(this._httpClient.post<Response<Invoice[]>>(INVOICE_URL, request))
    }
}
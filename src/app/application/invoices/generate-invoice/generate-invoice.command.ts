import { UseCasePromise } from "app/application/base/use-case-promise.base";
import { GenerateInvoiceRequest } from "app/domain/invoices/generate-invoice.request";
import { Invoice } from "app/domain/invoices/invoice.model";
import { Response } from "app/domain/utils/response.model";

export abstract class GenerateInvoiceCommand implements UseCasePromise<GenerateInvoiceRequest, Response<Invoice[]>> {

    abstract execute(request: GenerateInvoiceRequest): Promise<Response<Invoice[]>>

}
import { UseCasePromise } from "app/application/base/use-case-promise.base";
import { GenerateInvoiceRequest } from "app/domain/invoices/generate-invoice.request";
import { GenerateInvoiceResponse } from "app/domain/invoices/generate-invoice.response";
import { CustomResponse } from "app/domain/utils/custom-response";

export abstract class GenerateInvoiceCommand implements UseCasePromise<GenerateInvoiceRequest, GenerateInvoiceResponse[]> {

    abstract execute(request: GenerateInvoiceRequest): Promise<CustomResponse<GenerateInvoiceResponse[]>>

}
import { Response } from "../utils/response.model";
import { GenerateInvoiceRequest } from "./generate-invoice.request";
import { Invoice } from "./invoice.model";

export abstract class IInvoiceRepository {

    abstract generateInvoice(request: GenerateInvoiceRequest): Promise<Response<Invoice[]>>

}
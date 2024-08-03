
import { CustomResponse } from "../utils/custom-response";
import { GenerateInvoiceRequest } from "./generate-invoice.request";
import { GenerateInvoiceResponse } from "./generate-invoice.response";
import { GetInvoiceByIdResponse } from "./get-invoice-by-id.response";
import { Invoice } from "./invoice";

export abstract class IInvoiceRepository {

    abstract generateInvoice(request: GenerateInvoiceRequest): Promise<CustomResponse<GenerateInvoiceResponse[]>>

    abstract getInvoiceByProjectId(projectId: string): Promise<CustomResponse<Invoice[]>>

    abstract getInvoiceById(invoiceId: string): Promise<CustomResponse<GetInvoiceByIdResponse[]>>

}
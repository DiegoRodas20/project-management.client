import { UseCasePromise } from "app/application/base/use-case-promise.base";
import { GetInvoiceByIdResponse } from "app/domain/invoices/get-invoice-by-id.response";
import { CustomResponse } from "app/domain/utils/custom-response";

export abstract class GetInvoiceByIdQuery implements UseCasePromise<string, GetInvoiceByIdResponse[]> {

    abstract execute(invoiceId: string): Promise<CustomResponse<GetInvoiceByIdResponse[]>>

}
import { UseCasePromise } from "app/application/base/use-case-promise.base";
import { Invoice } from "app/domain/invoices/invoice";
import { CustomResponse } from "app/domain/utils/custom-response";

export abstract class GetInvoicesByProjectIdQuery implements UseCasePromise<string, Invoice[]> {

    abstract execute(projectId: string): Promise<CustomResponse<Invoice[]>>

}
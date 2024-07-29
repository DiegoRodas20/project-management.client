import { Injectable } from "@angular/core"
import { GenerateInvoiceRequest } from "app/domain/invoices/generate-invoice.request"
import { Invoice } from "app/domain/invoices/invoice.model"
import { IInvoiceRepository } from "app/domain/invoices/invoice.repository"
import { Response } from "app/domain/utils/response.model"
import { saveAs } from 'file-saver'
import * as XLSX from 'xlsx'
import { GenerateInvoiceCommand } from "./generate-invoice.command"

@Injectable()
export class GenerateInvoiceHandler implements GenerateInvoiceCommand {

    EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

    constructor(
        private _invoiceRepository: IInvoiceRepository
    ) { }

    public async execute(request: GenerateInvoiceRequest): Promise<Response<Invoice[]>> {

        const result = await this._invoiceRepository.generateInvoice(request)

        if (!result.error) {
            this.exportToExcel(result.data)
        }

        return result
    }

    private exportToExcel(invoices: Invoice[]) {

        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(invoices);

        const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };

        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

        this.saveAsExcelFile(excelBuffer, 'invoices');
    }

    private saveAsExcelFile(buffer: any, fileName: string) {

        const data: Blob = new Blob([buffer], { type: this.EXCEL_TYPE });

        saveAs(data, `${fileName}_${new Date().getMonth()}.xlsx`);
    }

}
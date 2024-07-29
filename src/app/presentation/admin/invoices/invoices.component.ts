import { Component, OnInit } from "@angular/core";
import { GenerateInvoiceCommand } from "app/application/invoices/generate-invoice/generate-invoice.command";
import { GenerateInvoiceRequest } from "app/domain/invoices/generate-invoice.request";

@Component({
    selector: 'app-invoices',
    templateUrl: 'invoices.component.html',
    styleUrls: ['./invoices.component.scss']
})

export class InvoicesComponent implements OnInit {

    invoiceDate!: Date;

    constructor(
        private _generateInvoiceCommand: GenerateInvoiceCommand
    ) { }

    ngOnInit() { }

    async generateInvoice() {

        if (this.invoiceDate) {

            const request: GenerateInvoiceRequest = {
                month: this.invoiceDate.getMonth() + 1,
                year: this.invoiceDate.getFullYear()
            }

            const result = await this._generateInvoiceCommand.execute(request)
        }
    }
}
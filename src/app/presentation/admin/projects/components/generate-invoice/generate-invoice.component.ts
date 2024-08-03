import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { GenerateInvoiceCommand } from "app/application/invoices/generate-invoice/generate-invoice.command";
import { GenerateInvoiceRequest } from "app/domain/invoices/generate-invoice.request";
import { DynamicDialogConfig } from "primeng/dynamicdialog";

@Component({
    selector: 'app-generate-invoice',
    templateUrl: 'generate-invoice.component.html',
    styleUrls: ['./generate-invoice.component.scss']
})

export class GenerateInvoiceComponent implements OnInit {

    formGroup!: FormGroup

    constructor(
        private _generateInvoice: GenerateInvoiceCommand,
        private _formBuilder: FormBuilder,
        private _dialogConfig: DynamicDialogConfig
    ) {

    }
    ngOnInit() {
        this.createFormGroup()
    }

    public createFormGroup() {
        this.formGroup = this._formBuilder.group({
            date: [null],
            price: [null]
        })
    }

    public async generateInvoice() {

        const form = this.formGroup.value
        const date: Date = form.date
        const projectId: string = this._dialogConfig.data.projectId

        const request: GenerateInvoiceRequest = {
            projectId: projectId,
            pricePerHour: form.price,
            month: date.getMonth() + 1,
            year: date.getFullYear(),
        }

        const result = await this._generateInvoice.execute(request)
    }
}

export interface GetInvoiceByIdResponse {
    project: string;
    month: number;
    year: number;
    hours: number;
    pricePerHour: number;
    finalPrice: number;
    task: string;
    date: string;
}
import { Injectable } from "@angular/core"
import { CustomResponse } from "app/domain/utils/custom-response"
import { IEvaluationRepository } from "app/domain/evaluations/evaluation.repository"
import { GetReportURLQuery } from "./get-report-url.query"

@Injectable()
export class GetReportURLHandler implements GetReportURLQuery {

    constructor(
        private _evaluationRepository: IEvaluationRepository
    ) { }
    execute(params: number): CustomResponse<string> {
        let url = this._evaluationRepository.getURLReport(params);
        let result: CustomResponse<string> = {
            message: "",
            data: url,
            error: []
        }
        return result
    }

}
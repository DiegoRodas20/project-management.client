import { Injectable } from "@angular/core"
import { CustomResponse } from "app/domain/utils/custom-response"
import { IEvaluationRepository } from "app/domain/evaluations/evaluation.repository"
import { GetCurrentByPersonQuery } from "./get-current-by-person.query"
import { Evaluation } from "app/domain/evaluations/evaluation"

@Injectable()
export class GetCurrentByPersonHandler implements GetCurrentByPersonQuery {

    constructor(
        private _evaluationRepository: IEvaluationRepository
    ) { }
    async execute(personId: number): Promise<CustomResponse<Evaluation>> {
        const result = await this._evaluationRepository.getCurrentByPersonId(personId)

        return result
    }

}
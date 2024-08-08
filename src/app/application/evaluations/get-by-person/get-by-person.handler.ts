import { Injectable } from "@angular/core"
import { CustomResponse } from "app/domain/utils/custom-response"
import { IEvaluationRepository } from "app/domain/evaluations/evaluation.repository"
import { Evaluation } from "app/domain/evaluations/evaluation"
import { GetByPersonQuery } from "./get-by-person.query"

@Injectable()
export class GetByPersonHandler implements GetByPersonQuery {

    constructor(
        private _evaluationRepository: IEvaluationRepository
    ) { }
    async execute(personId: number): Promise<CustomResponse<Evaluation[]>> {
        const result = await this._evaluationRepository.getByPersonId(personId)

        return result
    }

}
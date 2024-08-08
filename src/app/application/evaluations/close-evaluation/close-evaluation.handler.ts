import { Injectable } from "@angular/core"
import { CustomResponse } from "app/domain/utils/custom-response"
import { IEvaluationRepository } from "app/domain/evaluations/evaluation.repository"
import { CloseEvaluationCommand } from "./close-evaluation.command"

@Injectable()
export class CloseEvaluationHandler implements CloseEvaluationCommand {

    constructor(
        private _evaluationRepository: IEvaluationRepository
    ) { }
    
    async execute(personId: number): Promise<CustomResponse<string>> {
        return await this._evaluationRepository.close(personId)
    }

}
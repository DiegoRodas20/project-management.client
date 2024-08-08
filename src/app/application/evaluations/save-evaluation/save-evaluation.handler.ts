import { Injectable } from "@angular/core"
import { IEvaluationRepository } from "app/domain/evaluations/evaluation.repository"
import { SaveEvaluationCommand } from "./save-evaluation.command"
import { SaveEvaluationRequest } from "app/domain/evaluations/save-evaluation.request"
import { CustomResponse } from "app/domain/utils/custom-response"

@Injectable()
export class SaveEvaluationHandler implements SaveEvaluationCommand {

    constructor(
        private _evaluationRepository: IEvaluationRepository,
    ) { }
    async execute(request: SaveEvaluationRequest): Promise<CustomResponse<string>> {
        return await this._evaluationRepository.save(request)
    }

}
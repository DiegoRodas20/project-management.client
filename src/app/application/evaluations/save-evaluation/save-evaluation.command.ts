import { UseCasePromise } from "app/application/base/use-case-promise.base";
import { SaveEvaluationRequest } from "app/domain/evaluations/save-evaluation.request";
import { CustomResponse } from "app/domain/utils/custom-response";

export abstract class SaveEvaluationCommand implements UseCasePromise<SaveEvaluationRequest, string> {

    abstract execute(request: SaveEvaluationRequest): Promise<CustomResponse<string>>

}
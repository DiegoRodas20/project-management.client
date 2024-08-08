import { UseCasePromise } from "app/application/base/use-case-promise.base";
import { CustomResponse } from "app/domain/utils/custom-response";

export abstract class CloseEvaluationCommand implements UseCasePromise<number, string> {

    abstract execute(personId: number): Promise<CustomResponse<string>>

}
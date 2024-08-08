import { UseCasePromise } from "app/application/base/use-case-promise.base";
import { Evaluation } from "app/domain/evaluations/evaluation";
import { CustomResponse } from "app/domain/utils/custom-response";

export abstract class GetCurrentByPersonQuery implements UseCasePromise<number, Evaluation> {

    abstract execute(personId: number): Promise<CustomResponse<Evaluation>>

}
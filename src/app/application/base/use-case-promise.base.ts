import { CustomResponse } from "app/domain/utils/custom-response";

export interface UseCasePromise<S, T> {

    execute(params: S): Promise<CustomResponse<T>>

}
import { CustomResponse } from "app/domain/utils/custom-response";

export interface UseCase<S, T> {

    execute(params: S): CustomResponse<T>

}
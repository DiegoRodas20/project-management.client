export interface CustomResponse<T> {
    message: string,
    data: T,
    error: string[]
}
export interface Response<T> {
    message: string,
    data: T,
    error: string[]
}
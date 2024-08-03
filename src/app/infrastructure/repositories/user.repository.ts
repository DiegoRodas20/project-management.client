import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUserRepository } from "app/domain/users/user.repository";

@Injectable()
export class UserRepository implements IUserRepository {

    constructor(
        private _httpClient: HttpClient
    ) { }
}
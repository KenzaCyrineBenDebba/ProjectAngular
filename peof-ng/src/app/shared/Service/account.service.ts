import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class AccountService {
    readonly apiServerUrl = 'http://localhost:8083';

    constructor(private http: HttpClient) {
    }


}

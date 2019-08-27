import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class RoleTableService {
    constructor(public httpClient: HttpClient) { }

    public getRoleTable(dataURL: string): Observable<any> {
        return this.httpClient.get(dataURL);
    }

    public del(delURL:string): Observable<any> {
        return this.httpClient.delete(delURL);
    }

    public toEdit(editURL:string): Observable<any> {
        return this.httpClient.get(editURL);
    }
}
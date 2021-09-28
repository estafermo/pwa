import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AstronautsService {

    constructor(private http: HttpClient) { }
    
    getAll() {
       return this.http.get<any>('http://api.open-notify.org/astros.json');
    }
 
}
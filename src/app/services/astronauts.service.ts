import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AstronautsService {
    httpOptions = {
        headers: new HttpHeaders({ 
          'Access-Control-Allow-Origin':'*'
        })
      }

    constructor(private http: HttpClient) { }
    
    
    getAll() {
       return this.http.get<any>('https://run.mocky.io/v3/9ac152ac-e5ef-484e-bae5-78c3557fa2df',);
    }
 
}
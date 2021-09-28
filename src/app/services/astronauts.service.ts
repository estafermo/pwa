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
       return this.http.get<any>('http://api.open-notify.org/astros.json', this.httpOptions);
    }
 
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetraitserviceService {
  distant = "https://backommomo.herokuapp.com/retrait/";
  local = "http://localhost:8080/retrait/";


  constructor(private http: HttpClient) { }

 getRetrait(type: string, montant: number, coupures: number) {
    return this.http.get(this.distant + type + "?montant=" + montant+"&coupures="+ coupures);
  }
}

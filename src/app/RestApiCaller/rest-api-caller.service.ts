import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiCallerService {

  /*
    API : https://reqres.in/ 

    GET: https://reqres.in/api/users



  */

  private baseUrl = "https://reqres.in/api";

  constructor(private http: HttpClient){}

  //GET
  getEndpointCall(): Observable<any>{
    return this.http.get(`${this.baseUrl}/users`);
  } 

  //POST
  postEndpointCall(): Observable<any>{
    let data = {
      "name": "morpheus",
      "job": "leader" };
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(
      `${this.baseUrl}/users`,
      data,
      { headers }
    );
  }

  //UPDATE
  putEndpointCall(): Observable<any>{
    let data = {
      "name": "morpheus",
      "job": "zion resident" };
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.put(
      `${this.baseUrl}/users/2`,
      data,
      { headers }
    );
  }

  //DELETE
  deleteEndpointCall(): Observable<any>{
    return this.http.delete(`${this.baseUrl}/users/2`);
  }

  //ERROR
  errorEndpointCall(): Observable<any> {
    return this.http.get(`${this.baseUrl}2/asdf/asdf`);
  }

  //GET for Cache Interceptor
  getCachedEndpointCall(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users?page=2`);
  }
}

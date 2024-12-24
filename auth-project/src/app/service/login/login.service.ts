import { Injectable } from '@angular/core';
import { API_PATH } from 'src/enviroments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../entities/user';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../entities/loginResponse';
import { LoginRequest } from '../../entities/loginRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl= API_PATH;
  constructor(private httpClient:HttpClient) { }

  login(loginRequest: any): Observable<any> {
    const loginUrl = `${this.baseUrl}/auth/login`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<any>(loginUrl, loginRequest, { headers });
  }
  isValidToken(token: any): Observable<any> {
    const loginUrl = `${this.baseUrl}/auth/token`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<any>(loginUrl, { token }, { headers });
  }


  register(loginRequest: any): Observable<any> {
    const loginUrl = `${this.baseUrl}/auth/register`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<any>(loginUrl, loginRequest, { headers });
  }



}

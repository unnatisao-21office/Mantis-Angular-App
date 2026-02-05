import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Services {
  constructor(private http: HttpClient) {}

  login(payload: { email: string; password: string; rememberMe: boolean }) {
    return this.http.post('http://localhost:3000/api/auth/login', payload);
  }
}


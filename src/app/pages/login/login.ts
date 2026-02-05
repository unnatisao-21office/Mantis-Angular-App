import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, Router } from "@angular/router";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true,
})
export class Login {
    email = '';
  password = '';
  rememberMe = false;
  keepMeSignedIn = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login() {
    this.http.post('http://localhost:3000/api/auth/login', {
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe
    }).subscribe({
      next: (res: any) => {
        alert('Login successful');

       
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        alert(err.error.message || 'Login failed');
      }
    });
  }
}
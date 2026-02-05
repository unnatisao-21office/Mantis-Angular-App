import { Component } from '@angular/core';
import { RouterLink, Router } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { Services } from '../../service/services';
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
    private services: Services,
    private router: Router
  ) {}

  login() {
    this.services.login({
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe,
    }).subscribe({
      next: () => {
        alert('Login successful');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        alert(err.error.message || 'Login failed');
      }
    });
  }
}
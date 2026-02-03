import { Component } from '@angular/core';
import { Router , RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-forget-password',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.css',
  standalone: true,
})
export class ForgetPassword {
  constructor(private router: Router) {}
  
  goToCheckEmail() {
    this.router.navigate(['/check-email']);
  }
}

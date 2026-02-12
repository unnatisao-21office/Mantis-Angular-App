import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-500',
  imports: [],
  templateUrl: './page-500.html',
  styleUrl: './page-500.css',
})
export class Page500 {
  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['/home']);
  }

}

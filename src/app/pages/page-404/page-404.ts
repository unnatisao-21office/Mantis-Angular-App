import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-404',
  imports: [],
  templateUrl: './page-404.html',
  styleUrl: './page-404.css',
})
export class Page404 {
  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['/home']);
  }


}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-under-construction',
  imports: [],
  templateUrl: './under-construction.html',
  styleUrl: './under-construction.css',
})
export class UnderConstruction {
  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['/home']);
  }

}

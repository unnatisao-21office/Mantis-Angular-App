import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet,FormsModule,HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,


})
export class App {
 
}

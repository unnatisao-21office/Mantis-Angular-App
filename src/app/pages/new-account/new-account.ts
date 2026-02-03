import { Component } from '@angular/core';
import {  RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-new-account',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './new-account.html',
  styleUrl: './new-account.css',
  standalone: true,
})
export class NewAccount {

}

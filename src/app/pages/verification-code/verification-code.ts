import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification-code',
  imports: [],
  templateUrl: './verification-code.html',
  styleUrl: './verification-code.css',
})
export class VerificationCode {
  constructor(private router: Router) {}
  


  resendCode() {
    console.log('Resending code...');
    
    alert('Verification code has been resent!');
  }
}

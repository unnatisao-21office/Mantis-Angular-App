import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  imports: [],
  templateUrl: './coming-soon.html',
  styleUrl: './coming-soon.css',
})
export class ComingSoon implements OnInit, OnDestroy {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  
  private countdownInterval: any;
  private startTime: number;

  constructor(private cdr: ChangeDetectorRef) {
    
    const storedStartTime = localStorage.getItem('countdownStartTime');
    if (storedStartTime) {
      this.startTime = parseInt(storedStartTime, 10);
    } else {
      this.startTime = Date.now();
      localStorage.setItem('countdownStartTime', this.startTime.toString());
    }
  }

  ngOnInit() {
    this.updateCountdown();
    this.countdownInterval = setInterval(() => {
      this.updateCountdown();
      this.cdr.detectChanges();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  private updateCountdown() {
    const now = Date.now();
    const elapsed = now - this.startTime;

    this.days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
  }
}

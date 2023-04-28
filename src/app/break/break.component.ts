import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-break',
  templateUrl: './break.component.html',
  styleUrls: ['./break.component.css']
})
export class BreakComponent implements OnInit {

  constructor(private router: Router) { }

  activityTime = 5
  activitySecond: number = 0
  interval: any;
  clickedTimer = false;
  canClickReset = false;

  ngOnInit(): void {
  }

  startTime() {
    this.clickedTimer = true;
    this.canClickReset = true;
    this.interval = setInterval(() => {
      if (this.activityTime == 0 && this.activitySecond == 0) {
        clearInterval(this.interval);
      } else if (this.activitySecond == 0) {
        this.activitySecond = 60;
        this.activitySecond--;
        this.activityTime--;
      } else {
        this.activitySecond--;
      }
    }, 1000)
  }

  stopTime() {
    this.clickedTimer = false;
    clearInterval(this.interval)
  }

  stopTimeAndGo() {
    this.clickedTimer = false;
    clearInterval(this.interval);
    this.activityTime = 5;
    this.activitySecond = 0;
    this.canClickReset = false;
  }

  goToActivity() {
    this.stopTimeAndGo();
    this.router.navigate(['activity'])
  }

}

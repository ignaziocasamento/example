import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  constructor(public appService: AppService, private spinner: NgxSpinnerService) {}

  showMenu = false;
  goBack = false;

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.goBack = true;
  }

}


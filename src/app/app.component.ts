import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { NgxSpinnerService } from 'ngx-spinner/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  constructor(public appService: AppService, private spinner: NgxSpinnerService) {}

  showMenu = false;
  goBack = false;
  loading = true;

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.loading = false;
      this.spinner.hide();
    }, 3000);
  }

  ngOnDestroy(): void {
    this.goBack = true;
  }

}


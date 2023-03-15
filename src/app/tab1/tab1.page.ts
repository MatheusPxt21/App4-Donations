import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private route: Router) {}

  DonationsPage(){
    this.route.navigate(['/tabs/tab2']);
  }

  ReceivePage(){
    this.route.navigate(['/tabs/tab3']);
  }


}
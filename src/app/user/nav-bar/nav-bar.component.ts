import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public status: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  Stwich() {
    if (this.status === false) {
      this.status = true;
    } else {
      this.status = false;
    }
  }
}

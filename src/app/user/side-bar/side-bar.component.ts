import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  clickSM: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  ThuNho() {
    if (this.clickSM === false) {
      this.clickSM = true;
    } else {
      this.clickSM = false;
    }
  }
}

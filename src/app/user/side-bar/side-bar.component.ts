import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  clickSM: boolean = false;
  constructor() { }

  ngOnInit() {
    let that = this;
    $(window).scroll(function () {
      let wScroll = $(this).scrollTop();
      if (wScroll > 1) {
        that.clickSM = true;
      } else {
        that.clickSM = false;
      }
    })
  }
  ThuNho() {
    if (this.clickSM === false) {
      this.clickSM = true;
    } else {
      this.clickSM = false;
    }
  }
}

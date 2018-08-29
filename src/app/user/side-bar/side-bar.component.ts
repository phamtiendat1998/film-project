import { Component, OnInit, Input } from '@angular/core';
import $ from 'jquery';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  public clickSM: boolean = false;
  @Input() statusLogin: boolean = true;
  public statusUser: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    // Scroll thu nhỏ
    let that = this;
    $(window).scroll(function () {
      let wScroll = $(this).scrollTop();
      if (wScroll > 1) {
        that.clickSM = true;
      } else {
        that.clickSM = false;
      }
    });
    this.GetUser();
  }
  ThuNho() {
    if (this.clickSM === false) {
      this.clickSM = true;
    } else {
      this.clickSM = false;
    }
  }
  ClickUser() {
    if (this.statusUser == true) {
      this.statusUser = false;
      $('.user-dn-hover').css("height", "70px");
    } else {
      this.statusUser = true;
      $('.user-dn-hover').css("height", "0");
    }
  }
  DangXuat() {
    localStorage.removeItem("userLogin");
    this.statusLogin = true;
    this.router.navigate(['/']);
  }
  GetUser() {
    let userLogin = localStorage.getItem("userLogin");
    if (userLogin !== null) {
      this.statusLogin = false;
    } else {
      this.statusLogin = true;
    }
  }
}

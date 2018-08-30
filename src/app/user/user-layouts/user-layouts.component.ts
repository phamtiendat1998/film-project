import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupTrailerComponent } from '../popup-trailer/popup-trailer.component';
import $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-user-layouts',
  templateUrl: './user-layouts.component.html',
  styleUrls: ['./user-layouts.component.css']
})
export class UserLayoutsComponent implements OnInit {
  @ViewChild(PopupTrailerComponent) popupTrailer: PopupTrailerComponent;
  public statusDangNhap: boolean;
  public statusScroll: string = "home";
  constructor() { }

  ngOnInit() {
    let that = this;
    let offsetHome = $('#home').offset().top;
    let offsetPhim = $('#phim').offset().top;
    $(window).scroll(function () {
      let scrollbarLocation = $(this).scrollTop();
      if (offsetHome == scrollbarLocation) {
        that.statusScroll = "home";
      } else if (offsetPhim == scrollbarLocation) {
        that.statusScroll = "phim";
      }
    })
  }
  closeTrailer() {
    this.popupTrailer.close();
  }
  statusDN(thamso) {
    this.statusDangNhap = !thamso;
  }
}

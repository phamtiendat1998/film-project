import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupTrailerComponent } from '../popup-trailer/popup-trailer.component';

@Component({
  selector: 'app-user-layouts',
  templateUrl: './user-layouts.component.html',
  styleUrls: ['./user-layouts.component.css']
})
export class UserLayoutsComponent implements OnInit {
  @ViewChild(PopupTrailerComponent) popupTrailer: PopupTrailerComponent;
  public st: boolean = false;
  public statusDangNhap: boolean;
  constructor() { }

  ngOnInit() {
  }
  closeTrailer() {
    this.popupTrailer.close(this.st);
  }
  statusDN(thamso) {
    this.statusDangNhap = !thamso;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.css']
})
export class ItemGheComponent implements OnInit {
  public statusGhe: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  DatGhe() {
    if (this.statusGhe == false) {
      this.statusGhe = true;
    } else {
      this.statusGhe = false;
    }
  }
}

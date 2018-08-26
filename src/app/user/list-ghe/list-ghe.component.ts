import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-list-ghe',
  templateUrl: './list-ghe.component.html',
  styleUrls: ['./list-ghe.component.css']
})
export class ListGheComponent implements OnInit, OnChanges {
  @Input() listGhe;
  public listGheTrai = [];
  public listGhePhai = [];
  public listGheGiua = [];
  public listVe = [];
  constructor() {

  }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    // Dùng xử lý khi tham số input thay đổi
    this.listGheTrai = [];
    this.listGheGiua = [];
    this.listGhePhai = [];
    for (let i = 0; i < this.listGhe.length; i++) {
      if (i < 12) {
        this.listGheTrai.push(this.listGhe[i]);
      } else if (i >= 12 && i < 48) {
        this.listGheGiua.push(this.listGhe[i]);
      } else {
        this.listGhePhai.push(this.listGhe[i]);
      }
    }
  }
  datGheParent(thamso) {
    if (thamso.Status) {
      let itemVe = {
        MaGhe: thamso.Ghe.MaGhe,
        GiaVe: thamso.Ghe.GiaVe
      }
      this.listVe.push(itemVe);
    } else {
      for (let index in this.listVe) {
        if (this.listVe[index].MaGhe == thamso.Ghe.MaGhe) {
          this.listVe.splice(parseInt(index), 1);
        }
      }
    }
  }
}

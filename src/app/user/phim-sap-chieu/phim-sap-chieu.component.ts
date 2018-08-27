import { Component, OnInit } from '@angular/core';
import { Phim } from '../../Model/Phim';
import { PhimService } from '../../services/phim.service';

@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.css']
})
export class PhimSapChieuComponent implements OnInit {
  public dsphim: Phim[] = [];
  public dsphimGroup: Phim[] = [];
  public group = 0;
  public tongGroup = 0;
  constructor(private phimSV: PhimService) { }

  ngOnInit() {
    this.phimSV.layDanhSachPhim().subscribe(
      (kq: any) => {
        for (let i = 0; i < kq.length; i++) {
          if (kq[i].MaPhim > 200) {
            this.dsphim.push(kq[i]);
          }
        }
        this.tongGroup = this.dsphim.length / 8;
        for (let i = this.group * 8; i < this.dsphim.length && i < 8; i++) {
          this.dsphimGroup.push(this.dsphim[i]);
        }
      },
      (error) => {
      }
    )
  }
  nextGroupPhim() {
    if (this.group <= this.tongGroup && this.group !== Math.floor(this.dsphim.length / 8)) {
      this.group++;
      this.dsphimGroup = [];
      for (let i = this.group * 8; i < this.dsphim.length && i < 8 * (this.group + 1); i++) {
        this.dsphimGroup.push(this.dsphim[i]);
      }
    }
  }
  prevGroupPhim() {
    if (this.group > 0) {
      this.group--;
      this.dsphimGroup = [];
      for (let i = this.group * 8; i < this.dsphim.length && i < 8 * (this.group + 1); i++) {
        this.dsphimGroup.push(this.dsphim[i]);
      }
    } else if (this.group === 0) {
      this.dsphimGroup = [];
      for (let i = this.group * 8; i < this.dsphim.length && i < 8; i++) {
        this.dsphimGroup.push(this.dsphim[i]);
      }
    }
  }
}

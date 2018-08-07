import { Component, OnInit } from '@angular/core';
import { PhimService } from '../../services/phim.service';
import { Phim } from '../../Model/Phim';

@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.css']
})
export class PhimDangChieuComponent implements OnInit {
  public dsphim: Phim[] = [];
  public dsphimGroup: Phim[] = [];
  public group = 0;
  public tongGroup = 0;
  constructor(private phimSV: PhimService) { }

  ngOnInit() {
    this.phimSV.layDanhSachPhim().subscribe(
      (kq: any) => {
        this.dsphim = kq;
        this.tongGroup = this.dsphim.length / 8;
        for (let i = this.group * 8; i < this.dsphim.length && i < 8; i++) {
          this.dsphimGroup.push(this.dsphim[i]);
        }
      },
      (error) => {
        console.log(error);
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

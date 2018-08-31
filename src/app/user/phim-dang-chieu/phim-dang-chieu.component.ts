import { Component, OnInit } from '@angular/core';
import { PhimService } from '../../services/phim.service';
import { Phim } from '../../Model/Phim';
import {
  trigger,
  state,
  style,
  transition,
  animation,
  keyframes,
  group,
  animate,
  query,
  stagger
} from '@angular/animations'
@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.css'],
  // animations: [
  //   trigger('cardPhimAnimation', [
  //     transition('* => *', [
  //       query(':leave', [
  //         stagger(100, [
  //           animate('0.5s', style({ opacity: 0 }))
  //         ])
  //       ]),
  //       query(':enter', [
  //         style({ opacity: 0 }),
  //         stagger(100, [
  //           animate('0.5s', style({ opacity: 1 }))
  //         ])
  //       ])
  //     ])
  //   ])
  // ]
})
export class PhimDangChieuComponent implements OnInit {
  public dsphim: Phim[] = [];
  public dsphimGroup: Phim[] = [];
  public group = 0;
  public tongGroup = 0;
  constructor(private phimSV: PhimService) { }

  ngOnInit() {
    // Time Now
    let Now = new Date();
    this.phimSV.layDanhSachPhim().subscribe(
      (kq: any) => {
        for (let i = 0; i < kq.length; i++) {
          let timeFilm = Date.parse(kq[i].NgayKhoiChieu);
          let timeNow = Now.getTime();
          let offset = timeNow - timeFilm;
          // ------------------------
          if (offset >= 0) {
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

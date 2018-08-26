import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from '../../services/phim.service';
import { Phim } from '../../Model/Phim';

@Component({
  selector: 'app-dat-ve-layouts',
  templateUrl: './dat-ve-layouts.component.html',
  styleUrls: ['./dat-ve-layouts.component.css']
})
export class DatVeLayoutsComponent implements OnInit {
  public statusChonNgay: boolean = false;
  public maPhim: string;
  public phim: Phim;
  public listGhe: any;
  constructor(private Activate: ActivatedRoute, private phimSV: PhimService) { }

  ngOnInit() {
    this.Activate.params.subscribe(
      (kq: any) => {
        this.maPhim = kq['maphim'];
        this.phimSV.layChiTietPhim(this.maPhim).subscribe(
          (kq: any) => {
            this.phim = kq;
          }
        )
      }
    )
  }
  chonNgayParent(thamso) {
    this.statusChonNgay = thamso.Status;
    this.phimSV.layChiTietPhongVe(thamso.MaLichChieu).subscribe(
      (kq: any) => {
        this.listGhe = kq.DanhSachGhe;
      },
      (error) => {
        console.log(error);
      }
    )
  }
}

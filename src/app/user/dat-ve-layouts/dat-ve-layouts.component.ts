import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from '../../services/phim.service';
import { Phim } from '../../Model/Phim';
import { ListGheComponent } from '../list-ghe/list-ghe.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dat-ve-layouts',
  templateUrl: './dat-ve-layouts.component.html',
  styleUrls: ['./dat-ve-layouts.component.css']
})
export class DatVeLayoutsComponent implements OnInit {
  @ViewChild(ListGheComponent) listghe: ListGheComponent;
  public statusKTDN: boolean = false;
  public statusError: boolean = false;
  public statusChonNgay: boolean = false;
  public maPhim: string;
  public phim: Phim;
  public listGhe: any;
  public listVe = [];
  public maLichChieu: string;
  constructor(private Activate: ActivatedRoute, private phimSV: PhimService, private authSV: AuthService) { }

  ngOnInit() {
    this.Activate.params.subscribe(
      (kq: any) => {
        this.maPhim = kq['maphim'];
        this.phimSV.layChiTietPhim(this.maPhim).subscribe(
          (kq: any) => {
            this.statusError = true;
            this.phim = kq;
          }
        )
      }
    );
    this.authSV.KiemTraDangNhap();
    if (this.authSV._isLoginUser == false) {
      this.statusKTDN = true;
    } else {
      this.statusKTDN = false;
    }
    console.log(this.authSV._isLoginUser);
  }
  chonNgayParent(thamso) {
    this.maLichChieu = thamso.MaLichChieu;
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
  datVeParent(thamso) {
    this.listVe = thamso;
  }
  xacNhanVe() {
    this.listghe.ktGhe();
    // let taikhoanUser = localStorage.getItem('userLogin');
    // console.log(taikhoanUser);
    // console.log(this.listVe);
    // console.log(this.maLichChieu);
  }
}

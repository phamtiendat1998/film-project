import { Phim } from './../../Model/Phim';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PhimService } from '../../services/phim.service';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.css']
})
export class QuanLyPhimComponent implements OnInit {
  @ViewChild("formThemPhim") formTP: NgForm;
  @ViewChild("formCapNhatPhim") formCNP: NgForm;
  mangPhim:string[] = [];
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  themPhim(phim:Phim, HinhAnh) {
    console.log(HinhAnh[0]);

    phim.MaNhom = "GP03";
    phim.HinhAnh = HinhAnh[0].name;
    this.PhimSV.ThemPhim(phim).subscribe(
      (kq) => {
        this.PhimSV.ThemHinhAnh(HinhAnh[0], phim.TenPhim).subscribe(
          (kqThemHinhAnh) => {
            console.log(kqThemHinhAnh);
          }
        )
        this.mangPhim.unshift(kq);
        this.LayDSP();
        this.formTP.reset();
      },
      (error) => {
        console.log(error);
      }
    )
  }
  //Chỉnh sửa phim
  ChinhSuaPhim(thamso){
    let maphim = thamso.getAttribute("data-maPhim");
    let tenphim = thamso.getAttribute("data-tenPhim");
    let trailer = thamso.getAttribute("data-Trailer");
    let mota = thamso.getAttribute("data-moTa");
    let ngaykhoichieu = thamso.getAttribute("data-ngayKhoiChieu");
    let danhgia = thamso.getAttribute("data-danhGia");
    this.formCNP.setValue({
      MaPhim:maphim,
      TenPhim:tenphim,
      Trailer:trailer,
      MoTa:mota,
      NgayKhoiChieu:ngaykhoichieu,
      DanhGia:danhgia,
  })
}
CapNhatPhim(value:Phim){
  value.MaNhom = "GP03";
  this.PhimSV.capNhatPhim(value).subscribe(
    (kq) => {
     
      this.LayDSP();
      this.formCNP.reset();
    },
    (error) => {
      console.log(error);
    }
  )

}
XoaPhim(value){
  this.PhimSV.XoaPhim(value).subscribe((kq:any)=>{
    console.log(kq);
    this.LayDSP();
  }, error => {
    console.log(error);
  }
);
}
  LayDSP(){
    this.PhimSV.layDanhSachPhim().subscribe(
      (kq: any) => {
        this.mangPhim = kq;
      },
      error => {
        console.log(error);
      }
    );
  }

  constructor(private PhimSV:PhimService) { }

  ngOnInit() {
    setTimeout(() => {
this.LayDSP();
    }, 2000);
  }

}

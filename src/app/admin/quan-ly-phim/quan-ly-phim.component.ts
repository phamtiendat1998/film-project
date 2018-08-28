import { Phim } from './../../Model/Phim';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PhimService } from '../../services/phim.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import * as $ from 'jquery';
declare var $: any;

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
  themPhim(value:Phim, HinhAnh) {
    value.MaNhom = "GP03";
    value.HinhAnh = HinhAnh[0].name;
    console.log(HinhAnh[0]);
    this.PhimSV.ThemPhim(value).subscribe(
      (kq) => {
        this.PhimSV.ThemHinhAnh(HinhAnh[0], value.TenPhim).subscribe(
          (kqThemHinhAnh) => {
            console.log(kqThemHinhAnh);
          }
        )
        setTimeout(()=>{
          this.LayDSP();
          this.formTP.reset();
          $('#btnDongformTP').trigger('click');
        },2000)
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
CapNhatPhim(value:Phim,HinhAnh){
  value.MaNhom = "GP03";
  value.HinhAnh = HinhAnh[0].name;
  this.PhimSV.capNhatPhim(value).subscribe(
    (kq) => {
      this.PhimSV.ThemHinhAnh(HinhAnh[0], value.TenPhim).subscribe(
        (kqThemHinhAnh) => {
          console.log(kqThemHinhAnh);
        }
      )
      this.LayDSP();
      this.formCNP.reset();
      $('#btnDongformCNP').trigger('click');
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

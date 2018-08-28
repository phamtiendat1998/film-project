import { Component, OnInit, ViewChild } from '@angular/core';
import { NguoiDungService } from '../../services/nguoi-dung.service';
import * as $ from 'jquery';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { NguoiDung } from '../../Model/nguoidung';
declare var $: any;

@Component({
  selector: 'app-quan-ly-nguoi-dung',
  templateUrl: './quan-ly-nguoi-dung.component.html',
  styleUrls: ['./quan-ly-nguoi-dung.component.css']
})
export class QuanLyNguoiDungComponent implements OnInit {
  @ViewChild("formDangKy") formDK: NgForm;
  @ViewChild("formCapNhat") formCN: NgForm;
  mangNguoiDung: any[] = [];
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  DangKy(value: NguoiDung) {
    // this.mangNguoiDung.push(value);
    // localStorage.setItem(
    //   "DanhSachNguoiDung",
    //   JSON.stringify(this.mangNguoiDung)
    // );
    value.MaNhom = "GP03";
    this.nguoiDungSV.dangKyNguoiDung(value).subscribe(
      (kq: any) => {
        //console.log(kq)
        this.mangNguoiDung.unshift(value);
        this.formDK.reset();
      },
      error => {
        console.log(error);
      }
    );
  }
  Sua(thamso) {
    let taikhoan = thamso.getAttribute("data-taiKhoan");
    let matkhau = thamso.getAttribute("data-matKhau");
    let hoten = thamso.getAttribute("data-hoTen");
    let email = thamso.getAttribute("data-email");
    let sodt = thamso.getAttribute("data-soDT");
    let maloainguoidung = thamso.getAttribute("data-maLoaiNguoiDung");
    this.formCN.setValue({
      TaiKhoan: taikhoan,
      MatKhau: matkhau,
      HoTen: hoten,
      Email: email,
      SoDT: sodt,
      MaLoaiNguoiDung: maloainguoidung,
    })

  }
  CapNhat(value: NguoiDung) {
    value.MaNhom = "GP03";
    this.nguoiDungSV.capNhatNguoiDung(value).subscribe(
      (kq: any) => {
        //console.log(kq)
        this.LayDSND();
        this.formCN.reset();
      },
      error => {
        console.log(error);
      }
    );
  }
  LayDSND() {
    this.nguoiDungSV.layDanhSachNguoiDung().subscribe(
      (kq: any) => {
        this.mangNguoiDung = kq;
      },
      error => {
        console.log(error);
      }
    );
  }
  XoaNguoiDung(value) {
    this.nguoiDungSV.XoaNguoiDung(value).subscribe((kq: any) => {
      console.log(kq);
      this.LayDSND();
    }, error => {
      console.log(error);
    }
    );
  }
  constructor(private nguoiDungSV: NguoiDungService) { }

  ngOnInit() {
    setTimeout(() => {
      this.LayDSND();
    }, 2000);

    $('#btnDong').click(function () {
      {
        $('#btnDongForm').trigger('click');
      }
    });
  }

}

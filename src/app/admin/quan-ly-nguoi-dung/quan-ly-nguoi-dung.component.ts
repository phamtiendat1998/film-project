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
  mangNguoiDung: any[] = [];
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
      },
      error => {
        console.log(error);
      }
    );
  }
  constructor(private nguoiDungSV: NguoiDungService) { }

  ngOnInit() {
    setTimeout(() => {
      this.nguoiDungSV.layDanhSachNguoiDung().subscribe(
        (kq: any) => {
          this.mangNguoiDung = kq;
        },
        error => {
          console.log(error);
        }
      );
    }, 2000);

    $('body').delegate('#btnDong', 'click', function() {
      $('#btnDongForm').trigger('click');
  });
  }

}

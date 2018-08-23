import { Component, OnInit, ViewChild } from '@angular/core';
import { NguoiDung } from '../../Model/nguoidung';
import { NguoiDungService } from '../../services/nguoi-dung.service';
import { NgForm } from '@angular/forms';
import $ from 'jquery';
import { AuthService } from '../../services/auth.service';
declare var $: any;
@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css']
})
export class DangNhapComponent implements OnInit {
  @ViewChild('formDangNhap') formDN: NgForm;
  public status: boolean = false;
  public validDN: boolean = true;
  constructor(private nguoidungSV: NguoiDungService, private auth: AuthService) { }
  ngOnInit() {
  }
  Stwich() {
    if (this.status === false) {
      // Đăng nhập
      this.status = true;
      this.formDN.reset();
      $('.load').css("display", "none");
    } else {
      // Đăng kí
      this.status = false;
      this.formDN.reset();
      $('.load').css("display", "none");
    }
  }
  DangNhap(obj: NguoiDung) {
    let that = this;
    $('.load').css("display", "block");
    $('.text-dn-dk').css("display", "none");
    setTimeout(function () {
      if (that.status == false) {
        // Đang nhập
        that.nguoidungSV.dangNhapNguoiDung(obj).subscribe(
          (kq: any) => {
            if (kq == 'Tài khoản hoặc mật khẩu không đúng !') {
              // Fail
              that.validDN = false;
              $('.load').css("display", "none");
              $('.text-dn-dk').css("display", "block");
              $('.dnSuc').css("display", "none");
            } else {
              // True
              $('.load').css("display", "none");
              $('.text-dn-dk').css("display", "block");
              $('.dnSuc').css("display", "block");
              that.validDN = true;
              that.formDN.reset();
              setTimeout(function () {
                $('.closeLogin').trigger("click");
                that.CloseDN();
              }, 1000)
              localStorage.setItem('userLogin', JSON.stringify(kq));
              that.auth.DangNhap();
            }
          },
          (error) => {
            that.validDN = false;
          }
        )
      } else {
        // Đăng kí
        // TODO
        // Reset form các thứ
      }
    }, 1500)

  }
  CloseDN() {
    this.status = false;
    this.formDN.reset();
    this.validDN = true;
    $('.dnSuc').css("display", "none");
  }
}

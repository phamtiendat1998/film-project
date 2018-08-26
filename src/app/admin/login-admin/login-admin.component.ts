import { Component, OnInit, ViewChild } from '@angular/core';
import { NguoiDung } from '../../Model/nguoidung';
import { NguoiDungService } from '../../services/nguoi-dung.service';
import { Router } from '../../../../node_modules/@angular/router';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  @ViewChild("formDangNhap") formDN: NgForm;
  KiemTraDangNhap():boolean{
    let nguoiDung =localStorage.getItem("localNguoiDung");
    if(nguoiDung != null){
      return true;
    }
    return false;
  }
  LayThongTinDang9Nhap():NguoiDung{
    if (this.KiemTraDangNhap()) {
      let nguoiDung:NguoiDung = JSON.parse(localStorage.getItem('localNguoiDung'));
      return nguoiDung;
    }
    return null;
  }
  DangXuat():void{
    localStorage.removeItem('localNguoiDung');
    this.router.navigate(['admin']);
  }
  DangNhap(value: NguoiDung) {
    value.MaLoaiNguoiDung ="QuanTri";
    this.nguoiDungSV.dangNhapNguoiDung(value).subscribe((kq:any)=>{
      if (value.MaLoaiNguoiDung == kq.MaLoaiNguoiDung) {
        
          this.router.navigate(['admintrangchu/charts']);
       
      }else{
        this.router.navigate(['admin']);
      }
    },error=>{
      console.log(error);
    });
  }
  constructor(private nguoiDungSV: NguoiDungService,private router:Router) { }

  ngOnInit() {
  }

}

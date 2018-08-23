import { NguoiDung } from './../Model/nguoidung';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import "rxjs/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class NguoiDungService {
  dangKyNguoiDung(user: NguoiDung) {
    let urlDangKy = `http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    let headerDangKy = new Headers();
    headerDangKy.append("Content-Type", "application/json;charset=UTF-8");
    let obServe: Observable<any> = this._http.post(urlDangKy, user, { headers: headerDangKy }).map((result: Response) => result.json());
    return obServe;
  }
  layDanhSachNguoiDung() {
    let urlDSND = `http://sv2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03`;
    let obServe: Observable<any> = this._http.get(urlDSND).map((result: Response) => result.json());
    return obServe;
  }
  dangNhapNguoiDung(user: NguoiDung) {
    let urlDangNhap = `http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${user.TaiKhoan}&matkhau=${user.MatKhau}`;
    let obServe: Observable<any> = this._http.post(urlDangNhap, user).map((result: Response) => result.json());
    return obServe;
  }
  constructor(private _http: Http) { }
}

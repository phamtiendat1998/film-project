import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class PhimService {

  layDanhSachPhim() {
    let urlDSP = `http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP03`;
    let obServe: Observable<any> = this._http.get(urlDSP).map((result: Response) => result.json());
    return obServe;
  }
  layChiTietPhim(maPhim){
    let urlCTP = `http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`;
    let obServe: Observable<any> = this._http.get(urlCTP).map((result: Response) => result.json());
    return obServe; 
  }
  constructor(private _http: Http) { }
}

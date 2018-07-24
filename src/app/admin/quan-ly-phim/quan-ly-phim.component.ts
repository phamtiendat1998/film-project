import { Component, OnInit } from '@angular/core';
import { PhimService } from '../../services/phim.service';

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.css']
})
export class QuanLyPhimComponent implements OnInit {
  mangPhim:string[] = [];

  constructor(private PhimSV:PhimService) { }

  ngOnInit() {
    setTimeout(() => {
      this.PhimSV.layDanhSachPhim().subscribe(
        (kq: any) => {
          this.mangPhim = kq;
        },
        error => {
          console.log(error);
        }
      );
    }, 5000);
  }

}

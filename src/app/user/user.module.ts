import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UserLayoutsComponent } from './user-layouts/user-layouts.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NewsComponent } from './news/news.component';
import { ItemPointComponent } from './item-point/item-point.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { ListPhimComponent } from './list-phim/list-phim.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PopupTrailerComponent } from './popup-trailer/popup-trailer.component';
import { PipeModule } from '../pipe/pipe.module';
import { ChiTietPhimLayoutsComponent } from './chi-tiet-phim-layouts/chi-tiet-phim-layouts.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { ItemDienVienComponent } from './item-dien-vien/item-dien-vien.component';
import { DatVeLayoutsComponent } from './dat-ve-layouts/dat-ve-layouts.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';
import { FormsModule } from '@angular/forms';
import { LoadItemComponent } from './load-item/load-item.component';
import { ChonPhimComponent } from './chon-phim/chon-phim.component';
import { ChonGheComponent } from './chon-ghe/chon-ghe.component';
import { ThanhToanComponent } from './thanh-toan/thanh-toan.component';
import { AnouThongBaoComponent } from './anou-thong-bao/anou-thong-bao.component';
import { PickGioComponent } from './pick-gio/pick-gio.component';
import { ListGheComponent } from './list-ghe/list-ghe.component';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatDialogModule, BrowserAnimationsModule, NoopAnimationsModule, PipeModule, RouterModule, FormsModule
  ],
  declarations: [SideBarComponent, UserLayoutsComponent, NavBarComponent, SearchBarComponent, CarouselComponent, NewsComponent, ItemPointComponent, DangNhapComponent, ItemPhimComponent, ListPhimComponent, PhimDangChieuComponent, PopupTrailerComponent, ChiTietPhimLayoutsComponent, ItemDienVienComponent, DatVeLayoutsComponent, ItemGheComponent, LoadItemComponent, ChonPhimComponent, ChonGheComponent, ThanhToanComponent, AnouThongBaoComponent, PickGioComponent, ListGheComponent],
  exports: [
    SideBarComponent, UserLayoutsComponent, NavBarComponent, SearchBarComponent, CarouselComponent, NewsComponent, ItemPointComponent, DangNhapComponent, ItemPhimComponent, ListPhimComponent, PhimDangChieuComponent, PopupTrailerComponent, ChiTietPhimLayoutsComponent, ItemDienVienComponent, DatVeLayoutsComponent, ItemGheComponent, LoadItemComponent, ChonPhimComponent, ChonGheComponent, ThanhToanComponent, AnouThongBaoComponent, PickGioComponent, ListGheComponent
  ]
})
export class UserModule { }

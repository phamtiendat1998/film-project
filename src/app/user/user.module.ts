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

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatDialogModule, BrowserAnimationsModule, NoopAnimationsModule
  ],
  declarations: [SideBarComponent, UserLayoutsComponent, NavBarComponent, SearchBarComponent, CarouselComponent, NewsComponent, ItemPointComponent, DangNhapComponent],
  exports: [
    SideBarComponent, UserLayoutsComponent, NavBarComponent, SearchBarComponent, CarouselComponent, NewsComponent, ItemPointComponent, DangNhapComponent
  ]
})
export class UserModule { }

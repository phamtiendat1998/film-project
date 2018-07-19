import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UserLayoutsComponent } from './user-layouts/user-layouts.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NewsComponent } from './news/news.component';
import { ItemPointComponent } from './item-point/item-point.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SideBarComponent, UserLayoutsComponent, NavBarComponent, SearchBarComponent, CarouselComponent, NewsComponent, ItemPointComponent],
  exports: [
    SideBarComponent, UserLayoutsComponent, NavBarComponent, SearchBarComponent, CarouselComponent, NewsComponent,ItemPointComponent
  ]
})
export class UserModule { }

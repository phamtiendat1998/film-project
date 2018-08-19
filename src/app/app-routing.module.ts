
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserLayoutsComponent } from "./user/user-layouts/user-layouts.component";
import { AdminLayoutComponent } from "./admin/admin-layout/admin-layout.component";
import { QuanLyPhimComponent } from "./admin/quan-ly-phim/quan-ly-phim.component";
import { QuanLyNguoiDungComponent } from "./admin/quan-ly-nguoi-dung/quan-ly-nguoi-dung.component";
import { LoginAdminComponent } from "./admin/login-admin/login-admin.component";
import { HeaderAdminComponent } from "./admin/header-admin/header-admin.component";
import { TrangchuAdminComponent } from "./admin/trangchu-admin/trangchu-admin.component";
import { ChiTietPhimLayoutsComponent } from "./user/chi-tiet-phim-layouts/chi-tiet-phim-layouts.component";
const appRoute: Routes = [
  { path: "", component: UserLayoutsComponent },
  { path: 'chitiet/:maphim', component: ChiTietPhimLayoutsComponent },
  {
    path: "admin", component: LoginAdminComponent
  },
  {
    path: "admintrangchu", component: AdminLayoutComponent, children: [
      { path: 'charts', component: TrangchuAdminComponent },
      { path: 'quanlyphim', component: QuanLyPhimComponent },
      { path: 'quanlynguoidung', component: QuanLyNguoiDungComponent },
      { path: 'admin', component: LoginAdminComponent }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoute)]
})
export class AppRoutingModule { }

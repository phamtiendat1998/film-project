
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserLayoutsComponent } from "./user/user-layouts/user-layouts.component";
import { AdminLayoutComponent } from "./admin/admin-layout/admin-layout.component";
const appRoute: Routes = [
  {
    path: "",
    component: UserLayoutsComponent
  },
  { path: "admin", component: AdminLayoutComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoute)]
})
export class AppRoutingModule {}

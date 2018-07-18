import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginAdminComponent, HeaderAdminComponent, AdminLayoutComponent],
  exports:[LoginAdminComponent,HeaderAdminComponent,AdminLayoutComponent]
})
export class AdminModule { }

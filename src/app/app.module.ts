import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { DepartmentComponent } from './department/department.component';
import { JobpositionComponent } from './jobposition/jobposition.component';
import { EmployeeComponent } from './employee/employee.component';
import { PublicService } from './services/public.service';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { ShowPosComponent } from './jobposition/show-pos/show-pos.component';
import { AddEditPosComponent } from './jobposition/add-edit-pos/add-edit-pos.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    ProfileComponent,
    DepartmentComponent,
    JobpositionComponent,
    EmployeeComponent,
    ShowDepComponent,
    AddEditDepComponent,
    ShowPosComponent,
    AddEditPosComponent,
    ShowEmpComponent,
    AddEditEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, PublicService],
  bootstrap: [AppComponent]
})
export class AppModule { }

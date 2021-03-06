import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { NgxSpinnerModule } from "ngx-spinner";
import {NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    NgxMaskModule.forRoot(),
    NgxNumberSpinnerModule,
    NgxSpinnerModule,
    NgxPaginationModule
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthLayoutModule { }

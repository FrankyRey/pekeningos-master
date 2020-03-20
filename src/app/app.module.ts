import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';


//Servicios

import { FosUserService } from './services/fos-user.service';
import { ClientesService } from './services/clientes.service';
import { ProductosService } from './services/productos.service';
import { BoletosService } from './services/boletos.service';
import { OrdenesService } from './services/ordenes.service';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    NgxNumberSpinnerModule  
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ],
  providers: [
    FosUserService,
    ClientesService,
    ProductosService,
    BoletosService,
    OrdenesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

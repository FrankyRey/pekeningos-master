import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FosUserComponent } from './fos-user/fos-user.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { BoletosComponent } from './boletos/boletos.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { BoletosVentaComponent } from './boletos-venta/boletos-venta.component';
import { ValidaClienteComponent } from './valida-cliente/valida-cliente.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { ResumenVentaComponent } from './resumen-venta/resumen-venta.component';
import { ValidaOrdenComponent } from './valida-orden/valida-orden.component';
import { PagoBoletosComponent } from './pago-boletos/pago-boletos.component';
import { ProductosVentaComponent } from './productos-venta/productos-venta.component';
import { EstatusProductosComponent } from './estatus-productos/estatus-productos.component';
import { CategoriasProductosComponent } from './categorias-productos/categorias-productos.component';
import { ModalCategoriaProductoComponent } from './modal-categoria-producto/modal-categoria-producto.component';
import { ModalEstatusProductoComponent } from './modal-estatus-producto/modal-estatus-producto.component';
import { ModalProductosComponent } from './modal-productos/modal-productos.component';
import { ModalUsuariosComponent } from './modal-usuarios/modal-usuarios.component';
import { EstatusClientesComponent } from './estatus-clientes/estatus-clientes.component';
import { ModalEstatusClientesComponent } from './modal-estatus-clientes/modal-estatus-clientes.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    FosUserComponent,
    ClientesComponent,
    ProductosComponent,
    BoletosComponent,
    OrdenesComponent,
    BoletosVentaComponent,
    ValidaClienteComponent,
    RegistroClienteComponent,
    ResumenVentaComponent,
    ValidaOrdenComponent,
    PagoBoletosComponent,
    ProductosVentaComponent,
    EstatusProductosComponent,
    CategoriasProductosComponent,
    ModalCategoriaProductoComponent,
    ModalEstatusProductoComponent,
    ModalProductosComponent,
    ModalUsuariosComponent,
    EstatusClientesComponent,
    ModalEstatusClientesComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }

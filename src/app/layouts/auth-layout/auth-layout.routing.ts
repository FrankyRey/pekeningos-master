import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { BoletosVentaComponent } from '../../components/boletos-venta/boletos-venta.component';
import { ValidaClienteComponent } from '../../components/valida-cliente/valida-cliente.component';
import { RegistroClienteComponent } from '../../components/registro-cliente/registro-cliente.component';
import { ResumenVentaComponent } from '../../components/resumen-venta/resumen-venta.component';
import { ValidaOrdenComponent } from '../../components/valida-orden/valida-orden.component';
import { PagoBoletosComponent } from '../../components/pago-boletos/pago-boletos.component';
import { ProductosVentaComponent } from '../../components/productos-venta/productos-venta.component';

//Guard para URL
import { IdentityGuardService } from '../../services/identity-guard.service';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'dashboard',          component: DashboardComponent, canActivate: [IdentityGuardService] },
    { path: 'boletos-venta',       component: BoletosVentaComponent, canActivate: [IdentityGuardService] },
    { path: 'valida-cliente',       component: ValidaClienteComponent, canActivate: [IdentityGuardService] },
    { path: 'registro-cliente', component: RegistroClienteComponent, canActivate: [IdentityGuardService] },
    { path: 'resumen-venta', component: ResumenVentaComponent, canActivate: [IdentityGuardService] },
    { path: 'valida-orden', component: ValidaOrdenComponent, canActivate: [IdentityGuardService] },
    { path: 'pago-boletos', component: PagoBoletosComponent, canActivate: [IdentityGuardService] },
    { path: 'productos-venta', component: ProductosVentaComponent, canActivate: [IdentityGuardService] }
];

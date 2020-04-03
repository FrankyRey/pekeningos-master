import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { FosUserComponent  } from '../../components/fos-user/fos-user.component';
import { ClientesComponent  } from '../../components/clientes/clientes.component';
import { ProductosComponent  } from '../../components/productos/productos.component';
import { BoletosComponent  } from '../../components/boletos/boletos.component';
import { OrdenesComponent  } from '../../components/ordenes/ordenes.component';
import { EstatusProductosComponent } from '../../components/estatus-productos/estatus-productos.component';
import { CategoriasProductosComponent } from '../../components/categorias-productos/categorias-productos.component';
import { EstatusClientesComponent } from '../../components/estatus-clientes/estatus-clientes.component';
import { EstatusOrdenesComponent } from '../../components/estatus-ordenes/estatus-ordenes.component';

//Guard para URL
import { IdentityGuardService } from '../../services/identity-guard.service';
import { identity } from 'rxjs';



export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, canActivate: [IdentityGuardService], data: {role: 'ADMIN_USER'} },
    { path: 'fos-user',   component: FosUserComponent, canActivate: [IdentityGuardService], data: {role: 'ADMIN_USER'} },
    { path: 'clientes',         component: ClientesComponent, canActivate: [IdentityGuardService], data: {role: 'ADMIN_USER'} },
    { path: 'productos',          component: ProductosComponent, canActivate: [IdentityGuardService], data: {role: 'ADMIN_USER'} },
    { path: 'boletos',           component: BoletosComponent, canActivate: [IdentityGuardService], data: {role: 'ADMIN_USER'} },
    { path: 'ordenes',           component: OrdenesComponent, canActivate: [IdentityGuardService], data: {role: 'ADMIN_USER'} },
    { path: 'estatus-productos',           component: EstatusProductosComponent, canActivate: [IdentityGuardService], data: {role: 'ADMIN_USER'} },
    { path: 'categorias-productos',           component: CategoriasProductosComponent, canActivate: [IdentityGuardService], data: {role: 'ADMIN_USER'} },
    { path: 'estatus-clientes',           component: EstatusClientesComponent, canActivate: [IdentityGuardService], data: {role: 'ADMIN_USER'} },
    { path: 'estatus-ordenes',           component: EstatusOrdenesComponent, canActivate: [IdentityGuardService], data: {role: 'ADMIN_USER'} },
];

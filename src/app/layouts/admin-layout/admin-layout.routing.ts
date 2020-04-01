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

//Guard para URL
import { IdentityGuardService } from '../../services/identity-guard.service';



export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, canActivate: [IdentityGuardService] },
    { path: 'fos-user',   component: FosUserComponent, canActivate: [IdentityGuardService] },
    { path: 'clientes',         component: ClientesComponent, canActivate: [IdentityGuardService] },
    { path: 'productos',          component: ProductosComponent, canActivate: [IdentityGuardService] },
    { path: 'boletos',           component: BoletosComponent, canActivate: [IdentityGuardService] },
    { path: 'ordenes',           component: OrdenesComponent, canActivate: [IdentityGuardService] },
    { path: 'estatus-productos',           component: EstatusProductosComponent, canActivate: [IdentityGuardService] },
    { path: 'categorias-productos',           component: CategoriasProductosComponent, canActivate: [IdentityGuardService] },
    { path: 'estatus-clientes',           component: EstatusClientesComponent, canActivate: [IdentityGuardService] },
];

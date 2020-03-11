import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { FosUserComponent  } from '../../components/fos-user/fos-user.component';
import { ClientesComponent  } from '../../components/clientes/clientes.component';
import { ProductosComponent  } from '../../components/productos/productos.component';
import { BoletosComponent  } from '../../components/boletos/boletos.component';
import { OrdenesComponent  } from '../../components/ordenes/ordenes.component';
import { EstatusProductosComponent } from '../../components/estatus-productos/estatus-productos.component'


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'fos-user',   component: FosUserComponent },
    { path: 'clientes',         component: ClientesComponent },
    { path: 'productos',          component: ProductosComponent },
    { path: 'boletos',           component: BoletosComponent },
    { path: 'ordenes',           component: OrdenesComponent },
    { path: 'estatus-productos',           component: EstatusProductosComponent },
];

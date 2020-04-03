import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    category: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '', category:'Módulo' },
    { path: '/fos-user', title: 'FOS USER',  icon:'ni-planet text-blue', class: '', category:'Módulo' },
    { path: '/clientes', title: 'Clientes',  icon:'ni-pin-3 text-orange', class: '', category:'Módulo' },
    { path: '/productos', title: 'Productos',  icon:'ni-single-02 text-yellow', class: '', category:'Módulo' },
    { path: '/boletos', title: 'Boletos',  icon:'ni-bullet-list-67 text-red', class: '', category:'Módulo' },
    { path: '/ordenes', title: 'Órdenes',  icon:'ni-key-25 text-info', class: '', category:'Módulo' },
    { path: '/estatus-ordenes', title: 'Estatus Ordenes',  icon:'ni-archive-2 text-primary', class: '', category:'Catálogo' },
    { path: '/categorias-productos', title: 'Categorias Productos',  icon:'ni-folder-17 text-blue', class: '', category:'Catálogo' },
    { path: '/estatus-productos', title: 'Estatus Productos',  icon:'ni-delivery-fast text-orange', class: '', category:'Catálogo' },
    { path: '/estatus-clientes', title: 'Estatus Clientes',  icon:'ni-badge text-yellow', class: '', category:'Catálogo' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}

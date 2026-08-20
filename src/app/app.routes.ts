import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'inventory',
    loadComponent: () => import('./pages/inventory/inventory.page').then( m => m.InventoryPage)
  },
  {
    path: 'sales',
    loadComponent: () => import('./pages/sales/sales.page').then( m => m.SalesPage)
  },
];

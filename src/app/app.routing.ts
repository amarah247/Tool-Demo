import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [{
  path: '',
  component: FullComponent,
  children: [{ 
    path: '', 
    redirectTo: '/kpi', 
    pathMatch: 'full' 
  }, {
    path: '',
    loadChildren: './material-component/material.module#MaterialComponentsModule'
  }, {
    path: 'starter',
    loadChildren: './starter/starter.module#StarterModule'
  }, {
    path: 'kpi',
    loadChildren: './kpi/kpi.module#KpiModule'
  },
  {
    path: 'imports',
    loadChildren: './imports/imports.module#ImportsModule'
  }]
}];


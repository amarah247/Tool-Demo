import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportsComponent } from './imports.component';
import {RouterModule} from '@angular/router';
import {ImportsRoutes} from './imports.routing';
import { DemoMaterialModule} from '../demo-material-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ImportsRoutes)
  ],
  declarations: [ImportsComponent]
})
export class ImportsModule { }


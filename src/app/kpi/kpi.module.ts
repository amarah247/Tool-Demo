import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule} from '../demo-material-module';

import { KpiComponent } from './kpi.component';
import {VenueDetailsComponent} from './venue-details/venue-details.component';
import {CarrierLevelComponent} from './venue-details/carrier-level/carrier-level.component';
import { ZoneLevelComponent } from './venue-details/zone-level/zone-level.component';
import { WorseOffendersComponent } from './venue-details/worse-offenders/worse-offenders.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';


import { KpiRoutes } from './kpi.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(KpiRoutes),
    DemoMaterialModule,
    ChartsModule   
  ],
  declarations: [ KpiComponent,VenueDetailsComponent,CarrierLevelComponent, ZoneLevelComponent, WorseOffendersComponent]
})
export class KpiModule { }

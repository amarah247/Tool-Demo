import { Routes } from '@angular/router';

import { KpiComponent } from './kpi.component';
import { VenueDetailsComponent} from './venue-details/venue-details.component';

export const KpiRoutes: Routes = [
{
    path: '',
    component: KpiComponent
  },
{
    path: 'details',
    component: VenueDetailsComponent
  }
];
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForecastModalComponent } from './forecast-modal/forecast-modal.component';
import { GridItemComponent } from './dashboard/grid-item/grid-item.component';


@NgModule({
  declarations: [DashboardComponent, ForecastModalComponent, GridItemComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

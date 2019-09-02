import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { AgGridModule } from "ag-grid-angular";
import { CarExampleComponent } from '../grid/car-example/car-example.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule,
    AgGridModule.withComponents([CarExampleComponent])],
  declarations: [DashboardComponent,CarExampleComponent]
})
export class DashboardModule {}

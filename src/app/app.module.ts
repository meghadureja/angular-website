import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { DashboardModule } from "./dashboard/dashboard.module";
import { LayoutModule } from "./layout/layout.module";

import { AgGridModule } from "ag-grid-angular";
// import { CarExampleModule } from './grid/car-example/car-example.module';
import { CarExampleComponent } from "./grid/car-example/car-example.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [AppComponent, CarExampleComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    DashboardModule,
    AgGridModule.withComponents([CarExampleComponent])
    // ,CarExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { SharedModules } from "../shared/shared.module";
import{FormsModule}from "@angular/forms";

//ng2-charts
import{ChartsModule}from 'ng2-charts';


import { PagesComponent } from './pages.component';
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PAGES_ROUTES } from "./pages.routes";

//temporal
import { IncrementadorComponent } from '../component/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../component/grafico-dona/grafico-dona.component';

@NgModule({
declarations:[
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent
],
exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
],
imports:[
    SharedModules,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule

]

})
export class PagesModules{ }


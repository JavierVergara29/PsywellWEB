import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { AppRoutingModule } from './app-routing.module'; // Importa AppRoutingModule
import { FormsModule } from '@angular/forms'; // Si utilizas formularios
import { HttpClientModule } from '@angular/common/http'; // Si haces peticiones HTTP

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmotionalStatusComponent } from './emotional-status/emotional-status.component';
import { PhysiologicalMonitorComponent } from './physiological-monitor/physiological-monitor.component';
import { ReportsComponent } from './reports/reports.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component'; // Asegúrate de importar todos los componentes creados
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmotionalStatusComponent,
    PhysiologicalMonitorComponent,
    ReportsComponent,
    PatientsListComponent,
    PatientDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule, // Importa FormsModule si lo utilizas
    HttpClientModule, // Importa HttpClientModule si haces peticiones HTTP
    RouterModule, // Importa RouterModule
    AppRoutingModule // Importa AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrap del componente raíz
})
export class AppModule {}

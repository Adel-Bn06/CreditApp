import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CreditFormComponent } from './components/credit-form/credit-form.component';
import { SummaryResultsComponent } from './components/summary-results/summary-results.component';
import { AmortizationTableComponent } from './components/amortization-table/amortization-table.component';

import { SimulationService } from './services/simulation.service'; 

@NgModule({
  declarations: [
    AppComponent,
    CreditFormComponent,
    SummaryResultsComponent,
    AmortizationTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SimulationService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-amortization-table',
  templateUrl: './amortization-table.component.html',
  styleUrls: ['./amortization-table.component.css']
})
export class AmortizationTableComponent {

  @Input() rows: any[];
}
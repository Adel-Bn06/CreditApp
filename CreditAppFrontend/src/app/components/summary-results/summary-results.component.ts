import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results-summary',
  templateUrl: './summary-results.component.html',
  styleUrls: ['./summary-results.component.css']
})
export class SummaryResultsComponent {

  @Input() result: any; 
}
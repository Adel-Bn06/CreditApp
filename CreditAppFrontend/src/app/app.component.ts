import { Component } from '@angular/core';
import { SimulationService } from './services/simulation.service';
import { SimulationRequest } from './models/simulation-request.model';
import { SimulationResponse } from './models/simulation-response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  simulationResult?: SimulationResponse; 

  constructor(private simulationService: SimulationService) {}

  handleSimulate(data: SimulationRequest) {
    console.log('Données envoyées au backend :', data);

    this.simulationService.simulate(data).subscribe(
      (result: SimulationResponse) => {
        console.log('Résultat reçu du backend :', result);
        this.simulationResult = result; 
      },
      (error) => console.error('Erreur backend :', error)
    );
  }
}
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.css']
})
export class CreditFormComponent {

  // données du formulaire
  model = {
    montantAchat: 120000,
    fondsPropres: 20000,
    duree: 240,
    tauxAnnuel: 2.4
  };


  @Output() onSimulate = new EventEmitter<any>();

  simulate() {
    this.onSimulate.emit(this.model);
  }
  simulateFromInputs(montant: string, fonds: string, duree: string, taux: string) {
  this.model = {
    montantAchat: parseFloat(montant),
    fondsPropres: parseFloat(fonds),
    duree: parseInt(duree, 10),
    tauxAnnuel: parseFloat(taux)
  };

  this.onSimulate.emit(this.model);
}
}
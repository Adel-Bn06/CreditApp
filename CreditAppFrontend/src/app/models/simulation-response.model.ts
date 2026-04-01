import { AmortizationRow } from './amortization-row.model';

export interface SimulationResponse {
  montantNet: number;
  mensualite: number;
  tableau: AmortizationRow[];
}
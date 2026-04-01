import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { SimulationRequest } from '../models/simulation-request.model';
import { SimulationResponse } from '../models/simulation-response.model';
import 'rxjs/add/operator/map'; // pour .map()

@Injectable()
export class SimulationService {

  private api = 'https://localhost:44330/api/credit/simulate';

  constructor(private http: Http) {}

  simulate(data: SimulationRequest) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.api, JSON.stringify(data), options)
      .map(response => response.json() as SimulationResponse);
  }
}
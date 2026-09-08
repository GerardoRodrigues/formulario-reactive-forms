import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IStatesResponse } from '../../../shared/models/states-response';
import { map } from 'rxjs';
import { ICitiesResponse } from '../../../shared/models/cities-response';

@Injectable({
  providedIn: 'root',
})
export class StatesAndCitiesApi {
  private readonly _httpClient = inject(HttpClient);

  getStates() {
    return this._httpClient
      .post<IStatesResponse>('https://countriesnow.space/api/v0.1/countries/states', {
        country: 'Brazil',
      })
      .pipe(map((response) => response.data.states));
  }

  getCities(state: string) {
    return this._httpClient
      .post<ICitiesResponse>('https://countriesnow.space/api/v0.1/countries/state/cities', {
        country: 'Brazil',
        state,
      })
      .pipe(map((response) => response.data));
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators'

import { Country } from './Models/County';
import { COUNTRIES } from './Models/mock-country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }

  countries = of(COUNTRIES)
  getCountries(): Observable<Country[]> {
    return this.countries
  }

  getCountryById(id: number): Observable<Country> {
    return this.countries.pipe
    (map(
      countries => countries.find(country => country.id === +id)!
      )
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../Models/County';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {
  constructor(
    private countriesService: CountriesService
  ) { }

  countries: Country[] = []
  ngOnInit(): void {
    this.getCountries()
  }

  getCountries() {
    this.countriesService
    .getCountries()
    .subscribe(countries => this.countries = countries)
  }
}

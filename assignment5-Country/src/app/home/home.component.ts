import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../countries.service';
import { Country } from '../Models/County';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private countriesService: CountriesService
  ) { }
  
  countries: Country[] = []
  mostPopulated:any = []
  mostLargest: any = []

  ngOnInit(): void {
    this.getMostPopulated()
    this.getMostLargest()
  }

  getMostPopulated() {
    this.countriesService
    .getCountries()
    .subscribe((listCountry) => {
      this.countries = listCountry,
      this.mostPopulated = this.countries.map((c) => {
        return c
      }).sort((a,b) => b.population - a.population).slice(0,3)
    })
  }

  getMostLargest() {
    this.countriesService
    .getCountries()
    .subscribe((listCountry) => {
      this.countries = listCountry,
      this.mostLargest = this.countries.map((c) => {
        return c
      }).sort((a,b) => +b.area - +a.area).slice(0,3)
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountriesService } from '../countries.service';
import { Country } from '../Models/County';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  countryId: number
  country: Country = {} as Country
  constructor(
    private activatedRoute: ActivatedRoute,
    private countriService: CountriesService
  ) {
    this.countryId = this.activatedRoute.snapshot.params.id
   }

  ngOnInit(): void {
    this.getCountryById(this.countryId)
  }
  getCountryById(id: number) {
    this.countriService 
    .getCountryById(id)
    .subscribe(c => this.country = c)
  }
}

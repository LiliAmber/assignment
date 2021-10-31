import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/Models/Country';

@Component({
  selector: 'app-all-country',
  templateUrl: './all-country.component.html',
  styleUrls: ['./all-country.component.css']
})
export class AllCountryComponent implements OnInit {
  countries: Country[] = []
  sortPopulate: any = []
  constructor() { }

  ngOnInit(): void {
    this.countries = [
      {
        name: 'Russia',
        capital: 'Moscow',
        area: '123456 km2',
        population: 23456.0909021,
        GDP: 123468713,
        currency: 'uang moskow'
      },
      {
        name: 'Russia1',
        capital: 'Moscow',
        area: '123457 km2',
        population: 23456.0909022,
        GDP: 123468713,
        currency: 'uang moskow'
      },
      {
        name: 'Russia2',
        capital: 'Moscow',
        area: '123458 km2',
        population: 23456.0909023,
        GDP: 123468713,
        currency: 'uang moskow'
      },
      {
        name: 'Russia3',
        capital: 'Moscow',
        area: '123459 km2',
        population: 23456.0909024,
        GDP: 123468713,
        currency: 'uang moskow'
      },
      {
        name: 'Russia4',
        capital: 'Moscow',
        area: '123451 km2',
        population: 23456.0909028,
        GDP: 123468713,
        currency: 'uang moskow'
      },
    ]

    this.sortPopulate = this.countries.map((v, i) => {
      return { i, value: v.population, name: v.name };
    }).slice(0,3)
    console.log(this.sortPopulate)
  }
}

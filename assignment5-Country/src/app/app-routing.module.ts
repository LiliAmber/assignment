import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { NoPageFoundsComponent } from './no-page-founds/no-page-founds.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'allCountries', component: AllCountriesComponent},
  {path: 'country/:id', component: CountryDetailsComponent},
  {path: '**', component: NoPageFoundsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

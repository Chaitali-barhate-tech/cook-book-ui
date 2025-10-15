import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';

const routes: Routes = [
  {
    path: '', component: CountriesListComponent
  },
  {
    path: ':country', component: CountryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriessRoutingModule { }

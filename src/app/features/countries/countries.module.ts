import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { CountriessRoutingModule } from './countries-routing.module';
import { CountriesListComponent } from './components/countries-list/countries-list.component';


@NgModule({
  declarations: [
    CountriesListComponent
  ],
  imports: [
    CommonModule,
    CountriessRoutingModule,
    SharedModule
  ]
})
export class CountriesModule { }

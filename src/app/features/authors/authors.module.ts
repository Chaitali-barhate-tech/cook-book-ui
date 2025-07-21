import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsRoutingModule } from './authors-routing.module'
import { SharedModule } from 'src/app/shared/shared.module';

import { AuthorsListComponent } from './components/authors-list/authors-list.component';



@NgModule({
  declarations: [
    AuthorsListComponent
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    SharedModule
  ]
})
export class AuthorsModule { }

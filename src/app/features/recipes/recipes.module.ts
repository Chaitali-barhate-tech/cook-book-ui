import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { SharedModule } from 'src/app/shared/shared.module';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesListComponent } from './components/recipies-list/recipes-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';


@NgModule({
  declarations: [
    RecipesListComponent,
    RecipeDetailsComponent
  ],
  imports: [
    CommonModule,
    NgxSliderModule,
    SharedModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }

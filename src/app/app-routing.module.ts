import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'recipes',
    loadChildren: () => import('./features/recipes/recipes.module').then(m => m.RecipesModule)
  },
  {
    path: 'authors',
    loadChildren: () => import('./features/authors/authors.module').then(m => m.AuthorsModule)
  },
  {
    path: 'countries',
    loadChildren: () => import('./features/countries/countries.module').then(m => m.CountriesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

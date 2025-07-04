import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  public recipesList: any[] = [];
  constructor(private recipesService: RecipesService, private route: ActivatedRoute) {

  }

  getRecipesList(page:Number) {
    this.recipesService.getRecipiesList(page).subscribe({
      next: (data) => {
        this.recipesList = data;
        console.log('Data >>> ', this.recipesList);
      }
    }) 
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const query = Number(params.get('p')) || 1;
      console.log('Query >> ', query);
      this.getRecipesList(query);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  public recipeDetails:any = {};
  constructor(private route: ActivatedRoute, private recipesService: RecipesService) {

  }

  getRecipeDetails(id: any) {
    this.recipesService.getRecipieDetails(id).subscribe({
      next: (data) => {
        this.recipeDetails = data;
        console.log('Data >>> ', this.recipeDetails);
      }
    }) 
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const recipeId = params.get('id');
      console.log('Recipe ID:', recipeId);
      this.getRecipeDetails(recipeId);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  public recipeDetails:any = {};
  constructor(private route: ActivatedRoute, private commonService: CommonService) {

  }

  getRecipeDetails(id: any) {
    this.commonService.getRecipieDetails(id).subscribe({
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

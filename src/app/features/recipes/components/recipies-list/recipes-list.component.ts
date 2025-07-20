import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  public recipesList: any[] = [];
  public totalCount: number = 0;
  public recordsPerPage: number = 10;
  constructor(private commonService: CommonService, private route: ActivatedRoute) {

  }

  getRecipesList(page:Number) {
    this.commonService.getRecipiesList(page).subscribe({
      next: (data) => {
        this.recipesList = data[0].recipeData;
        this.totalCount = data[0].total[0]?.totalCount;
        console.log('Data >>> ', this.recipesList);
        console.log('totalCount >>> ', this.totalCount);

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

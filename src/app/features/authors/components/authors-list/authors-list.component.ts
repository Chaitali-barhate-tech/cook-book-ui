import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit {
  public authorsRecipes:any[] = [];
    public authorsCount:number = 0;
    public recordsPerPage:number = 12;
  
    constructor(private commonService:CommonService, private route: ActivatedRoute) {
  
    }
  
    getauthorsData(page:Number) {
      this.commonService.getRecipesbyAuthor(page).subscribe({
        next: (data) => {
          this.authorsRecipes = data[0].authorsList;
          this.authorsCount = data[0].total[0].totalAuthorsCount;
          console.log('authors data > ', data);
        }
      })
    }
  
    ngOnInit(): void {
      this.route.queryParamMap.subscribe(params => {
        const query = Number(params.get('p')) || 1;
        this.getauthorsData(query);
      })
    }
}

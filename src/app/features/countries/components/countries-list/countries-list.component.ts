import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  public countriesRecipes:any[] = [];
  public countriesCount:number = 0;
  public recordsPerPage:number = 12;

  constructor(private commonService:CommonService, private route: ActivatedRoute) {

  }

  getCountriesData(page:Number) {
    this.commonService.getRecipesbyCountry(page).subscribe({
      next: (data) => {
        this.countriesRecipes = data[0].countriesList;
        this.countriesCount = data[0].total[0].totalCountries;
      }
    })
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const query = Number(params.get('p')) || 1;
      this.getCountriesData(query);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  public countryDetails:Array<any> = [];
  public countryName:string= '';

  constructor(private route: ActivatedRoute, private commonService: CommonService) {

  }

  getCountryDetails(countryName:String) {
    this.commonService.getCountryDetails(countryName).subscribe({
      next: (data) => {
        this.countryDetails = data
        console.log('Data country details >> ', this.countryDetails);
      }
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.countryName = String(params.get('country'));
      console.log('CountryName param ', this.countryName);
      this.getCountryDetails(this.countryName);
    })
  }

}

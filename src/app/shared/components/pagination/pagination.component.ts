import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  public currentPage = 1;
  public pagination = ['<< prev', 'next >>'];

  constructor(private route: ActivatedRoute) { }

  @Input() totalRecords:number = 0;
  @Input() size:number = 10;

  ngOnChanges(changes: SimpleChanges): void {

  }

  createPagination(current:number) {
    let pageCount = Math.ceil(this.totalRecords/this.size);
    console.log('current >> ', current);
    if(current === 1) {      
      this.pagination.splice(1,0, current.toString());
      this.pagination.splice(2,0, pageCount.toString());
    } else {
      this.pagination.splice(1,0, (current-1).toString());
      this.pagination.splice(2,0, current.toString());
      this.pagination.splice(3,0, pageCount.toString());
    }    
  }
  
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.currentPage = Number(params.get('p'));
      console.log('Pagination >>> ', this.currentPage);
      this.createPagination(this.currentPage);
    })
  }
}

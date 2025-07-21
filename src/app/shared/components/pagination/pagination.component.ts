import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  public currentPage = 1;
  public pagination:Array<number> = [];
  public query = {p: 1};

  constructor(private route: ActivatedRoute, private router: Router) { }

  @Input() totalRecords:number = 0;
  @Input() size:number = 10;
  
  public pageCount = 0;

  ngOnChanges(changes: SimpleChanges): void {
    this.pageCount = Math.ceil(this.totalRecords/this.size);
    this.createPagination();
  }

  nextPage() {
    if(this.currentPage < this.pageCount) {
      this.currentPage = this.currentPage + 1;
      this.pageClick(this.currentPage);
    }
  }

  prevPage() {
    if(this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
      this.pageClick(this.currentPage);
    }
  }

  createPagination() {
    this.pagination = [];
    if(this.currentPage > 1) {
      this.pagination.push(1);
      if(this.currentPage > 2) this.pagination.push(this.currentPage - 1);
    }

    this.pagination.push(this.currentPage);

    if(this.currentPage < this.pageCount) {
      this.pagination.push(this.currentPage + 1);
      if(this.currentPage < (this.pageCount -1)) this.pagination.push(this.pageCount);
    }
  }
  pageClick(page:number) {
    this.currentPage = page;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        p: page
      }
    });
    this.pagination = [];
    this.createPagination();
  }
  
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.currentPage = Number(params.get('p'));
    })
  }
}

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

  ngOnChanges(changes: SimpleChanges): void {
    this.createPagination();
  }

  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.pageClick(this.currentPage);
  }

  prevPage() {
    this.currentPage = this.currentPage - 1;
    this.pageClick(this.currentPage);
  }

  createPagination() {
    this.pagination = [];
    let pageCount = Math.ceil(this.totalRecords/this.size);
    console.log('current >> ', this.currentPage);
    console.log('total >> ', this.totalRecords);
    if(this.currentPage !== 1) {
      this.pagination.push(1);
      this.pagination.push(this.currentPage - 1);
    }

    this.pagination.push(this.currentPage);

    if(this.currentPage !== (pageCount - 1)) {
      this.pagination.push(this.currentPage + 1);
      this.pagination.push(pageCount - 1);
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule],
  exports: [PaginationComponent] // 👈 make it available to other modules
})
export class SharedModule {}
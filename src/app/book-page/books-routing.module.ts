import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppPath } from '../core';
import { BookListComponent, BookItemComponent } from './components';
import { BookComponent } from './book.component';

const routes: Routes = [
  {
    path: AppPath.Books,
    component: BookComponent,
    children: [
      {
        path: AppPath.Empty,
        component: BookListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}

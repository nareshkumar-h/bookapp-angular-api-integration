import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BooksViewComponent } from './books/books-view/books-view.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'list-books', component: BooksListComponent },
  { path: 'view-book', component: BooksViewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

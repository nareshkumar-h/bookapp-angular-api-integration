#### Angular API Integration 


##### Prerequisite
* Mock API should be ready and running in http://localhost:3000
* APIs
  *  List book
  *  View book
  *  Add book
  *  Delete book
 
#### Task 1: Add HTTP Module
* app.config.ts
* Add provideHttpClient() line
```ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient()
  ]
};

```
 
###### Create Book List Component

```
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {

  books!: any[];

  constructor(private http: HttpClient) {
    console.log('BookListComponent');//Used for initialization

    // this.books = [
    //   {
    //     "id": "1",
    //     "title": "Learn HTML",
    //     "price": 500,
    //     "rating": 3.5
    //   },
    //   {
    //     "id": "2",
    //     "title": "Learn CSS",
    //     "price": 350,
    //     "rating": 4
    //   },
    //   {
    //     "id": "5ae1",
    //     "title": "Learn Angular",
    //     "price": 2000,
    //     "rating": 4.8
    //   }
    // ];

    //Backend Integration - URL, Method(GET/POST/PUT/PATCH/DELETE), Response
    const url = "http://localhost:3000/books";
    this.http.get(url).subscribe((res: any) => {

      //Display the api response
      console.log(res);
      this.books = res;
    });
  }




}

```

```
<p>Books List</p>

<!-- {{books | json}}  -->
<!-- json is an inbuilt pipe used to transform the data( object to string) -->
<a routerLink="/add-book">Add Book</a> <br />
<table border="1">
  <thead>
    <tr>
      <th>Sno</th>
      <th>Title</th>
      <th>Price</th>
      <th>Rating(out of 5)</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <!-- <tr>
      <td>1</td>
      <td>HTML</td>
    </tr> -->
    <tr *ngFor="let book of books;let i=index">
      <td>{{i+1}}</td>
      <td>{{book.title}}</td>
      <td>Rs.{{book.price}}</td>
      <td>{{book.rating}}</td>
      <td>
        <a routerLink="/view-book">View</a>
      </td>
    </tr>
  </tbody>
</table>
```

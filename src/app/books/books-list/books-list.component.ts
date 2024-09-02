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

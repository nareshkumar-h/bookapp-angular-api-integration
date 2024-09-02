import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-books-view',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './books-view.component.html',
  styleUrl: './books-view.component.css'
})
export class BooksViewComponent {

  book: any;

  constructor(private http: HttpClient) {
    console.log('BookViewComponent constructor is called');

    //initialize data
    // this.book = {
    //   "id": "1",
    //   "title": "Learn HTML",
    //   "price": 500,
    //   "rating": 3.5
    // };

    //Step 1: URL
    const url = "http://localhost:3000/books/1";
    this.http.get(url).subscribe((res: any) => {
      //print response
      console.log(res);
      this.book = res;
    });

    // Print the data
    console.log(this.book);
  }

}

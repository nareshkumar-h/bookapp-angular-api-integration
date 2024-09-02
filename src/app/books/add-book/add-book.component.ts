import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

  //declare form fields

  title!: string;
  price!: number;
  rating!: number;

  constructor(private http: HttpClient) {
    console.log('AddBook Component constructor');
  }

  onSubmit() {
    alert('Form is submitted');

    //Store the form data in JSON object, so that we can give it as input
    // to api
    const bookObj = {
      title: this.title,
      price: this.price,
      rating: this.rating
    };
    //print form data
    console.log("Form Data", bookObj);

    //Step : API integration
    const url = "http://localhost:3000/books";
    this.http.post(url, bookObj).subscribe((res: any) => {
      console.log('Response', res);
      alert("Successfully added book details");

      window.location.href = "/list-books";
    });
  }

}

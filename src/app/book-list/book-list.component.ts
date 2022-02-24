/*
================================================================
; Title: Assignment 8.2 Server Side Communications
; Author: Professor Krasso
; Date: 24 February 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Server Side Communications
================================================================
*/

import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  book!: IBook;
  books: Array<IBook> = [];

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.booksService.getBooks().subscribe((res) => {
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function (author) {
              return author.name;
            });
          }

          this.books.push({
            isbn: res[key].details.isbn_13
              ? res[key].details.isbn_13
              : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle
              ? res[key].details.subtitle
              : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors,
          });
        }
      }
    });
  }

  ngOnInit(): void {}

  // showBookDetails function
  showBookDetails(isbn: string) {
    this.book = this.books.find((book) => book.isbn === isbn);

    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: { book: this.book },
      disableClose: true,
      width: '800px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        this.book = null;
      }
    });
  }
}

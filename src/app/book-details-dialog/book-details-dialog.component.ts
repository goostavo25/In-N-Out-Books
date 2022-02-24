/*
=====================================================
; Title: Assignment 5.4 - Dialogs
; Author: Professor Krasso
; Date: 03 February 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Creating dialog boxes to display book
               details and button to confirm/close.
=====================================================
*/

import { Component, OnInit } from '@angular/core';

//Import statements for MatDialog, Inject and IBook
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss'],
})
export class BookDetailsDialogComponent implements OnInit {
  book: IBook;

  constructor(
    private dialogRef: MatDialogRef<BookDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.book = data.book;
  }

  ngOnInit(): void {}
}

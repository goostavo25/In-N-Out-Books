/*
================================================================
; Title: Assignment 8.2 Server Side Communications
; Author: Professor Krasso
; Date: 24 February 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Server Side Communications
================================================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  assignment: string;

  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books';
  }
}

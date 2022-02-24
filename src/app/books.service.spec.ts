/*
================================================================
; Title: Assignment 5.3 Data Tables
; Author: Professor Krasso
; Date: 03 February 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Using Angular Material to create data tables
================================================================
*/

import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

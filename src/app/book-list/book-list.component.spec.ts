/*
================================================================
; Title: Assignment 5.2 Layout and Navigation
; Author: Professor Krasso
; Date: 03 February 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Using Angular Material to implement navigation,
;              color theming, and working with flex-layout.
================================================================
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

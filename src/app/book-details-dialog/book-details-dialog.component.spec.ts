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

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsDialogComponent } from './book-details-dialog.component';

describe('BookDetailsDialogComponent', () => {
  let component: BookDetailsDialogComponent;
  let fixture: ComponentFixture<BookDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDetailsDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

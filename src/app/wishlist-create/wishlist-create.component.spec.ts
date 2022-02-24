/*
=====================================================
; Title: Assignment 6.2 - Input/Output Properties
; Author: Professor Krasso
; Date: 09 February 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Creating forms to capture user data
;               and output user entries
=====================================================
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistCreateComponent } from './wishlist-create.component';

describe('WishlistCreateComponent', () => {
  let component: WishlistCreateComponent;
  let fixture: ComponentFixture<WishlistCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishlistCreateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

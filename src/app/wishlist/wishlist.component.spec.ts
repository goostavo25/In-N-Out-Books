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

import { WishlistComponent } from './wishlist.component';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishlistComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

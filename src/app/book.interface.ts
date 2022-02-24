/*
================================================================
; Title: Assignment 5.3 Data Tables
; Author: Professor Krasso
; Date: 03 February 2022
; Modified By: Gustavo Roo Gonzalez
; Description: Using Angular Material to create data tables
================================================================
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}

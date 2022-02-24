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

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

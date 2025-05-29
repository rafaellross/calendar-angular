import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import localeFr from '@angular/common/locales/pt'; // to register french

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR' // Set the default locale to French
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

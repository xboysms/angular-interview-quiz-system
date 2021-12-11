import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CustomerModule } from './customer/customer.module';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StylesComponent } from './styles/styles.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    StylesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CustomerModule,
    EffectsModule.forRoot([]),
    HttpClientModule,
    FlexLayoutModule 
    // https://github.com/angular/flex-layout#readme
    // https://github.com/angular/flex-layout/wiki/Declarative-API-Overview
    // https://tburleson-layouts-demos.firebaseapp.com/#/docs
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

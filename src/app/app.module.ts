import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderModule } from './slider/slider.module';
import { HomeComponent } from './home/home.component';

import {HttpClientModule} from '@angular/common/http';
import { AddmoviesComponent } from './addmovies/addmovies.component';
import { AppRoutingModule } from './app-routing.module';
import{FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from  '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddmoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SliderModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

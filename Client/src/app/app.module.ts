import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results.component';

import { HomeService } from './home/home.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

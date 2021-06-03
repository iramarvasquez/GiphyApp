import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GifsComponent } from './gifs/gifs.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GifsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SentenceListComponent } from './sentence-list/sentence-list.component';
import { SentenceComponent } from './sentence/sentence.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SentenceListComponent,
    SentenceComponent,
    InlineEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

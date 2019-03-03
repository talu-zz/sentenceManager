import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxPopperModule } from 'ngx-popper';

import { AppComponent } from './app.component';
import { SentenceListComponent } from './sentence-list/sentence-list.component';
import { SentenceComponent } from './sentence/sentence.component';
import { SentenceEditComponent } from './sentence-edit/sentence-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SentenceListComponent,
    SentenceComponent,
    SentenceEditComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: ':id/edit',
        component: SentenceEditComponent
      }
    ]),
    NgxPopperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

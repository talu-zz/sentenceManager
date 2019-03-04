import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Sentence } from '../models/sentence.model';
import { SentenceSelectors } from '../selectors';
import { tap } from 'rxjs/operators';
import {
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-sentence-list',
  templateUrl: './sentence-list.component.html',
  styleUrls: ['./sentence-list.component.scss'],
  animations: [
    trigger('Highlight', [
      state('updated', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(800)])
    ])
  ]
})
export class SentenceListComponent implements OnInit {
  sentences$: Observable<Sentence[]>;
  intialLoad: boolean;

  constructor(private store: Store<AppState>) {
    this.intialLoad = true;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(): any {
    this.sentences$ = this.store.select(SentenceSelectors.selectSentences);
  }
}

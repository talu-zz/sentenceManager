import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Sentence } from '../models/sentence.model';

@Component({
  selector: 'app-sentence-list',
  templateUrl: './sentence-list.component.html',
  styleUrls: ['./sentence-list.component.scss']
})
export class SentenceListComponent implements OnInit {
  sentences$: Observable<Sentence[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.loadData();
  }

  loadData(): any {
    this.sentences$ = this.store.select('sentence');
  }
}

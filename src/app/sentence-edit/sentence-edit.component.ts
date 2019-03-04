import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

import { SentenceSelectors } from '../selectors';
import { SentenceActions } from '../actions';

@Component({
  templateUrl: './sentence-edit.component.html',
  styleUrls: ['./sentence-edit.component.scss']
})
export class SentenceEditComponent implements OnInit, OnDestroy {
  sentenceForm: any;
  routeParams$: any;
  id: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.sentenceForm = this.fb.group({
      subject: '',
      verb: '',
      object: ''
    });

    this.routeParams$ = this.route.paramMap
      .pipe(
        switchMap((params: Params) =>
          this.store.select(SentenceSelectors.getById(+params.get('id')))
        )
      )
      .subscribe(sentence => {
        this.id = sentence.n;
        this.sentenceForm.patchValue({
          subject: sentence.s,
          verb: sentence.v,
          object: sentence.o
        });
      });
  }

  updateSentence() {
    this.store.dispatch(
      new SentenceActions.UpdateSentence({
        n: this.id,
        s: this.sentenceForm.value.subject,
        v: this.sentenceForm.value.verb,
        o: this.sentenceForm.value.object
      })
    );
    this.router.navigate(['/']);
  }

  discardChanges() {
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.routeParams$.unsubscribe();
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SentencesService } from '../sentences.service';
import { switchMap } from 'rxjs/operators';

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
    private sentences: SentencesService
  ) {}

  ngOnInit() {
    this.sentenceForm = this.fb.group({
      subject: '',
      verb: '',
      object: ''
    });

    this.routeParams$ = this.route.paramMap
      .pipe(
        switchMap((params: Params) => this.sentences.get(+params.get('id')))
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
    console.log(
      'TCL: SentenceEditComponent -> updateSentence -> this.sentenceForm',
      this.sentenceForm.value
    );

    this.sentences
      .update({
        n: this.id,
        s: this.sentenceForm.value.subject,
        v: this.sentenceForm.value.verb,
        o: this.sentenceForm.value.object
      })
      .subscribe(() =>
        this.router.navigate(['/'], { queryParams: { saved: this.id } })
      );
  }

  discardChanges() {
    this.router.navigate(['/'], { queryParams: { discard: this.id } });
  }

  ngOnDestroy(): void {
    this.routeParams$.unsubscribe();
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { SentencesService } from '../sentences.service';
import { sentence } from '../sentenceManager.types';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sentence-list',
  templateUrl: './sentence-list.component.html',
  styleUrls: ['./sentence-list.component.scss']
})
export class SentenceListComponent implements OnInit, OnDestroy {
  sentences$: Observable<sentence[]>;
  routeParams$: any;

  constructor(
    private sentences: SentencesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadData();
    this.routeParams$ = this.route.queryParamMap
    .subscribe(params => {
    if(params.has('saved')){
      this.loadData();
    }

      
    });
  }

  loadData(): any {    
    this.sentences$ = this.sentences.getAll();
  }

  ngOnDestroy(): void {}
}

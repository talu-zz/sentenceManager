import { Component, OnInit } from '@angular/core';
import { SentencesService } from '../sentences.service';

@Component({
  selector: 'app-sentence-list',
  templateUrl: './sentence-list.component.html',
  styleUrls: ['./sentence-list.component.scss']
})
export class SentenceListComponent implements OnInit {
  savedSentences: sentence[];

  constructor(private sentences: SentencesService) {}

  ngOnInit() {
    this.getSavedSentences();
  }

  private getSavedSentences(){
    this.sentences
    .getAll()
    .subscribe(sentences => (this.savedSentences = sentences));
  }

  save(updatedData: sentence) {
    this.sentences.update(updatedData).subscribe(() => this.getSavedSentences());
  }
}

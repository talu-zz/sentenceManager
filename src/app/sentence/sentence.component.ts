import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { sentence } from '../sentenceManager.types';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.scss']
})
export class SentenceComponent implements OnInit {
  @Input() data: sentence;
  state: string;

  constructor() {}

  ngOnInit() {
    this.state = (
      `${(this.data.s && 'Subject ') || ''}` +
      `${(this.data.v && 'Verb ') || ''}` +
      `${(this.data.o && 'Object') || ''}`).trim();
  }
}

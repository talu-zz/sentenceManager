import { Component, Input, Output, EventEmitter } from '@angular/core';
import { sentence } from '../sentenceManager.types';

@Component({
  selector: 'app-sentence',
  template: ''
})
export class MockSentenceComponent {
  @Input() data: sentence;
  @Output() changed: EventEmitter<sentence> = new EventEmitter<sentence>();
}

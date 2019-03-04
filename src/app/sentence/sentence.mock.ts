import { Component, Input } from '@angular/core';
import { Sentence } from '../models/sentence.model';

@Component({
  selector: 'app-sentence',
  template: ''
})
export class MockSentenceComponent {
  @Input() data: Sentence;
}

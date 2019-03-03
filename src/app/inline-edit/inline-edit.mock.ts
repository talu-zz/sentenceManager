import { Component, Input, Output, EventEmitter } from '@angular/core';
import { sentence } from '../sentenceManager.types';

@Component({
  selector: 'app-inline-edit',
  template: ''
})
export class MockInlineEditComponent {
  @Input() value: string;
  @Output() update: EventEmitter<string> = new EventEmitter<string>();
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.scss']
})
export class SentenceComponent implements OnInit {
  @Input() data: sentence;
  @Output() changed: EventEmitter<sentence> = new EventEmitter<sentence>();
  update: sentence;
  state: string;

  constructor() {}

  ngOnInit() {
    this.state =
      `${(this.data.s && 'Subject') || ''} ` +
      `${(this.data.v && 'Verb') || ''} ` +
      `${(this.data.o && 'Object') || ''}`;
    this.update = { ...this.data };
  }

  updateSentence(updateData: any) {
    this.update = { ...this.update, ...updateData };
    this.changed.emit(this.update);
  }
}

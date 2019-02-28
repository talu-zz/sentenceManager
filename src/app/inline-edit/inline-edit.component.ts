import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.scss']
})
export class InlineEditComponent implements OnInit {
  @Input() value: string;
  @Input() tabindex: number;
  @Output() update: EventEmitter<string> = new EventEmitter<string>();
  isEditMode: boolean;
  updateValue: string;
  @ViewChild('myInput') myInput: ElementRef;

  constructor() {}

  ngOnInit() {
    this.isEditMode = false;
    this.updateValue = this.value;
  }

  startEdit() {
    this.isEditMode = true;
    setTimeout(() => this.myInput.nativeElement.focus());
  }

  stopEdit() {
    this.isEditMode = false;
    this.update.emit(this.updateValue);
  }
}

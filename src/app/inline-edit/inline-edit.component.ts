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
  @Output() update: EventEmitter<string> = new EventEmitter<string>();
  isEditMode: boolean;
  updateValue: string;
  @ViewChild('myInput') myInput: ElementRef;
  @ViewChild('widthRef') widthRef: ElementRef;
  width: number;

  constructor() {}

  ngOnInit() {    
    this.isEditMode = false;
    this.updateValue = this.value;
  }

  startEdit() {
    this.width = this.widthRef.nativeElement.offsetWidth + 2;
    this.isEditMode = true;
    setTimeout(() => this.myInput.nativeElement.focus());
  }

  stopEdit() {
    this.isEditMode = false;
    this.update.emit(this.updateValue);
  }

  onInput($event) {
    this.updateValue = $event.target.value;
    this.width = this.widthRef.nativeElement.offsetWidth + 16;
  }
}

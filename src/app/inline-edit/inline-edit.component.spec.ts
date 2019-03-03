import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditComponent } from './inline-edit.component';

describe('InlineEditComponent', () => {
  let component: InlineEditComponent;
  let fixture: ComponentFixture<InlineEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InlineEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should be in edit mode on focus', () => {
  //   spyOn(component.myInput.nativeElement, 'focus');
  //   fixture.debugElement.nativeElement.focus();

  //   fixture.whenStable().then(() => {
  //     expect(component.isEditMode).toBeTruthy();
  //     expect(component.myInput.nativeElement.focus).toHaveBeenCalled();
  //   });
  // });

  // it('should not be in edit mode on blur', () => {
  //   fixture.debugElement.nativeElement.focus();

  //   fixture
  //     .whenStable()
  //     .then(() => fixture.debugElement.nativeElement.blur())
  //     .then(() => expect(component.isEditMode).toBeFalsy());
  // });

  // it('should call update after ending edit', () => {
  //   spyOn(component.update, 'emit');
  //   const newValue = 'newValue';

  //   component.startEdit();
  //   component.onInput(newValue);
  //   component.stopEdit();

  //   expect(component.update.emit).toHaveBeenCalledWith(newValue);
  // });
});

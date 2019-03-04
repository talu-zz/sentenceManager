import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceEditComponent } from './sentence-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

class MockStore {
  select = (params: any) =>
    of({
      n: 1,
      s: 'Anna',
      v: 'is eating',
      o: 'a cookie'
    });
  dispatch = () => {};
}

describe('SentenceEditComponent', () => {
  let component: SentenceEditComponent;
  let fixture: ComponentFixture<SentenceEditComponent>;

  let selectSpy: jasmine.Spy;
  let dispatchSpy: jasmine.Spy;

  beforeEach(async(() => {
    const mockStore = new MockStore();

    selectSpy = spyOn(mockStore, 'select');
    dispatchSpy = spyOn(mockStore, 'dispatch');

    TestBed.configureTestingModule({
      declarations: [SentenceEditComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [{ provide: Store, useValue: mockStore }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(selectSpy).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should update sentence on submit', () => {
    component.updateSentence();
    expect(dispatchSpy).toHaveBeenCalled();
  });
});

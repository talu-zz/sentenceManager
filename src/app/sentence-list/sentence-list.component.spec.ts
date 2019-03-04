import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceListComponent } from './sentence-list.component';
import { MockSentenceComponent } from '../sentence/sentence.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

class MockStore {
  select = (params: any) =>
    of([{
      n: 1,
      s: 'Anna',
      v: 'is eating',
      o: 'a cookie'
    }]);
  dispatch = () => {};
}

describe('SentenceListComponent', () => {
  let component: SentenceListComponent;
  let fixture: ComponentFixture<SentenceListComponent>;

  let selectSpy: jasmine.Spy;

  beforeEach(async(() => {
    const mockStore = new MockStore();

    selectSpy = spyOn(mockStore, 'select');

    TestBed.configureTestingModule({
      declarations: [SentenceListComponent, MockSentenceComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: Store, useValue: mockStore }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(selectSpy).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });
});

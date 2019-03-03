import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceListComponent } from './sentence-list.component';
import { MockSentenceComponent } from '../sentence/sentence.mock';

describe('SentenceListComponent', () => {
  let component: SentenceListComponent;
  let fixture: ComponentFixture<SentenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SentenceListComponent, MockSentenceComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

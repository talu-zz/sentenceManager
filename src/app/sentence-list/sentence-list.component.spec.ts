import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceListComponent } from './sentence-list.component';
import { MockSentenceComponent } from '../sentence/sentence.mock';
import { RouterTestingModule } from '@angular/router/testing';

describe('SentenceListComponent', () => {
  let component: SentenceListComponent;
  let fixture: ComponentFixture<SentenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SentenceListComponent, MockSentenceComponent],
      imports: [RouterTestingModule]
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

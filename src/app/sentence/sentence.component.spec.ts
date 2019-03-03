import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceComponent } from './sentence.component';
import { MockInlineEditComponent } from '../inline-edit/inline-edit.mock';
import { sentence } from '../sentenceManager.types';

describe('SentenceComponent', () => {
  let component: SentenceComponent;
  let fixture: ComponentFixture<SentenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SentenceComponent, MockInlineEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceComponent);
    component = fixture.componentInstance;
    component.data = <sentence>{
      n: 1,
      s: 'Anna',
      v: 'is eating',
      o: 'a cookie'
    };
    fixture.detectChanges();
  });

  it('should create', () => {    
    expect(component).toBeTruthy();
  });
});

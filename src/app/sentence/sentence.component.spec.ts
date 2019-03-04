import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceComponent } from './sentence.component';
import { NgxPopperModule } from 'ngx-popper';
import { Sentence } from '../models/sentence.model';

describe('SentenceComponent', () => {
  let component: SentenceComponent;
  let fixture: ComponentFixture<SentenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SentenceComponent],
      imports: [NgxPopperModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceComponent);
    component = fixture.componentInstance;
  });

  describe('should create', () => {
    beforeEach(() => {
      component.data = <Sentence>{
        n: 1,
        s: 'Anna',
        v: 'is eating',
        o: 'a cookie'
      };
      fixture.detectChanges();
    });

    it('without errors', () => {
      expect(component).toBeTruthy();
    });

    it('with correct data', () => {
      const compiled = fixture.debugElement.nativeElement;
    
      expect(compiled.querySelector('div[title] > span:first-child').textContent).toContain('Anna');
      expect(compiled.querySelector('div[title] > span:nth-child(2)').textContent).toContain('is eating');
      expect(compiled.querySelector('div[title] > span:nth-child(3)').textContent).toContain('a cookie');
    });
  });

  describe('Should compose correct state string for sentence with', () => {
    it('subject, verb and object', () => {
      component.data = <Sentence>{
        n: 1,
        s: 'Anna',
        v: 'is eating',
        o: 'a cookie'
      };
      fixture.detectChanges();

      expect(component.state).toBe('Subject Verb Object');
    });

    it('subject and verb', () => {
      component.data = <Sentence>{
        n: 1,
        s: 'Anna',
        v: 'is eating',
        o: undefined
      };
      fixture.detectChanges();

      expect(component.state).toBe('Subject Verb');
    });

    it('subject and object', () => {
      component.data = <Sentence>{
        n: 1,
        s: 'Anna',
        v: undefined,
        o: 'a cookie'
      };
      fixture.detectChanges();

      expect(component.state).toBe('Subject Object');
    });

    it('verb', () => {
      component.data = <Sentence>{
        n: 1,
        s: '',
        v: 'is eating',
        o: undefined
      };
      fixture.detectChanges();

      expect(component.state).toBe('Verb');
    });
  });
});

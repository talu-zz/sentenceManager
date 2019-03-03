import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { sentence } from './sentenceManager.types';

@Injectable({
  providedIn: 'root'
})
export class SentencesService {
  private data: sentence[] = [
    {
      n: 1,
      s: 'Anna',
      v: 'is eating',
      o: 'a cookie'
    },
    {
      n: 2,
      s: 'Henry',
      v: 'does',
      o: 'a handstand'
    },
    {
      n: 3,
      s: 'Sarah',
      o: 'a pen'
    },
    {
      n: 4,
      s: 'John',
      v: 'tells'
    },
    {
      n: 5,
      s: '',
      o: 'a drama'
    }
  ];

  constructor() {}

  get(id: number): Observable<sentence> {
    return of(this.data.filter(d => d.n == id)[0]);
  }

  getAll(): Observable<sentence[]> {
    return of(this.data);
  }

  update(updatedSentence: sentence): Observable<boolean> {
		console.log('TCL: SentencesService -> constructor -> sentence', updatedSentence)
    this.data = this.data.map(s =>
      s.n == updatedSentence.n ? updatedSentence : s
    );
    
		console.log('TCL: SentencesService -> constructor -> this.data', this.data)
    return of(true);
  }
}

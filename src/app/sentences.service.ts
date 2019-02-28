import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

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

  update(updatedSentence: sentence): Observable<boolean> {
    this.data = this.data.map(s =>
      s.n == updatedSentence.n ? updatedSentence : s
    );
    return of(true);
  }
  constructor() {}

  getAll(): Observable<sentence[]> {
    return of(this.data);
  }
}

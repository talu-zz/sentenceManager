import { Sentence } from '../models/sentence.model';
import * as SentenceActions from '../actions/sentence.actions';

const initialState: Sentence[] = [
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

export function reducer(
  state: Sentence[] = initialState,
  action: SentenceActions.Actions
) {
  switch (action.type) {
    case SentenceActions.UPDATE_SENTENCE:
      return state.map(s => (s.n == action.payload.n ? action.payload : s));
    default:
      return state;
  }
}

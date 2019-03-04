import { Action } from '@ngrx/store';
import { Sentence } from '../models/sentence.model';

export const UPDATE_SENTENCE = '[SENTENCE] Update';

export class UpdateSentence implements Action {
  readonly type = UPDATE_SENTENCE;

  constructor(public payload: Sentence) {}
}

export type Actions = UpdateSentence;
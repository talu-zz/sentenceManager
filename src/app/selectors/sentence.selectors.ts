import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { Sentence } from '../models/sentence.model';

export const selectSentences = (state: AppState): Sentence[] => state.sentence;

export const getById = (id: number) =>
  createSelector(
    selectSentences,
    sentences => (sentences.filter(s => s.n == id) || [<Sentence>{}])[0]
  );

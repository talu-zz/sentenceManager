import { Sentence } from './models/sentence.model';

export interface AppState {
  readonly sentence: Sentence[];
}

import { SentencesPage } from './sentences.po';

describe('workspace-project App', () => {
  let page: SentencesPage;

  beforeEach(() => {
    page = new SentencesPage();
  });

  it('should show popper box on hover', () => {
    page.navigateTo();
    expect(page.hoverSentenceAndGetPopperBoxCssDisplayValue()).toEqual('block');
  });

  it('should edit and save sentence', finish => {
    page
      .navigateTo()
      .then(page.clickSentence)
      .then(page.changeObject)
      .then(page.submitChanges)
      .then(() => {
        expect(page.readSentenceFromList()).toEqual(
          'Annais eatinga cookie with chocolate'
        );
        finish();
      });
  });
});

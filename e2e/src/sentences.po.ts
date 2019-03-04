import { browser, by, element, Key } from 'protractor';

export class SentencesPage {
  navigateTo() {
    return browser.get('/');
  }

  hoverSentenceAndGetPopperBoxCssDisplayValue() {
    var firstSentenceEl = element(
      by.css('app-sentence-list div a:first-child')
    );
    return browser
      .actions()
      .mouseMove(firstSentenceEl)
      .perform()      
      .then(() =>
        firstSentenceEl
          .element(by.css('popper-content div'))
          .getCssValue('display')
      );
  }

  clickSentence() {
    var firstSentenceEl = element(
      by.css('app-sentence-list div a:first-child')
    );

    return browser
      .actions()
      .mouseMove(firstSentenceEl)
      .click()
      .perform();
  }

  changeObject() {
    var subjectInputEl = element(by.css('#edit #sentence_object'));
    return subjectInputEl
      .click()       
      .then(() => subjectInputEl.sendKeys(' with chocolate'));
  }

  submitChanges() {
    var submitBtnEl = element(by.css('#edit button[type="submit"]'));
    return submitBtnEl.click();
  }

  readSentenceFromList() {
    var firstSentenceEl = element(
      by.css('app-sentence-list div a:first-child')
    );
    return firstSentenceEl.getText();
  }
}

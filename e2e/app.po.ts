import { browser, by, element } from 'protractor';

export class CodewikiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cwiki-home h1')).getText();
  }
}

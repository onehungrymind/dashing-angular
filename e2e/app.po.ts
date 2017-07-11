import { browser, by, element } from 'protractor';

export class MyAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getToolbarText() {
    return element(by.css('app-root md-toolbar span')).getText();
  }
}

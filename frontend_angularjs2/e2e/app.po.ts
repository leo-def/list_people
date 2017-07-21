import { browser, by, element } from 'protractor';

export class ListPeoplePage {
  navigateTo() {
    return browser.get('/people');
  }

  getItemsList(){
	return element.all(by.css('.person')).count();
  }
}

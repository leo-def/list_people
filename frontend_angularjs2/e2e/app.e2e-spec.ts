import { ListPeoplePage } from './app.po';

describe('list-people App', () => {
  let page: ListPeoplePage;

  beforeEach(() => {
    page = new ListPeoplePage();
  });
  
   it('count items', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toBe(10);
  });
});
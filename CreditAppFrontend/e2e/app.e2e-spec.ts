import { CreditAppFrontPage } from './app.po';

describe('credit-app-front App', () => {
  let page: CreditAppFrontPage;

  beforeEach(() => {
    page = new CreditAppFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

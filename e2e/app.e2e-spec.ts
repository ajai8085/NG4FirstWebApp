import { FirstWebAppPage } from './app.po';

describe('first-web-app App', () => {
  let page: FirstWebAppPage;

  beforeEach(() => {
    page = new FirstWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

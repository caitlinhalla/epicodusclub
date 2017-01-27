import { EpicodusclubPage } from './app.po';

describe('epicodusclub App', function() {
  let page: EpicodusclubPage;

  beforeEach(() => {
    page = new EpicodusclubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

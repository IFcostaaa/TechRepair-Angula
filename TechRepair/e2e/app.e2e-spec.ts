import { TechrepairPage } from './app.po';

describe('techrepair App', function() {
  let page: TechrepairPage;

  beforeEach(() => {
    page = new TechrepairPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

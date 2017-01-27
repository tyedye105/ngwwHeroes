import { WwHeoresPage } from './app.po';

describe('ww-heores App', function() {
  let page: WwHeoresPage;

  beforeEach(() => {
    page = new WwHeoresPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

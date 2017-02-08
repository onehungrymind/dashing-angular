import { Dashing2Page } from './app.po';

describe('dashing2 App', function() {
  let page: Dashing2Page;

  beforeEach(() => {
    page = new Dashing2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { DashingAngularPage } from './app.po';

describe('dashing-angular App', () => {
  let page: DashingAngularPage;

  beforeEach(() => {
    page = new DashingAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

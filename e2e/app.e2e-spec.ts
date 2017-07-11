import { MyAppPage } from './app.po';

describe('my-app App', () => {
  let page: MyAppPage;

  beforeEach(() => {
    page = new MyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();

    expect(page.getToolbarText()).toEqual('menu');
  });
});

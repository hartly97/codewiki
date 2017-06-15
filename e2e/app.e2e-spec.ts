import { CodewikiPage } from './app.po';

describe('codewiki App', () => {
  let page: CodewikiPage;

  beforeEach(() => {
    page = new CodewikiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

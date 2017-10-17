import { AdmissionTestPage } from './app.po';

describe('admission-test App', () => {
  let page: AdmissionTestPage;

  beforeEach(() => {
    page = new AdmissionTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

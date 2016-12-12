import { Angular2RoutingPage } from './app.po';

describe('angular2-routing App', function() {
  let page: Angular2RoutingPage;

  beforeEach(() => {
    page = new Angular2RoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

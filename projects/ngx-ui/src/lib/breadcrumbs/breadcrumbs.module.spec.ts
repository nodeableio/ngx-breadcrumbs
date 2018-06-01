import { NioBreadcrumbsModule } from './breadcrumbs.module';

describe('NioBreadcrumbsModule', () => {
  let breadcrumbsModule: NioBreadcrumbsModule;

  beforeEach(() => {
    breadcrumbsModule = new NioBreadcrumbsModule();
  });

  it('should create an instance', () => {
    expect(breadcrumbsModule).toBeTruthy();
  });
});

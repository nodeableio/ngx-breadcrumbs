import { NioWidgetsModule } from './widgets.module';

describe('WidgetModule', () => {
  let widgetModule: NioWidgetsModule;

  beforeEach(() => {
    widgetModule = new NioWidgetsModule();
  });

  it('should create an instance', () => {
    expect(NioWidgetsModule).toBeTruthy();
  });
});

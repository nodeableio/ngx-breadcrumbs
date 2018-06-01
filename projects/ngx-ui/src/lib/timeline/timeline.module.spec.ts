import { NioTimelineModule } from './timeline.module';

describe('NioTimelineModule', () => {
  let timelineModule: NioTimelineModule;

  beforeEach(() => {
    timelineModule = new NioTimelineModule();
  });

  it('should create an instance', () => {
    expect(timelineModule).toBeTruthy();
  });
});

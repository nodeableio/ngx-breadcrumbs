import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NioTimelineComponent } from './timeline.component';

describe('NioTimelineComponent', () => {
  let component: NioTimelineComponent;
  let fixture: ComponentFixture<NioTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NioTimelineComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NioTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NioDividerComponent } from './divider.component';

describe('DividerComponent', () => {
  let component: NioDividerComponent;
  let fixture: ComponentFixture<NioDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NioDividerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NioDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

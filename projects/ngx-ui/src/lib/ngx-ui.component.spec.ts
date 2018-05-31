import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUiComponent } from './ngx-ui.component';

describe('NgxUiComponent', () => {
  let component: NgxUiComponent;
  let fixture: ComponentFixture<NgxUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

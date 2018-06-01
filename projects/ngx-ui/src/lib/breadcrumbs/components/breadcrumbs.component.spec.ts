import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NioBreadcrumbsComponent } from './breadcrumbs.component';

describe('NioBreadcrumbsComponent', () => {
  let component: NioBreadcrumbsComponent;
  let fixture: ComponentFixture<NioBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NioBreadcrumbsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NioBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

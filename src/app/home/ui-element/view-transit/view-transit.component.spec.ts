import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransitComponent } from './view-transit.component';

describe('ViewTransitComponent', () => {
  let component: ViewTransitComponent;
  let fixture: ComponentFixture<ViewTransitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTransitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTransitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

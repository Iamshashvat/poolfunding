import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackProcessComponent } from './track-process.component';

describe('TrackProcessComponent', () => {
  let component: TrackProcessComponent;
  let fixture: ComponentFixture<TrackProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
